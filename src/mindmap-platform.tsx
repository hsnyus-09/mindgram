import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Plus, 
  Star, 
  Share2, 
  Heart, 
  MessageCircle, 
  User, 
  Search, 
  LogIn, 
  UserPlus,
  Save,
  Eye,
  Globe,
  Lock,
  Trash2,
  Edit,
  Sparkles,
  Menu,
  ArrowLeft,
  X
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useUser } from './UserContext';
import { db, ref, push, set, onValue } from './firebase';
import { callOpenAIGenerate } from "./api";

// Mock GPT API 응답 (실제로는 OpenAI API 연동)
const mockGPTResponse = {
  "AI": ["머신러닝", "딥러닝", "자연어처리", "컴퓨터비전"],
  "UX디자인": ["사용자 연구", "프로토타이핑", "인터랙션 디자인", "접근성"],
  "웹개발": ["프론트엔드", "백엔드", "API", "데이터베이스"],
  "모바일": ["네이티브 앱", "크로스플랫폼", "반응형 디자인", "PWA"]
};

// Mock 데이터
const mockUsers = [
  { id: 1, name: "김개발", email: "dev@example.com" },
  { id: 2, name: "이디자인", email: "design@example.com" }
];

const mockPublicMaps = [
  {
    id: 1,
    title: "AI 기반 UX 아이디어",
    author: "김개발",
    likes: 15,
    comments: 3,
    nodes: [
      { id: "1", text: "AI UX", x: 400, y: 300, connections: ["2", "3"] },
      { id: "2", text: "개인화", x: 300, y: 200, connections: [] },
      { id: "3", text: "자동화", x: 500, y: 200, connections: [] }
    ]
  },
  {
    id: 2,
    title: "모바일 앱 아이디어",
    author: "이디자인",
    likes: 8,
    comments: 5,
    nodes: [
      { id: "1", text: "모바일앱", x: 400, y: 300, connections: ["2"] },
      { id: "2", text: "헬스케어", x: 300, y: 200, connections: [] }
    ]
  }
];

