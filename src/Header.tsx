import React, { useState, FC } from 'react';
import { Sparkles, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const getDisplayName = (user?: { name?: string; email?: string } | null) => {
  if (!user) return '';
  if (user.email) return user.email.split('@')[0];
  if (user.name) return user.name;
  return '';
};

const Header: FC<{ editorOnly?: boolean }> = ({ editorOnly }) => {
  const navigate = useNavigate();
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const displayName = getDisplayName(user);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/');
  };

  return (
    <>
      {/* 모바일 헤더 */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm sticky top-0 z-40">
        <button onClick={() => navigate('/')} className="flex items-center space-x-2">
          <Sparkles className="h-7 w-7 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">MindGram</span>
        </button>
        <button onClick={() => setHeaderMenuOpen((v) => !v)} className="p-2 rounded-lg hover:bg-gray-100">
          {headerMenuOpen ? <span style={{fontSize:24}}>&#10005;</span> : <span style={{fontSize:24}}>&#9776;</span>}
        </button>
      </div>
      {/* 모바일 오버레이 메뉴 */}
      {headerMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/30" onClick={() => setHeaderMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col justify-center items-center p-8 space-y-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => {navigate('/community'); setHeaderMenuOpen(false);}} className="flex items-center w-full text-indigo-600 font-bold text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <span className="mr-3" role="img" aria-label="community">🌐</span>커뮤니티
            </button>
            <button onClick={() => {navigate('/editor'); setHeaderMenuOpen(false);}} className="flex items-center w-full text-gray-700 font-medium text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <span className="mr-3" role="img" aria-label="create">📝</span>만들기
            </button>
            {user ? (
              <span className="flex items-center w-full text-gray-700 text-xl py-3 px-4">
                <span className="mr-3" role="img" aria-label="user">👤</span>{displayName}님!
                <button onClick={handleLogout} className="ml-4 flex items-center text-red-500 hover:text-red-700 text-base"><LogOut className="h-5 w-5 mr-1" />로그아웃</button>
              </span>
            ) : (
              <>
                <button onClick={() => {navigate('/login'); setHeaderMenuOpen(false);}} className="flex items-center w-full text-gray-700 text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                  <span className="mr-3" role="img" aria-label="login">🔑</span>로그인
                </button>
                <button onClick={() => {navigate('/signup'); setHeaderMenuOpen(false);}} className="flex items-center w-full justify-center bg-indigo-600 text-white text-xl py-3 px-4 rounded-lg hover:bg-indigo-700 mt-2 transition-colors">
                  <span className="mr-3" role="img" aria-label="signup">✨</span>회원가입
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* 데스크탑 헤더 */}
      <nav className="hidden md:block bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <button onClick={() => navigate('/')} className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">MindGram</h1>
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={() => navigate('/community')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">커뮤니티</button>
              <button onClick={() => navigate('/editor')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">만들기</button>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span
                    className="text-gray-700 cursor-pointer hover:underline hover:text-indigo-600"
                    onClick={() => navigate('/dashboard')}
                  >
                    {displayName}님!
                  </span>
                  <button onClick={handleLogout} className="flex items-center text-red-500 hover:text-red-700 text-base ml-2"><LogOut className="h-5 w-5 mr-1" />로그아웃</button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <button onClick={() => navigate('/login')} className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"><LogIn className="h-4 w-4" /><span>로그인</span></button>
                  <button onClick={() => navigate('/signup')} className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"><UserPlus className="h-4 w-4" /><span>회원가입</span></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Header); 