import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, User, ArrowLeft } from 'lucide-react';

// 목업 데이터 (실제 구현 시 props나 context로 대체)
const mockMap = {
  id: '1',
  title: 'AI 기반 UX 아이디어',
  author: {
    name: '김개발',
    profile: '', // 프로필 이미지 URL (없으면 기본 아이콘)
  },
  createdAt: '2024-05-01 14:30',
  likes: 15,
  nodes: [
    { id: '1', text: 'AI UX', x: 400, y: 300, connections: ['2', '3'] },
    { id: '2', text: '개인화', x: 300, y: 200, connections: [] },
    { id: '3', text: '자동화', x: 500, y: 200, connections: [] }
  ],
  comments: [
    { id: 1, user: '이디자인', text: '좋은 아이디어네요!', createdAt: '2024-05-01 15:00' },
    { id: 2, user: '홍길동', text: 'AI 활용이 인상적입니다.', createdAt: '2024-05-01 15:10' }
  ]
};

export default function PublicMapDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(mockMap.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(mockMap.comments);
  const [commentInput, setCommentInput] = useState('');

  // 마인드맵 SVG 렌더링 (간단 버전)
  const renderNodes = () => (
    <>
      {mockMap.nodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r="40" fill="#10B981" stroke="#fff" strokeWidth="3" />
          <text x={node.x} y={node.y} textAnchor="middle" dy="0.35em" fill="white" fontSize="12" fontWeight="bold">
            {node.text}
          </text>
        </g>
      ))}
      {mockMap.nodes.flatMap((node) =>
        node.connections.map((connId) => {
          const target = mockMap.nodes.find((n) => n.id === connId);
          if (!target) return null;
          return (
            <line
              key={`${node.id}-${connId}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="#6B7280"
              strokeWidth="2"
              opacity="0.6"
            />
          );
        })
      )}
    </>
  );

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), user: '익명', text: commentInput, createdAt: new Date().toLocaleString() }
    ]);
    setCommentInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <nav className="bg-white shadow-sm border-b px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-500 hover:text-indigo-600">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className="text-lg font-bold text-gray-900">공개 마인드맵 상세</span>
      </nav>
      <div className="flex-1 flex flex-col md:flex-row max-w-5xl mx-auto w-full p-6 gap-8">
        {/* 왼쪽: 마인드맵 SVG */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center justify-center min-h-[400px]">
          <svg width="600" height="400" style={{ background: '#f9fafb', borderRadius: 16 }}>
            {renderNodes()}
          </svg>
        </div>
        {/* 오른쪽: 정보/댓글 */}
        <div className="w-full md:w-96 flex flex-col space-y-6">
          {/* 작성자/제목/일시 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="mb-2">
              {mockMap.author.profile ? (
                <img src={mockMap.author.profile} alt="프로필" className="w-14 h-14 rounded-full object-cover" />
              ) : (
                <User className="w-14 h-14 text-gray-400 bg-gray-100 rounded-full p-2" />
              )}
            </div>
            <div className="text-lg font-bold text-gray-900">{mockMap.author.name}</div>
            <div className="text-sm text-gray-500 mb-1">{mockMap.createdAt}</div>
            <div className="text-xl font-semibold text-indigo-700 mt-2 mb-1 text-center">{mockMap.title}</div>
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg mt-2 ${liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'} hover:bg-red-200 transition`}
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-red-500' : ''}`} />
              <span>{likeCount}</span>
              <span>좋아요</span>
            </button>
          </div>
          {/* 댓글 */}
          <div className="bg-white rounded-lg shadow p-4 flex-1 flex flex-col">
            <div className="font-semibold text-gray-900 mb-2">댓글</div>
            <div className="flex-1 space-y-3 overflow-y-auto max-h-60 mb-2">
              {comments.length === 0 && <div className="text-gray-400 text-sm">아직 댓글이 없습니다.</div>}
              {comments.map((c) => (
                <div key={c.id} className="bg-gray-50 rounded p-2">
                  <div className="text-sm font-bold text-indigo-700">{c.user}</div>
                  <div className="text-sm text-gray-800 mb-1">{c.text}</div>
                  <div className="text-xs text-gray-400">{c.createdAt}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleComment} className="flex mt-2 gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={e => setCommentInput(e.target.value)}
                className="flex-1 border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500"
                placeholder="댓글을 입력하세요"
              />
              <button type="submit" className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 text-sm">등록</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 