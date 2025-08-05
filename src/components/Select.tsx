"use client";
import { useState, useRef, useEffect } from "react";
import { useOutsideClick } from "@/hook";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  title?: string;
  options: Option[];
  error?: string;
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  title,
  options,
  error,
  placeholder,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [selected, setSelected] = useState<Option | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const ref = useOutsideClick({ onClickOutside: () => setIsOpen(false) });

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && isOpen) {
      setSelected(filteredOptions[focusedIndex]);
      setIsOpen(false);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key.length === 1) {
      setSearch((prev) => prev + e.key);
    }
  };

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div ref={ref} className="relative w-full" onKeyDown={handleKeyDown}>
      {title && <p className="mb-2 text-black text-semibold14">{title}</p>}
      <button
        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? selected.label : placeholder}
      </button>
      <p
        className={`mt-2 text-red-500 transition-all text-medium14 overflow-hidden ${
          error && !isOpen ? "h-[18px]" : "h-0"
        }`}
      >
        {error}
      </p>
      {isOpen && (
        <div className="absolute w-full bg-white border overflow-hidden border-gray-200 rounded-lg mt-0.5 z-10">
          <input
            className="w-full p-2 border-b"
            placeholder="검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <ul ref={listRef} tabIndex={0} className="max-h-48 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`p-2 cursor-pointer ${
                    focusedIndex === index ? "bg-gray-100" : ""
                  }`}
                  onMouseEnter={() => setFocusedIndex(index)}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">검색 결과 없음</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
