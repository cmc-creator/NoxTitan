'use client';

import { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DecorationConfig {
  emoji: string | React.ReactNode;
  themeClass: string;
  storageKey: string;
  defaultX: number;
  defaultY: number;
}

function DraggableDecoration({ config }: { config: DecorationConfig }) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const decorationRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the specific theme is active
    const checkTheme = () => {
      setIsVisible(document.body.classList.contains(config.themeClass));
    };
    
    checkTheme();
    const interval = setInterval(checkTheme, 500);
    
    // Load saved position
    const savedPosition = localStorage.getItem(config.storageKey);
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    } else {
      // Use default position
      setPosition({ x: config.defaultX, y: config.defaultY });
    }
    
    return () => clearInterval(interval);
  }, [config]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!decorationRef.current) return;
    
    setIsDragging(true);
    const rect = decorationRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = {
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y
    };
    
    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem(config.storageKey, JSON.stringify(position));
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, position]);

  if (!isVisible) return null;

  return (
    <div
      ref={decorationRef}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontSize: '3.5rem',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 1000,
        userSelect: 'none',
        filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.8))',
        animation: isDragging ? 'none' : 'float 3s ease-in-out infinite',
        transition: isDragging ? 'none' : 'filter 0.2s',
      }}
      title="Drag me to move!"
    >
      {config.emoji}
    </div>
  );
}

