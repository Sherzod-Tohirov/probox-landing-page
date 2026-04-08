interface ProboxLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function ProboxLogo({
  variant = "dark",
  size = "md",
}: ProboxLogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 48 : 36;
  const textColor = variant === "light" ? "#ffffff" : "#0f172a";
  const subTextColor = variant === "light" ? "#94a3b8" : "#64748b";
  const fontSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  return (
    <div className="flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="10" fill="#1a8fc4" />
        <rect x="10" y="10" width="11" height="11" rx="2.5" fill="white" />
        <rect
          x="23"
          y="10"
          width="11"
          height="11"
          rx="2.5"
          fill="white"
          opacity="0.6"
        />
        <rect
          x="10"
          y="23"
          width="11"
          height="11"
          rx="2.5"
          fill="white"
          opacity="0.6"
        />
        <rect
          x="23"
          y="23"
          width="11"
          height="11"
          rx="2.5"
          fill="white"
          opacity="0.3"
        />
        <rect
          x="36"
          y="27"
          width="5"
          height="11"
          rx="2.5"
          fill="white"
          opacity="0.45"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold ${fontSize} tracking-tight`}
          style={{ color: textColor }}
        >
          Probox
        </span>
        <span
          className="text-[8px] font-medium tracking-widest uppercase mt-0.5"
          style={{ color: subTextColor }}
        >
          Where Experts Meet
        </span>
      </div>
    </div>
  );
}
