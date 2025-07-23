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
  Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CommunityPage } from './CommunityPage';


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
  const editorOnly = props.editorOnly;
  const communityOnly = props.communityOnly;
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState<any>(null);
  const [nodes, setNodes] = useState([
    { id: "1", text: "아이디어", x: 400, y: 300, connections: [] }
  ]);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  // 기존 hoveredNode 상태를 toggledNode로 변경
  const [toggledNode, setToggledNode] = useState<any>(null);

  const handleExpandNode = async () => {
    if (!selectedNode) return
    const ideas = await fetchGPTIdeas(selectedNode.text)
    const newNodes = ideas.map((idea, index) => ({
      id: (nodes.length + index + 1).toString(),
      text: idea,
      x: selectedNode.x + (Math.random() * 100 - 50),
      y: selectedNode.y + (Math.random() * 100 - 50),
      connections: []
    }))
    setNodes(prev => [
      ...prev,
      ...newNodes.map(n => ({ ...n, connections: [] }))
    ])
  }

  const [mapTitle, setMapTitle] = useState("새로운 마인드맵");

const fetchGPTNews = async (topic: string): Promise<string> => {
  try {
    const res = await fetch('http://localhost:3001/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `"${topic}" 관련 최신 기술 동향 또는 뉴스를 한 문단으로 요약해줘. 한국어로`
      })
    });
    const data = await res.json();
    return data.result.trim();
  } catch (err) {
    console.error('AI 뉴스 호출 실패:', err);
    return `${topic} 관련 뉴스를 불러오는 데 실패했습니다.`;
  }
};


