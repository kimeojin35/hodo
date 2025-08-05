"use client";
import React, { useState } from "react";
import { Roadmap_Card } from "./Roadmap_Card";

export const Search_Modal = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="max-w-[560px] h-[560px] w-full fixed left-1/2 top-1/2 gap-2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-gray-100 shadow-large flex flex-col p-2">
      <div className="w-full p-2">
        <div className="border border-gray-100 bg-gray-50 flex py-1 px-1.5 rounded-md text-medium14 w-max text-gray-500">
          로드맵 검색
        </div>
        <input
          className="w-full py-4 border-b border-b-gray-100 bg-transparent placeholder:text-gray-300 text-medium20"
          placeholder="검색어를 입력해주세요."
        />
      </div>
      <div className="flex flex-col w-full gap-2 px-2">
        <p className="text-gray-500 text-medium14">분야 로드맵 찾기</p>
        <Roadmap_Card />
      </div>
    </div>
  );
};
