interface ProboxLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function ProboxLogo({ variant = "dark", size = "md" }: ProboxLogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 48 : 36;
  const textColor = variant === "light" ? "#ffffff" : "#0f172a";
  const subTextColor = variant === "light" ? "#94a3b8" : "#64748b";

  return (
    <div className="flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#1a56db" />
        {/* Probox puzzle-piece style P icon */}
        <path
          d="M14 12h12c4.418 0 8 3.582 8 8s-3.582 8-8 8H20v8h-6V12z"
          fill="white"
          opacity="0.15"
        />
        <rect x="11" y="11" width="9" height="9" rx="2" fill="white" />
        <rect x="22" y="11" width="9" height="9" rx="2" fill="white" opacity="0.6" />
        <rect x="11" y="22" width="9" height="9" rx="2" fill="white" opacity="0.6" />
        <rect x="22" y="22" width="9" height="9" rx="2" fill="white" opacity="0.3" />
        <rect x="33" y="28" width="4" height="9" rx="2" fill="white" opacity="0.5" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className="font-bold text-lg tracking-tight"
          style={{ color: textColor, lineHeight: "1.1" }}
        >
          Probox
        </span>
        <span
          className="text-[9px] font-medium tracking-wide uppercase"
          style={{ color: subTextColor }}
        >
          Where Experts Meet
        </span>
      </div>
    </div>
  );
}
