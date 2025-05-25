interface IconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Search = ({ size = 24, className = "", onClick }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16 16 3 3 1.5 1.5M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      />
    </svg>
  );
};
