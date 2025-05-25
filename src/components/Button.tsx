"use client";
import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "black" | "white";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const buttonType = {
  black: "bg-gray-900 border-gray-700 hover:bg-gray-800 text-white ",
  white: "hover:bg-gray-50 bg-white border-gray-200 text-gray-700",
};

export const Button = ({
  onClick,
  type = "black",
  className,
  disabled,
  isLoading,
  children,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${buttonType[type]} transition-all h-12 px-4 gap-2 border rounded-lg flex items-center justify-center active:scale-95`}
    >
      {isLoading ? (
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
