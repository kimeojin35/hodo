import { Unlock, Lock, Folder_Illust } from "@/assets";

interface FolderProps {
  title: string;
  roadmaps: string[];
  isPublic: boolean;
}

export const Loadmap_Folder = ({ title, roadmaps, isPublic }: FolderProps) => {
  return (
    <div className="w-full flex flex-col gap-3 p-6 border border-gray-200 bg-gray-50 rounded-xl relative">
      <div className="absolute top-4 right-4 text-gray-400">
        {isPublic ? <Unlock size={20} /> : <Lock size={20} />}
      </div>

      <Folder_Illust size={36} />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          <p className="text-medium16">{title}</p>
        </div>
        <p className="text-medium14 text-gray-400">
          {roadmaps.length}개의 로드맵
        </p>
      </div>
    </div>
  );
};