export default function DraggableDecorations() {
  const decorations: DecorationConfig[] = [
    {
      emoji: '☃️',
      themeClass: 'theme-winter-sparkle',
      storageKey: 'snowmanPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 30 : 500,
      defaultY: 150,
    },
    {
      emoji: (
        <div style={{
          position: 'relative',
          width: '120px',
          height: '100px',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
        }}>
          {/* LEFT UPPER WING - Photorealistic Monarch */}
          <div className="monarch-wing-lu" style={{
            position: 'absolute',
            left: '-2px',
            top: '12px',
            width: '52px',
            height: '42px',
            background: `
              /* Wing veins - black lines */
              linear-gradient(140deg, transparent 48%, rgba(0,0,0,0.9) 48%, rgba(0,0,0,0.9) 50%, transparent 50%),
              linear-gradient(155deg, transparent 58%, rgba(0,0,0,0.8) 58%, rgba(0,0,0,0.8) 59%, transparent 59%),
              linear-gradient(125deg, transparent 38%, rgba(0,0,0,0.8) 38%, rgba(0,0,0,0.8) 39%, transparent 39%),
              /* Black spots along edge */
              radial-gradient(ellipse 4px 5px at 18% 20%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 28% 12%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 42% 8%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 5px 6px at 15% 38%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 25% 55%, rgba(0,0,0,0.9) 0%, transparent 100%),
              radial-gradient(ellipse 3px 4px at 38% 68%, rgba(0,0,0,0.9) 0%, transparent 100%),
              /* White spots on black border */
              radial-gradient(circle 2px at 12% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 20% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 32% 6%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange gradient with depth */
              radial-gradient(ellipse 120% 140% at 40% 30%, #ff8c00 0%, #ff6f00 25%, #ff5722 50%, #d84315 75%, #bf360c 100%)
            `,
            borderRadius: '65% 30% 55% 25%',
            border: '2.5px solid #000',
            boxShadow: `
              inset 5px 5px 15px rgba(255, 152, 0, 0.6),
              inset -3px -3px 12px rgba(191, 54, 12, 0.7),
              -5px 5px 20px rgba(255, 111, 0, 0.5)
            `,
            animation: 'monarch-flap-left 0.4s ease-in-out infinite',
            transformOrigin: 'right center',
            opacity: 0.95,
          }} />
          
          {/* RIGHT UPPER WING - Photorealistic Monarch */}
          <div className="monarch-wing-ru" style={{
            position: 'absolute',
            right: '-2px',
            top: '12px',
            width: '52px',
            height: '42px',
            background: `
              /* Wing veins - black lines */
              linear-gradient(40deg, transparent 48%, rgba(0,0,0,0.9) 48%, rgba(0,0,0,0.9) 50%, transparent 50%),
              linear-gradient(25deg, transparent 58%, rgba(0,0,0,0.8) 58%, rgba(0,0,0,0.8) 59%, transparent 59%),
              linear-gradient(55deg, transparent 38%, rgba(0,0,0,0.8) 38%, rgba(0,0,0,0.8) 39%, transparent 39%),
              /* Black spots along edge */
              radial-gradient(ellipse 4px 5px at 82% 20%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 72% 12%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 58% 8%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 5px 6px at 85% 38%, rgba(0,0,0,0.95) 0%, transparent 100%),
              radial-gradient(ellipse 4px 5px at 75% 55%, rgba(0,0,0,0.9) 0%, transparent 100%),
              radial-gradient(ellipse 3px 4px at 62% 68%, rgba(0,0,0,0.9) 0%, transparent 100%),
              /* White spots on black border */
              radial-gradient(circle 2px at 88% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 80% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 1.5px at 68% 6%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange gradient with depth */
              radial-gradient(ellipse 120% 140% at 60% 30%, #ff8c00 0%, #ff6f00 25%, #ff5722 50%, #d84315 75%, #bf360c 100%)
            `,
            borderRadius: '30% 65% 25% 55%',
            border: '2.5px solid #000',
            boxShadow: `
              inset -5px 5px 15px rgba(255, 152, 0, 0.6),
              inset 3px -3px 12px rgba(191, 54, 12, 0.7),
              5px 5px 20px rgba(255, 111, 0, 0.5)
            `,
            animation: 'monarch-flap-right 0.4s ease-in-out infinite',
            transformOrigin: 'left center',
            opacity: 0.95,
          }} />

          {/* LEFT LOWER WING - Photorealistic */}
          <div className="monarch-wing-ll" style={{
            position: 'absolute',
            left: '4px',
            top: '48px',
            width: '48px',
            height: '48px',
            background: `
              /* Wing veins */
              linear-gradient(145deg, transparent 45%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.85) 46%, transparent 46%),
              linear-gradient(160deg, transparent 55%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.8) 56%, transparent 56%),
              linear-gradient(130deg, transparent 35%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 36%, transparent 36%),
              /* Black patches characteristic of monarch lower wing */
              radial-gradient(ellipse 8px 10px at 25% 30%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 6px 8px at 40% 25%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 7px 9px at 32% 48%, rgba(0,0,0,0.8) 0%, transparent 100%),
              /* White spots - signature of monarch */
              radial-gradient(circle 3px at 18% 25%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 3px at 28% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 35% 18%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 22% 40%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 28% 52%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2px at 18% 58%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 12% 45%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 10% 30%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange base with realistic shading */
              radial-gradient(ellipse 130% 120% at 45% 40%, #ffa726 0%, #ff8a65 30%, #ff6f00 60%, #e65100 90%)
            `,
            borderRadius: '60% 28% 70% 35%',
            border: '2.5px solid #000',
            boxShadow: `
              inset 4px 6px 18px rgba(255, 167, 38, 0.5),
              inset -4px -4px 15px rgba(230, 81, 0, 0.6),
              -4px 6px 18px rgba(255, 143, 0, 0.5)
            `,
            animation: 'monarch-flap-left 0.4s ease-in-out infinite',
            transformOrigin: 'right top',
            opacity: 0.95,
          }} />

          {/* RIGHT LOWER WING - Photorealistic */}
          <div className="monarch-wing-rl" style={{
            position: 'absolute',
            right: '4px',
            top: '48px',
            width: '48px',
            height: '48px',
            background: `
              /* Wing veins */
              linear-gradient(35deg, transparent 45%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.85) 46%, transparent 46%),
              linear-gradient(20deg, transparent 55%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.8) 56%, transparent 56%),
              linear-gradient(50deg, transparent 35%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 36%, transparent 36%),
              /* Black patches */
              radial-gradient(ellipse 8px 10px at 75% 30%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 6px 8px at 60% 25%, rgba(0,0,0,0.85) 0%, transparent 100%),
              radial-gradient(ellipse 7px 9px at 68% 48%, rgba(0,0,0,0.8) 0%, transparent 100%),
              /* White spots */
              radial-gradient(circle 3px at 82% 25%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 3px at 72% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 65% 18%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 78% 40%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2.5px at 72% 52%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%),
              radial-gradient(circle 2px at 82% 58%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 88% 45%, rgba(255,255,255,0.9) 0%, transparent 100%),
              radial-gradient(circle 2px at 90% 30%, rgba(255,255,255,0.9) 0%, transparent 100%),
              /* Orange base */
              radial-gradient(ellipse 130% 120% at 55% 40%, #ffa726 0%, #ff8a65 30%, #ff6f00 60%, #e65100 90%)
            `,
            borderRadius: '28% 60% 35% 70%',
            border: '2.5px solid #000',
            boxShadow: `
              inset -4px 6px 18px rgba(255, 167, 38, 0.5),
              inset 4px -4px 15px rgba(230, 81, 0, 0.6),
              4px 6px 18px rgba(255, 143, 0, 0.5)
            `,
            animation: 'monarch-flap-right 0.4s ease-in-out infinite',
            transformOrigin: 'left top',
            opacity: 0.95,
          }} />

          {/* BODY - Realistic segmented body */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '24px',
            transform: 'translateX(-50%)',
            width: '7px',
            height: '58px',
            background: `
              /* Body segments with realistic shading */
              repeating-linear-gradient(to bottom,
                #0d0d0d 0px, #0d0d0d 4px,
                #2a2a2a 4px, #2a2a2a 5px,
                #0d0d0d 5px, #0d0d0d 9px,
                #2a2a2a 9px, #2a2a2a 10px,
                #0d0d0d 10px, #0d0d0d 14px,
                #2a2a2a 14px, #2a2a2a 15px
              )
            `,
            borderRadius: '3.5px',
            boxShadow: `
              0 3px 12px rgba(0, 0, 0, 0.9),
              inset 1px 1px 3px rgba(255, 255, 255, 0.15),
              inset -1px -1px 3px rgba(0, 0, 0, 0.8)
            `,
            zIndex: 5,
          }} />

          {/* HEAD */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '20px',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            background: 'radial-gradient(circle at 40% 40%, #2a2a2a 0%, #0d0d0d 60%)',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.8), inset 1px 1px 2px rgba(255,255,255,0.2)',
            zIndex: 6,
          }} />

          {/* ANTENNAE - more realistic */}
          <div style={{
            position: 'absolute',
            left: '54px',
            top: '18px',
            width: '1.5px',
            height: '14px',
            background: 'linear-gradient(to top, #0d0d0d 0%, #1a1a1a 70%, #2a2a2a 100%)',
            borderRadius: '1px',
            transform: 'rotate(-38deg)',
            transformOrigin: 'bottom center',
            boxShadow: '1px 0 2px rgba(0,0,0,0.5)',
          }} />
          <div style={{
            position: 'absolute',
            left: '50px',
            top: '17px',
            width: '2px',
            height: '2px',
            background: '#1a1a1a',
            borderRadius: '50%',
            transform: 'translate(-6px, 0)',
          }} />
          <div style={{
            position: 'absolute',
            left: '63px',
            top: '18px',
            width: '1.5px',
            height: '14px',
            background: 'linear-gradient(to top, #0d0d0d 0%, #1a1a1a 70%, #2a2a2a 100%)',
            borderRadius: '1px',
            transform: 'rotate(38deg)',
            transformOrigin: 'bottom center',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.5)',
          }} />
          <div style={{
            position: 'absolute',
            left: '63px',
            top: '17px',
            width: '2px',
            height: '2px',
            background: '#1a1a1a',
            borderRadius: '50%',
            transform: 'translate(6px, 0)',
          }} />

          <style jsx>{`
            @keyframes monarch-flap-left {
              0%, 100% {
                transform: perspective(400px) rotateY(0deg) rotateZ(0deg);
              }
              50% {
                transform: perspective(400px) rotateY(-35deg) rotateZ(-8deg);
              }
            }
            @keyframes monarch-flap-right {
              0%, 100% {
                transform: perspective(400px) rotateY(0deg) rotateZ(0deg);
              }
              50% {
                transform: perspective(400px) rotateY(35deg) rotateZ(8deg);
              }
            }
          `}</style>
        </div>
      ),
      themeClass: 'theme-spring-flowers',
      storageKey: 'butterflyPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 60 : 500,
      defaultY: 150,
    },
    {
      emoji: '🍂',
      themeClass: 'theme-autumn-leaves',
      storageKey: 'leafPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 30 : 500,
      defaultY: 150,
    },
    {
      emoji: (
        <div style={{
          position: 'relative',
          width: '130px',
          height: '70px',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
        }}>
          {/* Tail fin - shark tail */}
          <div style={{
            position: 'absolute',
            left: '-8px',
            top: '18px',
            width: '30px',
            height: '35px',
            background: `
              linear-gradient(120deg,
                transparent 0%, transparent 40%,
                rgba(96, 125, 139, 0.95) 40%, rgba(96, 125, 139, 0.95) 43%,
                transparent 43%
              ),
              radial-gradient(ellipse 100% 140% at 70% 30%,
                rgba(120, 144, 156, 0.98) 0%,
                rgba(96, 125, 139, 0.95) 50%,
                rgba(69, 90, 100, 0.9) 100%
              )
            `,
            clipPath: 'polygon(100% 40%, 30% 0%, 0% 50%, 40% 100%, 100% 65%)',
            boxShadow: 'inset -2px 0 10px rgba(55, 71, 79, 0.7)',
          }} />

          {/* Main body - sleek shark body */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '15px',
            width: '85px',
            height: '42px',
            background: `
              /* Belly lighter coloring */
              linear-gradient(to bottom,
                transparent 0%,
                transparent 60%,
                rgba(176, 190, 197, 0.3) 60%,
                rgba(176, 190, 197, 0.5) 100%
              ),
              /* Main body gradient */
              radial-gradient(ellipse 130% 110% at 35% 40%,
                #78909c 0%,
                #607d8b 25%,
                #546e7a 50%,
                #455a64 75%,
                #37474f 100%
              )
            `,
            borderRadius: '50% 48% 48% 50% / 45% 45% 55% 55%',
            boxShadow: `
              inset 4px 4px 15px rgba(120, 144, 156, 0.4),
              inset -4px -4px 20px rgba(38, 50, 56, 0.8),
              0 8px 25px rgba(69, 90, 100, 0.4)
            `,
            border: '1px solid rgba(55, 71, 79, 0.6)',
          }}>
            {/* Dorsal fin (top) - iconic shark fin */}
            <div style={{
              position: 'absolute',
              left: '28px',
              top: '-22px',
              width: '0',
              height: '0',
              borderLeft: '14px solid transparent',
              borderRight: '16px solid transparent',
              borderBottom: '28px solid rgba(96, 125, 139, 0.95)',
              filter: 'drop-shadow(0 -2px 6px rgba(69, 90, 100, 0.6))',
              boxShadow: 'inset 0 -4px 10px rgba(55, 71, 79, 0.7)',
            }}>
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '8px',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: '15px solid rgba(120, 144, 156, 0.5)',
              }} />
            </div>

            {/* Pectoral fin (side) */}
            <div style={{
              position: 'absolute',
              left: '18px',
              top: '28px',
              width: '0',
              height: '0',
              borderTop: '10px solid transparent',
              borderBottom: '14px solid transparent',
              borderLeft: '22px solid rgba(96, 125, 139, 0.85)',
              filter: 'drop-shadow(0 3px 6px rgba(69, 90, 100, 0.5))',
              opacity: 0.9,
            }} />

            {/* Eye - cold shark eye */}
            <div style={{
              position: 'absolute',
              right: '14px',
              top: '12px',
              width: '11px',
              height: '11px',
              background: `
                radial-gradient(circle at 35% 32%,
                  rgba(255, 255, 255, 0.3) 0%,
                  rgba(189, 189, 189, 0.6) 18%,
                  rgba(117, 117, 117, 0.85) 35%,
                  rgba(66, 66, 66, 0.95) 50%,
                  rgba(33, 33, 33, 1) 65%,
                  rgba(13, 13, 13, 1) 100%
                )
              `,
              borderRadius: '50%',
              border: '1.5px solid rgba(38, 50, 56, 0.8)',
              boxShadow: `
                0 2px 8px rgba(0, 0, 0, 0.6),
                inset 1px 1px 3px rgba(189, 189, 189, 0.4),
                inset -1px -1px 2px rgba(0, 0, 0, 0.5)
              `,
            }}>
              {/* Menacing pupil highlight */}
              <div style={{
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '3px',
                height: '3px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 100%)',
                borderRadius: '50%',
              }} />
            </div>

            {/* Gill slits */}
            <div style={{
              position: 'absolute',
              left: '22px',
              top: '16px',
              width: '1.5px',
              height: '8px',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(38, 50, 56, 0.9) 20%, rgba(38, 50, 56, 0.9) 80%, transparent 100%)',
              borderRadius: '1px',
              boxShadow: '3px 0 0 rgba(38, 50, 56, 0.8), 6px 0 0 rgba(38, 50, 56, 0.7), 9px 0 0 rgba(38, 50, 56, 0.6)',
            }} />

            {/* Mouth with teeth */}
            <div style={{
              position: 'absolute',
              right: '6px',
              top: '22px',
              width: '14px',
              height: '8px',
              background: 'linear-gradient(to bottom, rgba(38, 50, 56, 0.9) 0%, rgba(13, 13, 13, 0.8) 100%)',
              borderRadius: '0 0 60% 20%',
              overflow: 'hidden',
              border: '1px solid rgba(38, 50, 56, 0.8)',
            }}>
              {/* Teeth */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '1px',
                width: '100%',
                height: '3px',
                background: `
                  repeating-linear-gradient(90deg,
                    transparent 0px,
                    transparent 1px,
                    rgba(255, 255, 255, 0.9) 1px,
                    rgba(255, 255, 255, 0.9) 2px,
                    transparent 2px,
                    transparent 3px
                  )
                `,
                clipPath: 'polygon(0% 100%, 10% 0%, 20% 100%, 30% 0%, 40% 100%, 50% 0%, 60% 100%, 70% 0%, 80% 100%, 90% 0%, 100% 100%)',
              }} />
            </div>

            {/* Snout tip */}
            <div style={{
              position: 'absolute',
              right: '2px',
              top: '16px',
              width: '8px',
              height: '8px',
              background: 'radial-gradient(ellipse at 40% 40%, rgba(120, 144, 156, 0.6) 0%, transparent 100%)',
              borderRadius: '50%',
            }} />
          </div>

          {/* Secondary tail detail */}
          <div style={{
            position: 'absolute',
            left: '15px',
            top: '32px',
            width: '12px',
            height: '12px',
            background: 'linear-gradient(135deg, rgba(96, 125, 139, 0.9) 0%, transparent 100%)',
            clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
          }} />

          <style jsx>{`
            @keyframes shark-swim {
              0%, 100% {
                transform: translateX(0) rotateZ(0deg);
              }
              50% {
                transform: translateX(5px) rotateZ(-1deg);
              }
            }
          `}</style>
        </div>
      ),
      themeClass: 'theme-ocean-waves',
      storageKey: 'fishPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 65 : 500,
      defaultY: 150,
    },
    {
      emoji: (
        <div className="lightning-bolt">
          <div className="bolt-main"></div>
          <div className="bolt-glow"></div>
        </div>
      ),
      themeClass: 'theme-thunderstorm',
      storageKey: 'lightningPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 25 : 500,
      defaultY: 150,
    },
    {
      emoji: (
        <div className="saturn">
          <div className="saturn-planet"></div>
          <div className="saturn-rings"></div>
        </div>
      ),
      themeClass: 'theme-galaxy',
      storageKey: 'saturnPosition',
      defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 60 : 500,
      defaultY: 150,
    },
  ];

  return (
    <>
      {decorations.map((config, index) => (
        <DraggableDecoration key={index} config={config} />
      ))}
    </>
  );
}
