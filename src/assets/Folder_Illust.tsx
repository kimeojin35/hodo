interface IconProps {
  size?: number;
}

export const Folder_Illust = ({ size = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#A1A1AA"
        d="M20 6h-9L9 4H4c-1.1 0-2 .9-2 2v4h20V8c0-1.1-.9-2-2-2Z"
      />
      <path
        fill="#E4E4E7"
        d="M20 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Z"
      />
    </svg>
  );
};
