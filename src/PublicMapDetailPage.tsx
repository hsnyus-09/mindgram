import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, User, ArrowLeft } from 'lucide-react';
import Header from './Header';
import { db, ref, onValue, update, push, set } from './firebase';

export default function PublicMapDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [map, setMap] = useState<any>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<any[]>([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    if (!id) return;
    const mapRef = ref(db, `communityPosts/${id}`);
    const unsubscribe = onValue(mapRef, (snapshot) => {
      const data = snapshot.val();
      setMap(data);
      setLikeCount(data?.likes || 0);
      setComments(data?.comments ? Object.values(data.comments) : []);
    });
    return () => unsubscribe();
  }, [id]);

  const handleLike = async () => {
    if (!id || !map) return;
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
    setLiked(!liked);
    setLikeCount(newLikeCount);
    await update(ref(db, `communityPosts/${id}`), { likes: newLikeCount });
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim() || !id) return;
    const comment = {
      user: '익명',
      text: commentInput,
      createdAt: new Date().toLocaleString(),
    };
    const commentsRef = ref(db, `communityPosts/${id}/comments`);
    const newCommentRef = push(commentsRef);
    await set(newCommentRef, comment);
    setCommentInput('');
  };

  if (!map) return <div>불러오는 중...</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row max-w-5xl mx-auto w-full p-6 gap-8">
          {/* 왼쪽: 마인드맵 SVG 렌더링 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center justify-center min-h-[400px]">
            <svg width="600" height="400" style={{ background: '#f9fafb', borderRadius: 16 }}>
              {/* map.nodes를 이용해 노드와 연결선 렌더링 (간단 버전) */}
              {map.nodes && map.nodes.map((node: any) => (
                <g key={node.id}>
                  <circle cx={node.x} cy={node.y} r="40" fill="#10B981" stroke="#fff" strokeWidth="3" />
                  <text x={node.x} y={node.y} textAnchor="middle" dy="0.35em" fill="white" fontSize="12" fontWeight="bold">
                    {node.text}
                  </text>
                </g>
              ))}
              {/* 연결선은 필요시 추가 구현 */}
            </svg>
          </div>
          {/* 오른쪽: 정보/댓글 */}
          <div className="w-full md:w-96 flex flex-col space-y-6">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="mb-2">
                <User className="w-14 h-14 text-gray-400 bg-gray-100 rounded-full p-2" />
              </div>
              <div className="text-lg font-bold text-gray-900">{map.author}</div>
              <div className="text-sm text-gray-500 mb-1">{map.createdAt ? new Date(map.createdAt).toLocaleString() : ''}</div>
              <div className="text-xl font-semibold text-indigo-700 mt-2 mb-1 text-center">{map.title}</div>
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
                {comments.map((c, idx) => (
                  <div key={idx} className="bg-gray-50 rounded p-2">
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
    </>
  );
} 