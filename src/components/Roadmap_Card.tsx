import { Arrow } from "@/assets";

interface CardProps {
  title?: string;
  img?: string;
}

export const Roadmap_Card = ({ title = "", img }: CardProps) => {
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden bg-white border border-gray-100 rounded-lg">
        <div className="w-full h-20 bg-gray-50"></div>
        <div className="flex items-center justify-between w-full p-3 bg-white">
          <p className="text-medium16">2025 프론트엔드 로드맵</p>
          <Arrow size={20} className="text-gray-300" />
        </div>
      </div>
    </>
  );
};
