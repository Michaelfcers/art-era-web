import React from "react";

export function FlagGB({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={`inline-block rounded-xs shadow-xs overflow-hidden shrink-0 ${className}`}>
      <clipPath id="gb-crop"><rect width="60" height="40" rx="2"/></clipPath>
      <g clipPath="url(#gb-crop)">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0 0l60 40m0-40L0 40" stroke="#ffffff" strokeWidth="8"/>
        <path d="M0 0l60 40m0-40L0 40" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30 0v40M0 20h60" stroke="#ffffff" strokeWidth="12"/>
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7"/>
      </g>
    </svg>
  );
}

export function FlagES({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={`inline-block rounded-xs shadow-xs overflow-hidden shrink-0 ${className}`}>
      <rect width="60" height="40" fill="#c60b1e" rx="2"/>
      <rect y="10" width="60" height="20" fill="#ffc400"/>
    </svg>
  );
}

export function FlagPT({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={`inline-block rounded-xs shadow-xs overflow-hidden shrink-0 ${className}`}>
      <rect width="60" height="40" fill="#da291c" rx="2"/>
      <rect width="24" height="40" fill="#046a38"/>
      <circle cx="24" cy="20" r="7" fill="#ffc400"/>
      <circle cx="24" cy="20" r="5" fill="#da291c"/>
      <rect x="21.5" y="17" width="5" height="6" fill="#ffffff" rx="0.5"/>
    </svg>
  );
}
