import { IndianRupee } from 'lucide-react';
import type { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="relative group w-[90vw] max-w-[1200px] h-[400px]">
      {/* Animated Border Gradient */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      
      {/* Card Container */}
      <div className="relative h-full flex rounded-2xl overflow-hidden" style={{
        backgroundImage: `
          linear-gradient(to right, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.85) 100%
          ),
          url('https://i.pinimg.com/736x/49/19/d3/4919d3d3ebc9f8735220b7381f02442f.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-yellow-500/5 to-blue-500/5" />
        
        {/* Left Side - Player Image */}
        <div className="relative w-[45%] overflow-hidden z-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-transparent blur-3xl animate-pulse delay-75" />
          </div>
          <img
            src={player['Image Link'] || 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'}
            alt={player.Name}
            className="h-full w-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
            style={{ 
              filter: 'drop-shadow(0 0 15px rgba(234, 179, 8, 0.4))'
            }}
          />
        </div>

        {/* Right Side - Player Info */}
        <div className="relative flex-1 p-12 flex flex-col justify-center">
          {/* Position Badge */}
          <div className="absolute top-8 right-8 bg-red-600/90 px-6 py-2 rounded-full transform -rotate-3 shadow-lg">
            <span className="text-2xl font-['Teko'] text-white tracking-wider">{player.Position || "IPL'25"}</span>
          </div>

          {/* Player Name */}
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6 font-['Teko'] tracking-wider">
            {player.Name}
          </h2>

          {/* Country */}
          <div className="mb-8">
            <span className="text-4xl font-['Teko'] text-white/90 tracking-wider">
              {player.Country || 'International'}
            </span>
          </div>

          {/* Base Price */}
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative size-auto flex items-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full py-4 px-8 border-2 border-yellow-300/50">
              <IndianRupee className="w-8 h-8 text-gray-800" />
              <span className="font-['Teko'] text-3xl font-bold text-gray-800">{player['Base price']}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
