import React, { useEffect, useState } from 'react';

const confettiColors = [
  '#000', '#fff', '#c0c0c0', '#a78bfa', '#c084fc', '#f472b6', '#ec4899', '#f9fafb'
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Confetti() {
  const [pieces, setPieces] = useState<Array<{left:number, top:number, color:string, size:number, duration:number, delay:number}>>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Generate confetti pieces (tiny glowing balls)
    const arr = Array.from({length: 48}, () => ({
      left: randomInt(10, 90),
      top: randomInt(10, 30),
      color: confettiColors[randomInt(0, confettiColors.length-1)],
      size: randomInt(6, 12),
      duration: randomInt(1200, 2200),
      delay: randomInt(0, 400)
    }));
    setPieces(arr);
    // Hide after 2.5 seconds
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color} 60%, #fff0 100%)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 8px #fff2`,
            opacity: 0.95,
            animation: `confetti-fall-${i} ${p.duration}ms ${p.delay}ms forwards`,
          }}
        />
      ))}
      <style>{`
        ${pieces.map((p, i) => `
          @keyframes confetti-fall-${i} {
            0% { opacity: 1; top: ${p.top}%; transform: scale(1.1); }
            30% { opacity: 1; top: ${p.top - 8}%; transform: scale(1.2); }
            60% { opacity: 0.8; top: ${p.top + 18}%; transform: scale(0.95); }
            100% { opacity: 0; top: ${p.top + 32}%; transform: scale(0.7); }
          }
        `).join('')}
      `}</style>
    </div>
  );
              <img src="/noxtitan-logo-new.png" alt="NoxTitan Logo" className="w-36 h-36 object-contain drop-shadow-2xl mb-2" style={{ filter: 'brightness(1.1) contrast(1.1)' }} />
}
