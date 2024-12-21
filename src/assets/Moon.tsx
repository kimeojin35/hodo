interface IconProps {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Moon = ({ size = 24, onClick, className }: IconProps) => {
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
        d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9.004 9.004 0 0 1 12 21 9 9 0 0 1 9.386 3.386 8.999 8.999 0 0 0 9 6Z"
      />
    </svg>
  );
};
