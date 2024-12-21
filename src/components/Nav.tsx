"use client";
import { Bell, Folder, House, Moon, Note_Search, Sun, User } from "@/assets";
import { useDarkMode } from "@/hook";
import React, { useEffect, useRef, useState } from "react";

export const Nav = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // 클릭된 원의 index 상태
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // 마우스 위치
  const divRefs = useRef<HTMLDivElement[]>([]);
  const requestRef = useRef<number | null>(null);
  const [dark, toggleDarkMode] = useDarkMode();

  const tabs = [
    { name: "Main", icon: <House />, route: "/" },
    { name: "Search", icon: <Note_Search />, route: "/" },
    { name: "Roadmap", icon: <Folder />, route: "/" },
    { name: "Notice", icon: <Bell />, route: "/" },
    { name: "Mypage", icon: <User />, route: "/" },
    { name: "Stroke", icon: <></>, route: "" },
    { name: "Theme", icon: dark ? <Moon /> : <Sun />, route: "" }, // route는 비워둠
  ];

  // 마우스 움직임 핸들러
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // 마우스가 div 위에 있지 않을 때 이벤트 처리
  const handleMouseLeave = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }
    divRefs.current.forEach((div) => {
      if (div) {
        div.style.width = "40px";
        div.style.height = "40px";
      }
    });
  };

  useEffect(() => {
    // requestAnimationFrame을 사용하여 스타일을 한 번에 업데이트
    const updateStyles = () => {
      divRefs.current.forEach((div) => {
        if (div) {
          const rect = div.getBoundingClientRect();
          const divCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };
          const distance = Math.abs(mousePosition.x - divCenter.x);

          // 거리 기반 크기 계산 (최소 48px, 최대 72px)
          const size = Math.max(40, 40 + (56 - 40) * ((200 - distance) / 100));
          div.style.width = `${size}px`;
          div.style.height = `${size}px`;
        }
      });
      requestRef.current = null;
    };

    // 마우스 움직임에 따라 스타일 업데이트
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(updateStyles);
    }

    return () => {};
  }, [mousePosition]);

  const submitDiv = (e: HTMLDivElement | null, i: number) => {
    if (e) divRefs.current[i] = e;
  };

  // 탭 클릭시 위로 바운스하는 애니메이션 실행
  const clickAnimation = (i: number) => {
    setClickedIndex(i);
    setTimeout(() => {
      setClickedIndex(null);
    }, 300);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed flex items-end transition-all transform -translate-x-1/2 bg-white border border-gray-100 rounded-full shadow-large bottom-5 left-1/2 h-14"
    >
      <div className="flex items-end gap-2 p-2">
        {tabs.map(({ name, icon, route }, i) => (
          <React.Fragment key={i}>
            {name === "Stroke" ? (
              <div className="flex justify-center w-4 h-10">
                <div className="w-[1px] h-10 bg-gradient-to-t to-white via-gray-300 from-white" />
              </div>
            ) : (
              <div
                onClick={() => {
                  if (name === "Theme") toggleDarkMode();
                  clickAnimation(i);
                }}
                ref={(e) => submitDiv(e, i)}
                className={`transition-all w-10 h-10 group text-gray-400 relative flex justify-center items-center duration-75 translate-y-0 bg-gray-100 rounded-full cursor-pointer ${
                  clickedIndex === i ? "animate-bouncing" : "translate-y-0"
                }`}
              >
                <div className="absolute flex items-center h-6 px-2 text-white transition-all translate-y-0 bg-black bg-opacity-50 rounded-md opacity-0 text-medium12 -top-5 group-hover:opacity-100 group-hover:-translate-y-3">
                  {name}
                </div>
                {icon}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