const MindMapPlatform = (props: any) => {
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // Use global user context
  const editorOnly = props.editorOnly;
  const communityOnly = props.communityOnly;
  const [currentView, setCurrentView] = useState('home');
  const [nodes, setNodes] = useState([
    { id: "1", text: "아이디어", x: 400, y: 300, connections: [] }
  ]);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  // 기존 hoveredNode 상태를 toggledNode로 변경
  const [toggledNode, setToggledNode] = useState<any>(null);
  const [mapTitle, setMapTitle] = useState("새로운 마인드맵");
  const [isPublic, setIsPublic] = useState(false);
  const [publicMaps, setPublicMaps] = useState<any[]>([]); // 실제 공개 마인드맵 데이터 저장
  const [searchQuery, setSearchQuery] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [sidebarContent, setSidebarContent] = useState<any>(null);
  const [editingNode, setEditingNode] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);

  // AI 추천 상태 추가
  const [aiSummary, setAiSummary] = useState<{ loading: boolean; error: string | null; result: string | null } | null>(null);
  const [aiKeywords, setAiKeywords] = useState<{ loading: boolean; error: string | null; result: string | null } | null>(null);
  const [aiNews, setAiNews] = useState<{ loading: boolean; error: string | null; result: string | null } | null>(null);

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);
  
  const svgRef = useRef(null);
  const [dragState, setDragState] = useState({ isDragging: false, nodeId: null, offset: { x: 0, y: 0 } });
  // 1. 상태 추가
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // SVG 크기 동적 참조
  const getSvgSize = () => {
    const svg = svgRef.current as SVGSVGElement | null;
    if (!svg) return { width: 600, height: 400 };
    const rect = svg.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  };

  // 노드 추가 (퍼센트 기반 위치)
  const addNode = useCallback((parentId: any, text: any, x: any, y: any) => {
    const svgSize = getSvgSize();
    // x, y가 0~1 사이면 퍼센트로 해석
    const px = (x > 1 ? x : x * svgSize.width);
    const py = (y > 1 ? y : y * svgSize.height);
    const newId = Date.now().toString();
    const newNode = { id: newId, text, x: px, y: py, connections: [] };
    setNodes((prev: any) => {
      const updated = [...prev, newNode];
      if (parentId) {
        return updated.map((node: any) =>
          node.id === parentId 
            ? { ...node, connections: [...node.connections, newId] }
            : node
        );
      }
      return updated;
    });
  }, []);

  // GPT 기반 노드 확장 (퍼센트 기반, 겹치지 않게 개선)
  const expandNode = useCallback(async (nodeId: any, nodeText: any) => {
    const svgSize = getSvgSize();
    setSidebarContent && setSidebarContent({
      type: 'expansion',
      title: `"${nodeText}" 확장 결과`,
      content: 'AI가 관련 아이디어를 불러오는 중...'
    });
    try {
      const result = await callOpenAIGenerate(`"${nodeText}"라는 주제와 관련된 새로운 아이디어 3개를 JSON 배열로 반환해줘. 각 아이디어는 {\"text\":\"아이디어 제목(10자 이내)\"} 형태여야 하며, 마크다운/HTML 없이 JSON만 반환해.`);
      let suggestions: any[] = [];
      try {
        suggestions = JSON.parse(result);
      } catch {
        setSidebarContent && setSidebarContent({
          type: 'expansion',
          title: `"${nodeText}" 확장 결과`,
          content: 'AI 응답 파싱 오류'
        });
        return;
      }
      const parentNode = nodes.find((n: any) => n.id === nodeId);
      if (!parentNode) return;
      const baseAngle = -90;
      const angleStep = 360 / suggestions.length;
      const distance = Math.min(svgSize.width, svgSize.height) * 0.22;
      suggestions.forEach((suggestion: any, index: any) => {
        const angle = baseAngle + index * angleStep;
        const rad = angle * Math.PI / 180;
        const newX = (parentNode.x + Math.cos(rad) * distance) / svgSize.width;
        const newY = (parentNode.y + Math.sin(rad) * distance) / svgSize.height;
        setTimeout(() => addNode(nodeId, suggestion.text, newX, newY), index * 200);
      });
      setSidebarContent && setSidebarContent({
        type: 'expansion',
        title: `"${nodeText}" 확장 결과`,
        content: `AI가 제안한 ${suggestions.length}개의 관련 아이디어가 추가되었습니다.`
      });
    } catch (e) {
      setSidebarContent && setSidebarContent({
        type: 'expansion',
        title: `"${nodeText}" 확장 결과`,
        content: 'AI 관련 아이디어를 불러오지 못했습니다.'
      });
    }
  }, [nodes, addNode, getSvgSize, setSidebarContent]);

  // 노드 추천
  const recommendNode = useCallback(async (nodeId: any, nodeText: any) => {
    setSidebarContent({
      type: 'recommendation',
      title: `"${nodeText}" 추천 정보`,
      content: <div className="text-center text-gray-500 py-8">AI 추천 정보를 불러오는 중...</div>
    });
    try {
      const result = await callOpenAIGenerate(`"${nodeText}"라는 주제에 대해 아래 형식의 JSON 배열로 3가지 추천 정보를 생성해줘. 각 추천은 { \"title\": \"추천 제목\", \"summary\": \"한 줄 요약\", \"link\": \"관련 링크\" } 형태여야 하며, summary는 30자 이내로 간단하게, link는 실제 관련 위키/뉴스/공식문서 등 신뢰할 수 있는 URL로 넣어줘. 마크다운/HTML 없이 JSON만 반환해.`);
      let items: any[] = [];
      try {
        items = JSON.parse(result);
      } catch {
        setSidebarContent({
          type: 'recommendation',
          title: `"${nodeText}" 추천 정보`,
          content: <div className="text-red-500">AI 응답 파싱 오류</div>
        });
        return;
      }
      setSidebarContent({
        type: 'recommendation',
        title: `"${nodeText}" 추천 정보`,
        content: (
          <div>
            {items.map((item, idx) => (
              <div key={idx} className="mb-3 p-3 bg-blue-50 rounded-lg flex flex-col">
                <h4 className="font-medium text-blue-800 mb-1">{item.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 flex-1">{item.summary}</span>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-600 underline text-xs">바로가기</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      });
    } catch (e) {
      setSidebarContent({
        type: 'recommendation',
        title: `"${nodeText}" 추천 정보`,
        content: <div className="text-red-500">AI 추천 정보를 불러오지 못했습니다.</div>
      });
    }
  }, [setSidebarContent]);

  // 노드 클릭 시 상세 정보 + 확장/추천 토글
  const handleNodeClick = useCallback(async (node: any) => {
    setSelectedNode(node.id);
    setAiSummary({ loading: true, error: null, result: null });
    setAiKeywords({ loading: true, error: null, result: null });
    setAiNews({ loading: true, error: null, result: null });
    setSidebarContent({
      type: 'detail',
      title: `"${node.text}" AI 추천`,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">💡 아이디어 개요</h4>
            <div className="text-gray-700 text-sm">개요 불러오는 중...</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🔗 연관 키워드</h4>
            <div className="text-gray-700 text-sm">키워드 불러오는 중...</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">📰 관련 뉴스</h4>
            <div className="text-gray-700 text-sm">뉴스 불러오는 중...</div>
          </div>
        </div>
      )
    });
    // AI 개요
    try {
      const prompt = `"${node.text}"라는 주제의 핵심 개요를 2~3문장으로 요약해줘. 마크다운/HTML 없이 평문만.`;
      const result = await callOpenAIGenerate(prompt);
      setAiSummary({ loading: false, error: null, result });
    } catch (e) {
      setAiSummary({ loading: false, error: 'AI 호출 실패', result: null });
    }
    // AI 키워드
    try {
      const prompt = `"${node.text}"와(과) 연관된 핵심 키워드 5개를 JSON 배열(["키워드1",...])로 반환해줘. 마크다운/HTML 없이 JSON만.`;
      const result = await callOpenAIGenerate(prompt);
      let keywords = result;
      try { keywords = JSON.parse(result).join(', '); } catch {}
      setAiKeywords({ loading: false, error: null, result: keywords });
    } catch (e) {
      setAiKeywords({ loading: false, error: 'AI 호출 실패', result: null });
    }
    // AI 뉴스
    try {
      const prompt = `"${node.text}"와(과) 관련된 최신 뉴스 3개를 JSON 배열로 반환해줘. 각 뉴스는 {\"title\":\"제목\",\"summary\":\"요약\",\"link\":\"URL\"} 형태. 마크다운/HTML 없이 JSON만.`;
      const result = await callOpenAIGenerate(prompt);
      let newsList = result;
      try {
        const arr = JSON.parse(result);
        newsList = arr.map((n:any) => `• ${n.title}\n  ${n.summary}\n  ${n.link}`).join('\n\n');
      } catch {}
      setAiNews({ loading: false, error: null, result: newsList });
    } catch (e) {
      setAiNews({ loading: false, error: 'AI 호출 실패', result: null });
    }
    // 사이드바에 결과 표시
    setSidebarContent({
      type: 'detail',
      title: `"${node.text}" AI 추천`,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">💡 아이디어 개요</h4>
            {aiSummary?.loading && <div className="text-gray-400 text-sm">개요 불러오는 중...</div>}
            {aiSummary?.error && <div className="text-red-500 text-sm">{aiSummary.error}</div>}
            {aiSummary?.result && <div className="text-gray-700 text-sm whitespace-pre-line">{aiSummary.result}</div>}
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🔗 연관 키워드</h4>
            {aiKeywords?.loading && <div className="text-gray-400 text-sm">키워드 불러오는 중...</div>}
            {aiKeywords?.error && <div className="text-red-500 text-sm">{aiKeywords.error}</div>}
            {aiKeywords?.result && <div className="text-gray-700 text-sm whitespace-pre-line">{aiKeywords.result}</div>}
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">📰 관련 뉴스</h4>
            {aiNews?.loading && <div className="text-gray-400 text-sm">뉴스 불러오는 중...</div>}
            {aiNews?.error && <div className="text-red-500 text-sm">{aiNews.error}</div>}
            {aiNews?.result && <div className="text-gray-700 text-sm whitespace-pre-line">{aiNews.result}</div>}
          </div>
        </div>
      )
    });
    // 확장/추천 버튼 토글
    setToggledNode((prev: any) => (prev === node.id ? null : node.id));
  }, [aiSummary, aiKeywords, aiNews]);

  // 드래그 기능
  // 2. 확대/축소 버튼 핸들러
  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 5));
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.2));

  // 3. 드래그 시 pan/zoom 반영
  const handleMouseDown = (e: any, nodeId: any) => {
    const rect = (svgRef.current as any)?.getBoundingClientRect();
    const node = nodes.find((n: any) => n.id === nodeId);
    if (!node) return;
    setDragState({
      isDragging: true,
      nodeId,
      offset: {
        x: (e.clientX - rect.left - pan.x) / zoom - node.x,
        y: (e.clientY - rect.top - pan.y) / zoom - node.y
      }
    });
  };
  const handleMouseMove = (e: any) => {
    if (!dragState.isDragging) return;
    const rect = (svgRef.current as any)?.getBoundingClientRect();
    const newX = ((e.clientX - rect.left - pan.x) / zoom) - dragState.offset.x;
    const newY = ((e.clientY - rect.top - pan.y) / zoom) - dragState.offset.y;
    setNodes((prev: any) => prev.map((node: any) =>
      node.id === dragState.nodeId ? { ...node, x: newX, y: newY } : node
    ));
  };

  const handleMouseUp = () => {
    setDragState({ isDragging: false, nodeId: null, offset: { x: 0, y: 0 } });
  };

  // 로그인
  const handleLogin = (e: any) => {
    e.preventDefault();
    const foundUser = mockUsers.find((u: any) => u.email === loginData.email);
    if (foundUser) {
      setUser(foundUser);
      setCurrentView('editor');
    } else {
      alert("로그인 실패: 존재하지 않는 이메일입니다.");
    }
  };

  // 회원가입
  const handleSignup = (e: any) => {
    e.preventDefault();
    const newUser = { id: Date.now(), ...signupData };
    setUser(newUser as any);
    setCurrentView('editor');
  };

  // 맵 저장 및 공유
  const saveMap = async () => {
    let author = '익명';
    if (user && user.email) {
      author = user.email.split('@')[0];
    } else if (user && user.name) {
      author = user.name;
    }
    const mapData = {
      title: mapTitle,
      author,
      nodes,
      isPublic,
      likes: 0,
      comments: 0,
      createdAt: Date.now(),
    };
    try {
      const postRef = push(ref(db, 'communityPosts'));
      await set(postRef, mapData);
      alert(`마인드맵이 ${isPublic ? '공개로' : '비공개로'} 저장되었습니다!`);
    } catch (e) {
      alert('저장 실패: ' + e);
    }
  };

  // 노드 편집
  const startEditNode = (node: any) => {
    setEditingNode({ ...node });
  };

  const saveNodeEdit = () => {
    setNodes((prev: any) => prev.map((node: any) => 
      node.id === editingNode.id 
        ? { ...node, text: editingNode.text }
        : node
    ));
    setEditingNode(null);
  };

  // 노드 삭제
  const deleteNode = (nodeId: any) => {
    setNodes((prev: any) => {
      const filtered = prev.filter((node: any) => node.id !== nodeId);
      return filtered.map((node: any) => ({
        ...node,
        connections: node.connections.filter((id: any) => id !== nodeId)
      }));
    });
    setSelectedNode(null);
    setSidebarContent(null);
  };

  // 검색된 공개 맵
  const filteredPublicMaps = publicMaps.filter((map: any) => 
    map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    map.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // 메인/커뮤니티에서 공개 마인드맵만 실시간으로 불러오기
    const postsRef = ref(db, 'communityPosts');
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const postList = data ? Object.entries(data).map(([id, value]) => (typeof value === 'object' && value !== null ? { id, ...value } : null)).filter(Boolean) : [];
      
      setPublicMaps(postList.filter((m: any) => m.isPublic));
    });
    return () => unsubscribe();
  }, []);

  // 렌더링 함수들
  const renderNode = (node: any) => {
    const isDraggingThis = dragState.isDragging && dragState.nodeId === node.id;

    function getButtonGroupPosition(node: any) {
      const svgSize = getSvgSize();
      const groupWidth = 140;
      const groupHeight = 50;
      let x = node.x + 60;
      let y = node.y - 25;
      if (x + groupWidth > svgSize.width) x = node.x - groupWidth - 60;
      if (x < 0) x = 0;
      if (y < 0) y = node.y + 55;
      if (y + groupHeight > svgSize.height) y = svgSize.height - groupHeight;
      return { x, y };
    }

    return (
      <g key={node.id}>
        <circle
          cx={node.x}
          cy={node.y}
          r="60"
          fill={selectedNode === node.id ? "#3B82F6" : "#10B981"}
          stroke="#fff"
          strokeWidth="3"
          style={{ cursor: 'pointer' }}
          onMouseDown={(e: any) => handleMouseDown(e, node.id)}
          onClick={() => handleNodeClick(node)}
        />
        <foreignObject
          x={node.x - 50}
          y={node.y - 30}
          width={100}
          height={60}
          pointerEvents="none"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'white',
              pointerEvents: 'none',
              userSelect: 'none',
              padding: '4px'
            }}
          >
            {node.text}
          </div>
        </foreignObject>

        {!isDraggingThis && toggledNode === node.id && (() => {
          const { x: groupX, y: groupY } = getButtonGroupPosition(node);
          return (
            <g>
              <rect
                x={groupX}
                y={groupY}
                width="90"
                height="130"
                rx="20"
                fill="rgba(0,0,0,0.8)"
              />
              <g
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  expandNode(node.id, node.text);
                }}
              >
                <circle cx={groupX + 45} cy={groupY + 36} r="18" fill="#3B82F6" />
                <text x={groupX + 45} y={groupY + 36} textAnchor="middle" dy="0.35em" fill="white" fontSize="18">+</text>
                <text x={groupX + 45} y={groupY + 65} textAnchor="middle" fill="white" fontSize="10">확장</text>
              </g>
            </g>
          );
        })()}
      </g>
    );
  };

  const renderConnections = () => {
    return nodes.flatMap(node =>
      node.connections.map(connId => {
        const connectedNode = nodes.find(n => n.id === connId);
        if (!connectedNode) return null;
        
        return (
          <line
            key={`${node.id}-${connId}`}
            x1={node.x}
            y1={node.y}
            x2={connectedNode.x}
            y2={connectedNode.y}
            stroke="#6B7280"
            strokeWidth="2"
            opacity="0.6"
          />
        );
      }).filter(Boolean)
    );
  };

  // 커뮤니티(공개 마인드맵) 페이지 컴포넌트 분리
  // export function CommunityPage({ user, publicMaps, setNodes, setMapTitle, setCurrentView, searchQuery, setSearchQuery }: any) {
  //   const filteredPublicMaps = publicMaps.filter((map: any) => 
  //     map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     map.author.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   return (
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  //       <div className="text-center mb-12">
  //         <h2 className="text-4xl font-bold text-gray-900 mb-4">
  //           아이디어를 연결하고 공유하세요
  //         </h2>
  //         <p className="text-xl text-gray-600 mb-8">
  //           AI 기반 마인드맵으로 창의적 사고를 확장하고 다른 사람들과 아이디어를 나누어보세요
  //         </p>
  //         {!user && (
  //           <button
  //             onClick={() => setCurrentView && setCurrentView('signup')}
  //             className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
  //           >
  //             무료로 시작하기
  //           </button>
  //         )}
  //       </div>
  //       <div className="mb-8">
  //         <div className="flex items-center space-x-4 mb-6">
  //           <h3 className="text-2xl font-bold text-gray-900">공개 마인드맵</h3>
  //           <div className="flex-1 max-w-md">
  //             <div className="relative">
  //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
  //               <input
  //                 type="text"
  //                 placeholder="마인드맵 검색..."
  //                 value={searchQuery}
  //                 onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
  //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {filteredPublicMaps.map(map => (
  //             <div key={map.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
  //               <div className="flex items-center justify-between mb-4">
  //                 <h4 className="text-lg font-semibold text-gray-900">{map.title}</h4>
  //                 <Globe className="h-5 w-5 text-green-500" />
  //               </div>
  //               <div className="mb-4">
  //                 <svg width="100%" height="120" viewBox="0 0 300 120">
  //                   {map.nodes.map(node => (
  //                     <g key={node.id}>
  //                       <circle
  //                         cx={node.x * 0.75}
  //                         cy={node.y * 0.4}
  //                         r="15"
  //                         fill="#10B981"
  //                         stroke="#fff"
  //                         strokeWidth="2"
  //                       />
  //                       <text
  //                         x={node.x * 0.75}
  //                         y={node.y * 0.4}
  //                         textAnchor="middle"
  //                         dy="0.35em"
  //                         fill="white"
  //                         fontSize="8"
  //                         fontWeight="bold"
  //                       >
  //                         {node.text.substring(0, 4)}
  //                       </text>
  //                     </g>
  //                   ))}
  //                 </svg>
  //               </div>
  //               <div className="flex items-center justify-between text-sm text-gray-600">
  //                 <span>by {map.author}</span>
  //                 <div className="flex items-center space-x-4">
  //                   <div className="flex items-center space-x-1">
  //                     <Heart className="h-4 w-4" />
  //                     <span>{map.likes}</span>
  //                   </div>
  //                   <div className="flex items-center space-x-1">
  //                     <MessageCircle className="h-4 w-4" />
  //                     <span>{map.comments}</span>
  //                   </div>
  //                 </div>
  //               </div>
  //               <button
  //                 onClick={() => {
  //                   setNodes && setNodes(map.nodes);
  //                   setMapTitle && setMapTitle(map.title);
  //                   setCurrentView && setCurrentView('editor');
  //                 }}
  //                 className="w-full mt-4 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
  //               >
  //                 <Eye className="h-4 w-4 inline mr-2" />
  //                 자세히 보기
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (editorOnly) {
    return (
      <>
        <Header />
        <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
          {/* 캔버스, 사이드바 등 기존 에디터 UI만 남기고, 헤더 관련 JSX는 모두 삭제 */}
          <div className="flex-[1_1_0%] min-w-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
            {/* 6. 왼쪽 상단에 +, - 버튼 UI 추가 */}
            <div className="absolute top-6 left-4 z-10 flex flex-row space-x-2 items-center">
              <button onClick={handleZoomIn} className="w-10 h-10 rounded-full bg-white shadow border text-2xl font-bold flex items-center justify-center hover:bg-indigo-100">+</button>
              <button onClick={handleZoomOut} className="w-10 h-10 rounded-full bg-white shadow border text-2xl font-bold flex items-center justify-center hover:bg-indigo-100">-</button>
              {/* 공개/비공개 토글 및 저장 버튼 */}
              <div className="flex items-center ml-6 space-x-3 bg-white/80 px-4 py-2 rounded-lg shadow border">
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={e => setIsPublic(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">{isPublic ? '공개' : '비공개'}</span>
                </label>
                <button
                  onClick={saveMap}
                  className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow"
                >
                  <Save className="h-4 w-4 mr-1" /> 저장
                </button>
              </div>
            </div>
            <svg
              ref={svgRef}
              width="100%"
              height="100%"
              className="bg-white max-w-full max-h-full"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onDoubleClick={(e) => {
                const rect = (svgRef.current as any)?.getBoundingClientRect();
                const x = ((e.clientX - rect.left - pan.x) / zoom);
                const y = ((e.clientY - rect.top - pan.y) / zoom);
                addNode(null, "새 아이디어", x / rect.width, y / rect.height);
              }}
              style={{ cursor: dragState.isDragging ? 'grabbing' : 'default' }}
            >
              {/* ...그리드, 연결선, 노드... */}
              <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
                {renderConnections()}
                {nodes.map(renderNode)}
              </g>
            </svg>
            {editingNode && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">노드 제목 수정</h3>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={editingNode.text}
          onChange={e => setEditingNode({ ...editingNode, text: e.target.value })}
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setEditingNode(null)}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >취소</button>
          <button
            onClick={saveNodeEdit}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >저장</button>
        </div>
      </div>
    </div>
  )}
          {/* 모바일: 사이드바 플로팅 시트(오버레이) */}
          <div className={`fixed inset-x-0 bottom-0 z-50 bg-white border-t shadow-2xl rounded-t-2xl p-4 transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ minHeight: 320 }}
          >
            <button onClick={() => setSidebarOpen(false)} className="absolute top-2 right-4 p-2 rounded-full hover:bg-gray-100">
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            {/* 사이드바 내용(선택된 노드 등) */}
            {selectedNode && (
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">선택된 노드</h3>
                  <div className="flex space-x-1">
                      <button
                        onClick={() => startEditNode(nodes.find((n: any) => n.id === selectedNode))}
                      className="p-1 text-gray-500 hover:text-indigo-600 transition-colors"
                      title="편집"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteNode(selectedNode)}
                      className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                </div>
                <div className="text-sm text-gray-600">
                    <p className="font-medium">{nodes.find((n: any) => n.id === selectedNode)?.text}</p>
                    <p className="mt-1">연결된 노드: {nodes.find((n: any) => n.id === selectedNode)?.connections.length}개</p>
                  </div>
              </div>
            )}
            {/* 사이드바 컨텐츠 */}
            <div className="flex-1 p-4 overflow-y-auto">
              {sidebarContent ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{sidebarContent.title}</h3>
                  <div className="text-gray-700">{typeof sidebarContent.content === 'string' ? <p>{sidebarContent.content}</p> : sidebarContent.content}</div>
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-12">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-sm">노드를 클릭하거나 확장/추천 버튼을 사용하여</p>
                  <p className="text-sm">상세 정보를 확인하세요</p>
                </div>
              )}
            </div>
            {/* 하단 버튼(모바일) */}
            <div className="mt-4">
                <button onClick={() => { const centerX = 0.5; const centerY = 0.5; addNode(null, "새 아이디어", centerX, centerY); }} className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2"><Plus className="h-4 w-4" /><span>새 노드 추가</span></button>
                <button onClick={() => { const randomKeywords = ['혁신', '기술', '디자인', '사용자경험', '인공지능']; const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)]; const rx = 0.2 + Math.random() * 0.6; const ry = 0.2 + Math.random() * 0.6; addNode(null, keyword, rx, ry); }} className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"><Star className="h-4 w-4" /><span>랜덤 아이디어</span></button>
              </div>
          </div>
          {/* 모바일: 사이드바 열기 버튼(플로팅) - 오버레이가 열려있을 때는 숨김 */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              메뉴
            </button>
                  )}
                </div>
      {/* 데스크톱: 사이드바 */}
      <aside className="hidden md:flex w-[400px] bg-white border-l shadow-lg flex-col h-full overflow-y-auto relative">
        {/* 사이드바 내용(선택된 노드 등) - 데스크톱에서만 */}
        <div className="flex-col flex-1">
          {selectedNode && (
            <div className="p-4 border-b bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">선택된 노드</h3>
                <div className="flex space-x-1">
                  <button
                      onClick={() => startEditNode(nodes.find((n: any) => n.id === selectedNode))}
                    className="p-1 text-gray-500 hover:text-indigo-600 transition-colors"
                    title="편집"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteNode(selectedNode)}
                    className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
            </div>
          </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium">{nodes.find((n: any) => n.id === selectedNode)?.text}</p>
                <p className="mt-1">연결된 노드: {nodes.find((n: any) => n.id === selectedNode)?.connections.length}개</p>
              </div>
            </div>
          )}
          {/* 사이드바 컨텐츠 */}
          <div className="flex-1 p-4 overflow-y-auto">
            {sidebarContent ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {sidebarContent.title}
                </h3>
                <div className="text-gray-700">
                  {typeof sidebarContent.content === 'string' ? (
                    <p>{sidebarContent.content}</p>
                  ) : (
                    sidebarContent.content
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-12">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-sm">노드를 클릭하거나 확장/추천 버튼을 사용하여</p>
                <p className="text-sm">상세 정보를 확인하세요</p>
              </div>
            )}
          </div>
        </div>
        {/* 하단 버튼 고정 */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
          <button
            onClick={() => {
              const centerX = 0.5;
              const centerY = 0.5;
              addNode(null, "새 아이디어", centerX, centerY);
            }}
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2"
          >
            <Plus className="h-4 w-4" />
            <span>새 노드 추가</span>
          </button>
          <button
            onClick={() => {
              const randomKeywords = ['혁신', '기술', '디자인', '사용자경험', '인공지능'];
              const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
              const rx = 0.2 + Math.random() * 0.6;
              const ry = 0.2 + Math.random() * 0.6;
              addNode(null, keyword, rx, ry);
            }}
            className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Star className="h-4 w-4" />
            <span>랜덤 아이디어</span>
          </button>
        </div>
      </aside>
    </div>
  </>
  );
}

  if (communityOnly) {
    return (
      <>
        {/* CommunityPage 컴포넌트가 존재하지 않아 임시로 비워둡니다. */}
        <div className="p-8 text-center text-gray-500">커뮤니티 페이지 준비 중</div>
      </>
    );
  }

  // home(메인) 분기: 원래의 메인페이지(히어로, 무료로 시작하기, 공개 마인드맵 등) 복원
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* 메인 페이지 본문(히어로, 공개 마인드맵 등) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              아이디어를 연결하고 공유하세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              AI 기반 마인드맵으로 창의적 사고를 확장하고 다른 사람들과 아이디어를 나누어보세요
            </p>
            {!user && (
              <button
                onClick={() => navigate('/signup')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                무료로 시작하기
              </button>
            )}
          </div>
          {/* 공개 마인드맵 섹션 */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">공개 마인드맵</h3>
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="마인드맵 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicMaps.filter((map: any) =>
                map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                map.author.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((map: any, index: number) => {
                console.log(map);
                return (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{map.title}</h4>
                    <Globe className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="mb-4">
                    <svg width="100%" height="120" viewBox="0 0 300 120">
                      {map.nodes.map((node: any, index: number) => (
                        <g key={index}>
                          <circle
                            cx={node.x * 0.75}
                            cy={node.y * 0.4}
                            r="15"
                            fill="#10B981"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                          <text
                            x={node.x * 0.75}
                            y={node.y * 0.4}
                            textAnchor="middle"
                            dy="0.35em"
                            fill="white"
                            fontSize="8"
                            fontWeight="bold"
                          >
                            {node.text.substring(0, 4)}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>by {map.author}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{map.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{map.comments?.length || 0}</span>
                        <MessageCircle className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/map/${map.id}`)}
                    className="w-full mt-4 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    <Eye className="h-4 w-4 inline mr-2" />
                    자세히 보기
                  </button>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MindMapPlatform;