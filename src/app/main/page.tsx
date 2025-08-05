"use client";
import React, { useState } from "react";
import { Card } from "@/components";
import { Logo, Search, Grid, List } from "@/assets";
import { roadmaps } from "@/constants/dummy";

const TAG_FILTERS = ["전체", "프론트엔드", "백엔드", "AI", "기초", "면접"];

function Main() {
  const [isCard, setIsCard] = useState<boolean>(true);
  const [selectedTag, setSelectedTag] = useState<string>("전체");

  const filteredRoadmaps =
    selectedTag === "전체"
      ? roadmaps
      : roadmaps.filter((r) => r.tags.includes(selectedTag));

  return (
    <main className="w-full p-6 flex flex-col gap-6 max-w-screen-xl justify-self-center">
      <header className="flex items-center justify-between w-full">
        <Logo size={28} />
        <button className="flex items-center justify-between w-full py-1 pl-2 pr-1 border border-gray-200 rounded-md max-w-48 bg-gray-50">
          <div className="flex items-center gap-2">
            <Search size={20} className="text-gray-500" />
            <p className="text-gray-400 text-medium14">검색어 입력</p>
          </div>
          <div className="px-2 py-1.5 text-gray-500 bg-gray-100 rounded-md text-medium12">
            Ctrl+K
          </div>
        </button>
      </header>
      {/* <div className="flex gap-4 py-4 justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-semibold24 text-gray-900">
            지식의 길을 함께 만들어봐요
          </h1>
          <p className="text-gray-500 text-medium16">
            나만의 학습 로드맵을 만들고 공유하거나, 다른 사람의 로드맵을
            참고해보세요.
          </p>
        </div>
        <Button>
          <Plus />
          로드맵 만들기
        </Button>
      </div> */}
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {TAG_FILTERS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-2.5 py-1.5 rounded-xl active:scale-95 border text-medium14 transition ${
                selectedTag === tag
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Grid
            onClick={() => setIsCard(true)}
            className={isCard ? "text-black" : "text-gray-300"}
          />
          <span className="w-0.5 h-4 bg-gray-100" />
          <List
            onClick={() => setIsCard(false)}
            className={!isCard ? "text-black" : "text-gray-300"}
          />
        </div>
      </div>

      <div
        className={`w-full grid gap-2 ${
          isCard && "md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2"
        }`}
      >
        {filteredRoadmaps.map((roadmap, index) => (
          <Card
            isCard={isCard}
            key={index}
            title={roadmap.title}
            image={roadmap.image}
            tags={roadmap.tags}
            participants={roadmap.participants}
            chapters={roadmap.chapters}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
