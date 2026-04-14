import React, { ReactNode, useEffect, useRef } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  radius?: number;
  borderWidth?: number;
  backdrop?: string;
  borderColor?: string;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  gray: { base: 210, spread: 0 },
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
};

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
  radius = 14,
  borderWidth = 2,
  backdrop = 'hsl(220 22% 11% / 0.72)',
  borderColor = 'hsl(220 14% 24% / 0.85)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    cardRef.current.style.setProperty('--x', '50%');
    cardRef.current.style.setProperty('--xp', '0.5');
    cardRef.current.style.setProperty('--y', '50%');
    cardRef.current.style.setProperty('--yp', '0.5');
    cardRef.current.style.setProperty('--glow-active', '0.35');
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const style = {
    '--base': base,
    '--spread': spread,
    '--radius': String(radius),
    '--border': String(borderWidth),
    '--backdrop': backdrop,
    '--backup-border': borderColor,
    '--size': '180',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      var(--x, 50%)
      var(--y, 50%),
      hsl(var(--hue, 210) 100% 70% / calc(var(--glow-active, 0.35) * 0.22)),
      transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative' as const,
    touchAction: 'auto' as const,
    width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  const syncPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
    cardRef.current.style.setProperty('--xp', (x / rect.width).toFixed(2));
    cardRef.current.style.setProperty('--yp', (y / rect.height).toFixed(2));
    cardRef.current.style.setProperty('--glow-active', '1');
  };

  const resetPointer = () => {
    if (!cardRef.current) return;

    cardRef.current.style.setProperty('--x', '50%');
    cardRef.current.style.setProperty('--y', '50%');
    cardRef.current.style.setProperty('--xp', '0.5');
    cardRef.current.style.setProperty('--yp', '0.5');
    cardRef.current.style.setProperty('--glow-active', '0.35');
  };

  return (
    <>
      <style>{`
        [data-glow]::before,
        [data-glow]::after {
          pointer-events: none;
          content: "";
          position: absolute;
          inset: calc(var(--border-size) * -1);
          border: var(--border-size) solid transparent;
          border-radius: calc(var(--radius) * 1px);
          background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
          background-repeat: no-repeat;
          background-position: 50% 50%;
          mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
          mask-clip: padding-box, border-box;
          mask-composite: intersect;
        }

        [data-glow]::before {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
            var(--x, 50%)
            var(--y, 50%),
            hsl(var(--hue, 210) 100% 58% / var(--glow-active, 0.35)),
            transparent 100%
          );
          filter: brightness(1.6);
          transition: opacity 180ms ease;
        }

        [data-glow]::after {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.45) calc(var(--spotlight-size) * 0.45) at
            var(--x, 50%)
            var(--y, 50%),
            hsl(0 0% 100% / calc(var(--glow-active, 0.35) * 0.85)),
            transparent 100%
          );
          transition: opacity 180ms ease;
        }

        [data-glow] [data-glow] {
          position: absolute;
          inset: 0;
          opacity: var(--outer, 1);
          border-radius: calc(var(--radius) * 1px);
          border-width: calc(var(--border-size) * 16);
          filter: blur(calc(var(--border-size) * 9));
          background: none;
          pointer-events: none;
          border: none;
        }

        [data-glow] > [data-glow]::before {
          inset: -10px;
          border-width: 10px;
        }
      `}</style>
      <div
        ref={cardRef}
        data-glow
        style={style as React.CSSProperties}
        onPointerMove={syncPointer}
        onPointerLeave={resetPointer}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          relative rounded-2xl p-6 backdrop-blur-[5px] shadow-[0_1rem_2rem_-1rem_black]
          ${className}
        `}
      >
        <div data-glow />
        {children}
      </div>
    </>
  );
};