const fetchGPTIdeas = async (topic: string): Promise<string[]> => {
  try {
    const res = await fetch('http://localhost:3001/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: `${topic}에 대한 관련 키워드를 4개 한국어로 제시해줘. 쉼표로 구분해서.` })
    })
    const data = await res.json()
    console.log('topic',topic)
    console.log('AI 응답:', data)
    return data.result.split(',').map((s: string) => s.trim())
  } catch (err) {
    console.error('AI 호출 실패:', err)
    return ['관련 아이디어']
  }
}

  const [isPublic, setIsPublic] = useState(false);
  const [publicMaps, setPublicMaps] = useState(mockPublicMaps);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [sidebarContent, setSidebarContent] = useState<any>(null);
  const [editingNode, setEditingNode] = useState<any>(null);
  
  const svgRef = useRef(null);
  const [dragState, setDragState] = useState({ isDragging: false, nodeId: null, offset: { x: 0, y: 0 } });

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
    const suggestions = await fetchGPTIdeas(nodeText);
    const parentNode = nodes.find((n: any) => n.id === nodeId);
    if (!parentNode) return;
    const baseAngle = -90;
    const angleStep = 360 / suggestions.length;
    const distance = Math.min(svgSize.width, svgSize.height) * 0.22; // 화면 비율에 따라 거리 조정
    suggestions.forEach((suggestion: any, index: any) => {
      const angle = baseAngle + index * angleStep;
      const rad = angle * Math.PI / 180;
      const newX = (parentNode.x + Math.cos(rad) * distance) / svgSize.width;
      const newY = (parentNode.y + Math.sin(rad) * distance) / svgSize.height;
      setTimeout(() => addNode(nodeId, suggestion, newX, newY), index * 200);
    });
    setSidebarContent && setSidebarContent({
      type: 'expansion',
      title: `"${nodeText}" 확장 결과`,
      content: `AI가 제안한 ${suggestions.length}개의 관련 아이디어가 추가되었습니다.`
    } as any);
  }, [nodes, addNode]);

  // 노드 추천
  const recommendNode = useCallback((nodeId: any, nodeText: any) => {
    const recommendations = [
      `${nodeText}의 실제 적용 사례`,
      `${nodeText} 관련 최신 트렌드`,
      `${nodeText}의 장단점 분석`
    ];

    setSidebarContent({
      type: 'recommendation',
      title: `"${nodeText}" 추천 정보`,
      content: recommendations.map((rec, index) => (
        <div key={index} className="mb-3 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-1">{rec}</h4>
          <p className="text-sm text-gray-600">
            이 주제에 대한 상세한 분석과 예시를 제공합니다. 클릭하여 더 자세한 정보를 확인하세요.
          </p>
        </div>
      ))
    });
  }, []);

  // 노드 클릭 시 상세 정보 + 확장/추천 토글
  const handleNodeClick = useCallback((node: any) => {
  setSelectedNode(node.id);

  setSidebarContent({
    type: 'detail',
    title: `"${node.text}" 상세 정보`,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">💡 아이디어 개요</h4>
          <p className="text-gray-700">
            {node.text}에 대한 핵심 개념과 활용 방안을 정리한 내용입니다.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">🔗 연관 키워드</h4>
          <p className="text-sm text-gray-500">AI로 키워드를 불러오는 중...</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">📰 관련 뉴스</h4>
          <p className="text-sm text-gray-500">AI로 뉴스 요약을 불러오는 중...</p>
        </div>
      </div>
    )
  });

  fetchGPTIdeas(node.text).then((keywords) => {
    setSidebarContent((prev) => ({
      ...prev,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">💡 아이디어 개요</h4>
            <p className="text-gray-700">
              {node.text}에 대한 핵심 개념과 활용 방안을 정리한 내용입니다.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🔗 연관 키워드</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword: string) => (
                <span key={keyword} className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">📰 관련 뉴스</h4>
            <p className="text-sm text-gray-500">AI로 뉴스 요약을 불러오는 중...</p>
          </div>
        </div>
      )
    }));
  });

  fetchGPTNews(node.text).then((newsSummary) => {
    setSidebarContent((prev) => ({
      ...prev,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">💡 아이디어 개요</h4>
            <p className="text-gray-700">
              {node.text}에 대한 핵심 개념과 활용 방안을 정리한 내용입니다.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🔗 연관 키워드</h4>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(prev.content.props.children[1].props.children[1])
                ? prev.content.props.children[1].props.children[1]
                : <p className="text-sm text-gray-500">AI로 키워드를 불러오는 중...</p>}
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">📰 관련 뉴스</h4>
            <p className="text-sm text-gray-600">{newsSummary}</p>
          </div>
        </div>
      )
    }));
  });

  setToggledNode((prev: any) => (prev === node.id ? null : node.id));
}, []);


  // 드래그 기능
  const handleMouseDown = (e: any, nodeId: any) => {
    const rect = (svgRef.current as any)?.getBoundingClientRect();
    const node = nodes.find((n: any) => n.id === nodeId);
    if (!node) return;
    setDragState({
      isDragging: true,
      nodeId,
      offset: {
        x: e.clientX - rect.left - node.x,
        y: e.clientY - rect.top - node.y
      }
    });
  };

  const handleMouseMove = (e: any) => {
    if (!dragState.isDragging) return;
    
    const rect = (svgRef.current as any)?.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragState.offset.x;
    const newY = e.clientY - rect.top - dragState.offset.y;
    
    setNodes((prev: any) => prev.map((node: any) => 
      node.id === dragState.nodeId 
        ? { ...node, x: newX, y: newY }
        : node
    ));
  };

  const handleMouseUp = () => {
    setDragState({ isDragging: false, nodeId: null, offset: { x: 0, y: 0 } });
  };

  // 로그인
  const handleLogin = (e: any) => {
    e.preventDefault();
    // 실제로는 서버 API 호출
    const foundUser = mockUsers.find((u: any) => u.email === loginData.email);
    if (foundUser) {
      setUser(foundUser);
      setCurrentView('editor');
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
  const saveMap = () => {
    const mapData = {
      id: Date.now(),
      title: mapTitle,
      author: user?.name || "익명",
      nodes,
      isPublic,
      likes: 0,
      comments: 0
    };

    if (isPublic) {
      setPublicMaps(prev => [...prev, mapData]);
    }

    alert(`마인드맵이 ${isPublic ? '공개로' : '비공개로'} 저장되었습니다!`);
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
          xmlns="http://www.w3.org/1999/xhtml"
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
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
                onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Sparkles className="h-6 w-6" />
              <span className="font-semibold">Mindgram</span>
            </button>
              <button
                onClick={() => navigate('/community')}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors ml-2"
              >
                커뮤니티
              </button>
              <button
                onClick={() => navigate('/editor')}
                className="text-indigo-600 font-bold border-b-2 border-indigo-600"
              >
                만들기
              </button>
            <input
              type="text"
              value={mapTitle}
              onChange={(e) => setMapTitle(e.target.value)}
              className="text-lg font-semibold bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
              placeholder="마인드맵 제목을 입력하세요"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{isPublic ? <Globe className="h-4 w-4 text-green-500" /> : <Lock className="h-4 w-4 text-gray-500" />}</span>
                <span className="text-gray-700">{isPublic ? '공개' : '비공개'}</span>
              </label>
            </div>
            <button
              onClick={saveMap}
              className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>저장</span>
            </button>
            {user && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{user.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="flex-1 flex">
          {/* 마인드맵 캔버스, 사이드바 등 기존 에디터 UI 그대로 */}
        {/* 마인드맵 캔버스 */}
        <div className="flex-1 relative overflow-hidden">
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            className="bg-white"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onDoubleClick={(e) => {
                const rect = (svgRef.current as any)?.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              addNode(null, "새 아이디어", x, y);
            }}
          >
            {/* 그리드 패턴 */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* 연결선 */}
            {renderConnections()}
            {/* 노드들 */}
            {nodes.map(renderNode)}
          </svg>
          {/* 툴팁 */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border">
            <div className="text-sm text-gray-600 space-y-1">
              <p>• 빈 공간을 더블클릭하여 새 노드 추가</p>
              <p>• 노드를 드래그하여 이동</p>
              <p>• 노드에 마우스를 올려 확장/추천 버튼 사용</p>
              <p>• 노드를 클릭하여 상세 정보 확인</p>
            </div>
          </div>
          {/* 노드 편집 모달 */}
          {editingNode && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                <h3 className="text-lg font-semibold mb-4">노드 편집</h3>
                <input
                  type="text"
                  value={editingNode.text}
                  onChange={(e) => setEditingNode({...editingNode, text: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                  placeholder="노드 텍스트를 입력하세요"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={saveNodeEdit}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    저장
                  </button>
                  <button
                    onClick={() => setEditingNode(null)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* 사이드바 */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* 선택된 노드 정보 */}
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
          {/* 빠른 액션 */}
          <div className="p-4 border-t bg-gray-50">
            <div className="space-y-2">
              <button
                onClick={() => {
                  const svgSize = getSvgSize();
                  const centerX = 0.5;
                  const centerY = 0.5;
                  addNode(null, "새 아이디어", centerX, centerY);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>새 노드 추가</span>
              </button>
              <button
                onClick={() => {
                  const svgSize = getSvgSize();
                  const randomKeywords = ['혁신', '기술', '디자인', '사용자경험', '인공지능'];
                  const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
                  // 랜덤 위치 (퍼센트)
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
            <div className="mt-4 pt-4 border-t">
              <div className="text-xs text-gray-500 space-y-1">
                <p>총 노드: {nodes.length}개</p>
                  <p>연결선: {nodes.reduce((acc: any, node: any) => acc + node.connections.length, 0)}개</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (communityOnly) {
    return (
      <CommunityPage
        user={user}
        publicMaps={publicMaps}
        setNodes={setNodes}
        setMapTitle={setMapTitle}
        setCurrentView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  }

  // home(메인) 분기: 원래의 메인페이지(히어로, 무료로 시작하기, 공개 마인드맵 등) 복원
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <button onClick={() => navigate('/')} className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">Mindgram</h1>
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/community')}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                커뮤니티
              </button>
              <button
                onClick={() => navigate('/editor')}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                만들기
              </button>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">안녕하세요, {user.name}님!</span>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigate('/login')}
                    className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>로그인</span>
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>회원가입</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* 히어로 섹션 */}
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
            ).map((map: any) => (
              <div key={map.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{map.title}</h4>
                  <Globe className="h-5 w-5 text-green-500" />
                </div>
                <div className="mb-4">
                  <svg width="100%" height="120" viewBox="0 0 300 120">
                    {map.nodes.map((node: any) => (
                      <g key={node.id}>
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
                      <MessageCircle className="h-4 w-4" />
                      <span>{map.comments}</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMapPlatform;