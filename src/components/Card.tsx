"use client";
import { Arrow, Bookmark } from "@/assets";
import React, { useState } from "react";

interface CardProps {
  title: string;
  image?: string;
  tags: string[];
  participants: number;
  chapters: number;
  isCard?: boolean;
}

export function Card({
  title,
  image,
  tags,
  participants,
  chapters,
  isCard,
}: CardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <div
      className={`w-full p-1 rounded-xl bg-white border border-gray-200 hover:shadow-large transition-all hover:-translate-y-1 ${
        isCard ? "flex flex-col" : "flex flex-row gap-4 items-start"
      }`}
    >
      <div
        className={`relative ${
          isCard ? "w-full aspect-video max-h-52" : "w-48 h-32"
        } bg-gray-100 rounded-lg overflow-hidden`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isCard && (
          <button
            onClick={toggleBookmark}
            className="absolute active:scale-105 top-2 right-2 z-10 bg-opacity-60 transition-all rounded-full p-2"
          >
            <Bookmark
              size={28}
              fill={bookmarked}
              className={`${
                bookmarked ? "text-white" : "text-gray-400"
              } drop-shadow-lg`}
            />
          </button>
        )}
        {isCard && (
          <div className="absolute w-full inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4">
            <p className="text-white text-medium20">{title}</p>
          </div>
        )}
      </div>
      <div
        className={`${
          isCard ? "py-4 px-3" : "flex-1 flex flex-col justify-between py-2"
        } gap-2 flex flex-col`}
      >
        {!isCard && (
          <p className="text-xl font-semibold text-gray-800">{title}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-medium14 cursor-pointerw hover:bg-gray-200 px-2.5 py-1.5 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-medium14 text-gray-400">
          {chapters}개 코스 · {participants}명 참여중
        </div>
      </div>
      {isCard ? (
        <div className={`${isCard ? "" : "mt-auto"} w-full`}>
          <button className="w-full transition-all bg-gray-100 rounded-lg px-4 py-3 flex justify-center items-center gap-1 hover:bg-gray-200">
            <p className="text-medium14">로드맵 보기</p>
            <Arrow size={18} />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleBookmark}
          className="active:scale-105 bg-opacity-60 transition-all rounded-full p-2"
        >
          <Bookmark
            size={28}
            fill={bookmarked}
            className={`${
              bookmarked ? "text-gray-800" : "text-gray-300"
            } drop-shadow-lg`}
          />
        </button>
      )}
    </div>
  );
}
