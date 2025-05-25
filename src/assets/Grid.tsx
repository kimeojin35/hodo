interface IconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Grid = ({ size = 24, className, onClick }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      />
    </svg>
  );
};
