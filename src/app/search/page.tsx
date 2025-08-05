"use client";
import { Close } from "@/assets";
import { Roadmap_Card } from "@/components";
import React, { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="w-full flex flex-col p-6 gap-6 items-center">
      <div className="w-full gap-2 flex flex-col max-w-3xl">
        <div className="border border-gray-100 bg-gray-50 flex py-1 px-1.5 rounded-md text-medium16 w-max text-gray-500">
          로드맵 검색
        </div>
        <div className="w-full border-b border-b-gray-100 relative">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full py-4 bg-transparent placeholder:text-gray-300 text-regular24"
            placeholder="검색어를 입력해주세요."
          />
          {inputValue.length !== 0 && (
            <div
              onClick={() => setInputValue("")}
              className="absolute right-0 bottom-[18px] p-0.5 cursor-pointer"
            >
              <Close size={20} className="text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
