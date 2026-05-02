import React from 'react';

interface ToothDecorationProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ToothDecoration({
  size = 60,
  color = '#1A3C5E',
  className = '',
  style,
}: ToothDecorationProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.25)}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`tooth-deco ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 10 C10 10 5 20 5 32 C5 44 10 54 15 62 C18 70 20 80 22 90 C23 95 25 98 28 98 C31 98 33 94 34 88 C35 82 36 74 40 74 C44 74 45 82 46 88 C47 94 49 98 52 98 C55 98 57 95 58 90 C60 80 62 70 65 62 C70 54 75 44 75 32 C75 20 70 10 60 10 C54 10 50 14 40 14 C30 14 26 10 20 10Z"
        fill={color}
      />
      <path
        d="M28 20 C26 26 26 36 28 44"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}