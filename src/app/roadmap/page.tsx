"use client";
import React, { useState } from "react";
import { Folder_Illust, Lock, Unlock } from "@/assets";
import { Loadmap_Folder } from "@/components";

type FoldersType = {
  id: number;
  title: string;
  isPublic: boolean;
  roadmaps: string[];
};

function Roadmap() {
  const [folders, setFolders] = useState<FoldersType[]>([
    {
      id: 1,
      title: "Frontend",
      isPublic: true,
      roadmaps: ["React Basics", "Advanced Next.js"],
    },
    {
      id: 2,
      title: "Backend",
      isPublic: false,
      roadmaps: ["Node.js Fundamentals"],
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📁 로드맵 폴더</h2>
      <div className="grid grid-cols-3 gap-2">
        {folders.map(({ id, title, isPublic, roadmaps }) => (
          <Loadmap_Folder
            key={id}
            title={title}
            isPublic={isPublic}
            roadmaps={roadmaps}
          />
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
