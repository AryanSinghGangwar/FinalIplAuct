// import React from 'react';
// import { Trophy, Ticket as Cricket, Zap, DollarSign, Target, IndianRupee } from 'lucide-react';
// import type { Player } from '../types';

// interface PlayerCardProps {
//   player: Player;
// }

// export function PlayerCard({ player }: PlayerCardProps) {
//   return (
//     <div className="card-pop relative w-96 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 rounded-2xl p-6 shadow-2xl">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
//         <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
//         <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-lg" />
//       </div>
      
//       {/* Content wrapper */}
//       <div className="relative z-10">
//         {/* Player Image with glow effect for cutouts */}
//         <div className="relative mb-6 transform -translate-y-5">
//           <div className="absolute inset-0 -m-4 bg-gradient-to-b from-yellow-400/50 via-yellow-300/50 to-transparent rounded-full blur-2xl" />
//           <div className="relative h-100 flex items-center justify-center">
//             <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-yellow-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
//             <img
//               src={player['Image Link'] || 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png'}
//               alt={player.Name}
//               className="relative h-full object-contain transform hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
//               style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.3))' }}
//             />
//           </div>
//         </div>

//         {/* Player Name */}
//         <h2 className="text-4xl font-bold text-white mb-6 font-['Teko'] text-center tracking-wider">
//           {player.Name}
//         </h2>

//         {/* Stats Grid with glassmorphism */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
//             <Trophy className="w-6 h-6 text-yellow-300" />
//             <span className="text-lg font-['Teko'] text-white">{player.Matches} Matches</span>
//           </div>
          
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
//             <Cricket className="w-6 h-6 text-yellow-300" />
//             <span className="text-lg font-['Teko'] text-white">{player.Runs} Runs</span>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
//             <Zap className="w-6 h-6 text-yellow-300" />
//             <span className="text-lg font-['Teko'] text-white">SR: {player['Strike Rate']}</span>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
//             <Target className="w-6 h-6 text-yellow-300" />
//             <span className="text-lg font-['Teko'] text-white">Avg: {player.Average}</span>
//           </div>
//         </div>

//         {/* Base Price with shine effect */}
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
//           <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full py-3 px-6">
//             <IndianRupee className="w-6 h-6 text-gray-800" />
//             <span className="font-['Teko'] text-2xl font-bold text-gray-800">{player['Base price']}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Trophy, Ticket as Cricket, Zap, DollarSign, Target, IndianRupee, Kanban } from 'lucide-react';
import type { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="relative">
      {/* Background Text */}
      <div className="absolute -rotate-45 w-[200%] text-center select-none pointer-events-none" style={{ 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        fontSize: '180px',
        fontFamily: 'Teko',
        fontWeight: 'bold',
        color: 'rgba(220, 38, 38, 0.15)',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        letterSpacing: '0.2em',
        zIndex: 0
      }}>
        
      </div>

      {/* Card Container */}
      <div className="card-pop relative w-96 rounded-2xl p-6 shadow-2xl z-10 overflow-hidden" style={{
        backgroundImage: `
          linear-gradient(to bottom, 
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
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-yellow-500/5 to-blue-500/5" />
        
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-yellow-500/20 to-transparent" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
        </div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Player Image with enhanced glow effect */}
          <div className="relative mb-6 transform -translate-y-5">
            <div className="absolute inset-0 -m-4">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
            </div>
            <div className="relative h-100 flex items-center justify-center">
              <img
                src={player['Image Link'] || 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=400&fit=crop'}
                alt={player.Name}
                className="relative h-full object-contain transform hover:scale-110 transition-transform duration-500"
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(234, 179, 8, 0.4)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))'
                }}
              />
            </div>
          </div>

          {/* Player Name with enhanced styling */}
          <div className="relative">
            {/* Batter Text */}
            <div className="absolute -top-4 right-0 bg-red-600/90 px-3 py-0.5 rounded-full transform -rotate-3 shadow-lg">
              <span className="text-sm font-['Teko'] text-white tracking-wider">All-rounders</span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 blur-lg" />
            <h2 className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6 font-['Teko'] text-center tracking-wider">
              {player.Name}
            </h2>
          </div>

          {/* Stats Grid with enhanced glassmorphism */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
              <Trophy className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-['Teko'] text-white">{player.Match} Matches</span>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
              <Kanban className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-['Teko'] text-white">{player.Wickets} Wickets</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-['Teko'] text-white">Econ: {player['Economy']}</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
              <Target className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-['Teko'] text-white">Runs: {player.Run}</span>
            </div>
          </div>

          {/* Base Price with enhanced auction-style effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full py-3 px-6 border-2 border-yellow-300/50">
              <IndianRupee className="w-6 h-6 text-gray-800" />
              <span className="font-['Teko'] text-2xl font-bold text-gray-800">{player['Base price']}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}