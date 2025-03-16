import React, { useMemo } from 'react';

const FloatingParticle = () => {
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`
    }));
  }, []); // Runs only once on mount

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <div 
          key={i} 
          className="absolute bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full floating-animation"
          style={style} 
        />
      ))}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) }
            50% { transform: translateY(-20px) }
            100% { transform: translateY(0) }
          }

          .floating-animation {
            animation: float infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingParticle;
