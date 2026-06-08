import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = '', size = 32 }: BrandLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 2px 4px rgba(79, 70, 229, 0.15))' }}
    >
      <defs>
        <linearGradient id="creatlify-monogram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo-600 */}
          <stop offset="40%" stopColor="#7c3aed" /> {/* Violet-600 */}
          <stop offset="100%" stopColor="#f43f5e" /> {/* Rose-500 */}
        </linearGradient>
      </defs>
      
      {/* Technical outer radial guidelines (very subtle, matching brand design theme) */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        stroke="url(#creatlify-monogram-gradient)" 
        strokeWidth="1.5" 
        strokeDasharray="4 6" 
        className="opacity-25" 
      />
      
      <circle 
        cx="50" 
        cy="50" 
        r="38" 
        stroke="url(#creatlify-monogram-gradient)" 
        strokeWidth="1" 
        strokeDasharray="2 2" 
        className="opacity-15" 
      />

      {/* Styled Monogram "C" loop with dynamic terminals */}
      <path 
        d="M 66 30 
           C 56 18, 40 18, 29 29 
           C 16 42, 16 60, 29 71 
           C 40 82, 56 82, 66 70
           M 66 59
           C 59 66, 49 66, 41 59
           C 33 51, 33 39, 41 31
           C 49 24, 59 24, 66 31"
        stroke="url(#creatlify-monogram-gradient)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inset designer coordinate sparkle dot (signifying precision alignment) */}
      <path 
        d="M 72 50 L 76 53 L 80 50 L 76 47 Z" 
        fill="#f43f5e" 
        className="animate-pulse"
      />
    </svg>
  );
}
