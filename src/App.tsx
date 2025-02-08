import React, { useState, useCallback } from 'react';
import { PlayerCard } from './components/PlayerCard';
import { Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Player } from './types';

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // For triggering animation

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(header => header.trim());
      
      const parsedPlayers = lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.trim());
        return headers.reduce((obj, header, index) => {
          const value = values[index];
          if (['Match', 'Run', 'Wickets', 'Economy'].includes(header)) {
            obj[header] = parseFloat(value) || 0;
          } else {
            obj[header] = value;
          }
          return obj;
        }, {} as Record<string, any>) as Player;
      }).filter(player => player.Name);

      setPlayers(parsedPlayers);
    };
    reader.readAsText(file);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % players.length);
    setKey(prev => prev + 1); // Trigger animation
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + players.length) % players.length);
    setKey(prev => prev + 1); // Trigger animation
  };

  return (
    <div className="min-h-screen stadium-pattern">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)] py-8 px-4">
        {players.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <label className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
              <Upload className="w-16 h-16 text-yellow-300" />
              <span className="text-2xl font-['Teko'] text-white">Upload Player Data (CSV)</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <div key={key} className="flex justify-center items-center min-h-[80vh]">
                <PlayerCard player={players[currentIndex]} />
              </div>

              <button
                onClick={handleNext}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-['Teko'] text-white">
                Player {currentIndex + 1} of {players.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;