import { useState, useEffect } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  let localStorageTheme: string | null = "undefined";
  if (typeof window !== "undefined")
    localStorageTheme = localStorage.getItem("theme"); // 현재 로컬스토리지 테마 값 가져오기
  const localStorageChecker = () => {
    // 로컬스토리지 테마가 다크모드인지 확인
    if (!localStorageTheme) return false;
    return localStorageTheme === "dark" ? true : false;
  };

  const [dark, setDark] = useState<boolean>(localStorageChecker()); // 다크모드인지 확인 여부

  const darkSetButton = () => {
    setDark((prevState) => {
      const update = !prevState; // 이전 값에 따라 모드 변경
      if (update) localStorage.setItem("theme", "dark");
      else localStorage.setItem("theme", "light");
      return update;
    });
  };

  useEffect(() => {
    if (
      localStorageTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return [dark, darkSetButton];
};
