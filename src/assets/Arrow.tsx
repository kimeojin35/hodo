interface IconProps {
  rotate?: "up" | "down" | "left" | "right";
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Arrow = ({
  rotate = "right",
  size = 24,
  className = "",
  onClick,
}: IconProps) => {
  const direction = {
    up: "-rotate-90",
    down: "rotate-90",
    left: "rotate-180",
    right: "rotate-0",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={`${direction[rotate]} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m0 0-6-6m6 6-6 6"
      />
    </svg>
  );
};
