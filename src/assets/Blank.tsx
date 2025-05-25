interface IconProps {
  size?: number;
}

export const Blank = ({ size = 24 }: IconProps) => {
  return <svg width={size} height={size}></svg>;
};
