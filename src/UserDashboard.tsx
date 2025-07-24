import React, { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import { db, ref, onValue } from './firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const UserDashboard = () => {
  const { user } = useUser();
  const [myBoards, setMyBoards] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.email) return;
    const authorId = user.email.split('@')[0];
    const postsRef = ref(db, 'communityPosts');
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const postList = data ? Object.entries(data).map(([id, value]) => (typeof value === 'object' && value !== null ? { id, ...value } : null)).filter(Boolean) : [];
      setMyBoards(postList.filter((m: any) => !m.isPublic && m.author === authorId));
    });
    return () => unsubscribe();
  }, [user]);

  if (!user) return <div className="p-8 text-center">로그인 후 이용 가능합니다.</div>;

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">내 비공개 마인드맵</h2>
        {myBoards.length === 0 ? (
          <div className="text-gray-500 text-center py-12">비공개로 저장한 보드가 없습니다.</div>
        ) : (
          <div className="space-y-4">
            {myBoards.map((board) => (
              <div key={board.id} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{board.title}</div>
                  <div className="text-sm text-gray-500">저장일: {board.createdAt ? new Date(board.createdAt).toLocaleString() : ''}</div>
                  <div className="text-xs text-gray-400 mt-1">상태: {board.isPublic ? '공개' : '비공개'}</div>
                </div>
                <button
                  onClick={() => navigate(`/map/${board.id}`)}
                  className="mt-3 md:mt-0 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  상세보기
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDashboard; 