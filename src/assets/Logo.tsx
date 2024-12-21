interface IconProps {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Logo = ({ size = 20, onClick, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 3.5}
      height={size}
      fill="none"
      viewBox="0 0 70 20"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path fill="#000" d="M4 3h6v14H4zm32 0h6v14h-6zM12 3h6v14h-6z" />
      <rect width="14" height="14" x="20" y="3" fill="#000" rx="7" />
      <rect width="14" height="14" x="52" y="3" fill="#000" rx="7" />
      <path fill="#000" d="M44 3a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6V3Z" />
    </svg>
  );
};
