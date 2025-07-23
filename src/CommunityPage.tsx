import React from 'react';
import { Search, Globe, Heart, MessageCircle, Eye, LogIn, UserPlus, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CommunityPage(props: React.ComponentProps<'div'> & Record<string, any>) {
  const navigate = useNavigate();
  const { user, publicMaps, setNodes, setMapTitle, setCurrentView, searchQuery, setSearchQuery } = props;

  const filteredPublicMaps = publicMaps.filter((map: any) =>
    map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    map.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 헤더 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <button onClick={() => navigate('/')} className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">MindFlow</h1>
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/community')}
                className="text-indigo-600 font-bold border-b-2 border-indigo-600"
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
      {/* 본문 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">공개 마인드맵 커뮤니티</h2>
            <p className="text-lg text-gray-600">다른 사람들과 아이디어를 공유하고, 새로운 마인드맵을 등록해보세요.</p>
          </div>
          <button
            onClick={() => navigate('/editor')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow"
          >
            + 등록하기
          </button>
        </div>
        <div className="mb-8 flex items-center space-x-4">
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
          {filteredPublicMaps.map((map: any) => (
            <div key={map.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{map.title}</h4>
                <Globe className="h-5 w-5 text-green-500" />
              </div>
              {/* 대표 이미지 (임시 썸네일) */}
              <div className="mb-4 flex justify-center">
                <img
                  src={`https://source.unsplash.com/featured/300x120?mindmap,idea,${encodeURIComponent(map.title)}`}
                  alt="마인드맵 썸네일"
                  className="rounded-lg object-cover w-full h-[120px] max-w-xs shadow"
                  style={{ background: '#f3f4f6' }}
                />
              </div>
              <div className="mb-4 flex-1 flex items-center justify-center">
                <svg width="100%" height="60" viewBox="0 0 300 60">
                  {map.nodes.map((node: any) => (
                    <g key={node.id}>
                      <circle
                        cx={node.x * 0.75}
                        cy={node.y * 0.2}
                        r="15"
                        fill="#10B981"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      <text
                        x={node.x * 0.75}
                        y={node.y * 0.2}
                        textAnchor="middle"
                        dy="0.35em"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        {node.text.substring(0, 6)}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
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
                onClick={() => navigate('/editor')}
                className="w-full mt-4 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center"
              >
                <Eye className="h-4 w-4 inline mr-2" />
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 