interface IconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const List = ({ size = 24, className, onClick }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17h14M5 12h14M5 7h14"
      />
    </svg>
  );
};
