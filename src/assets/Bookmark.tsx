interface IconProps {
  size?: number;
  className?: string;
  fill?: boolean;
}

export const Bookmark = ({ size = 24, className, fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill={fill ? "currentColor" : "rgba(0, 0, 0, 0.2)"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 7.2v9.485c0 1.361 0 2.042.204 2.458a2 2 0 0 0 2.06 1.102c.46-.06 1.026-.438 2.158-1.193l.003-.002c.449-.3.673-.449.908-.532a2 2 0 0 1 1.333 0c.235.083.46.233.911.534 1.133.755 1.7 1.132 2.16 1.193a2 2 0 0 0 2.059-1.102c.204-.416.204-1.097.204-2.458V7.197c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C16.48 4 15.92 4 14.8 4H9.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C6 5.52 6 6.08 6 7.2Z"
      />
    </svg>
  );
};
