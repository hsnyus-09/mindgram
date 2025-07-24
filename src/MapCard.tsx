import React, { FC } from 'react';
import { Globe, Heart, MessageCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NodeType {
  id: string;
  text: string;
  x: number;
  y: number;
}

interface MapType {
  id: string | number;
  title: string;
  author: string;
  likes: number;
  comments: number;
  nodes: NodeType[];
}

interface MapCardProps {
  map: MapType;
  onView?: (map: MapType) => void;
}

const MapCard: FC<MapCardProps> = ({ map, onView }: MapCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{map.title}</h4>
        <Globe className="h-5 w-5 text-green-500" />
      </div>
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
          {map.nodes.map((node) => (
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
        onClick={() => onView ? onView(map) : navigate(`/map/${map.id}`)}
        className="w-full mt-4 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center"
      >
        <Eye className="h-4 w-4 inline mr-2" />
        자세히 보기
      </button>
    </div>
  );
};

export default React.memo(MapCard); 