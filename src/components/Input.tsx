"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";

interface InputProps {
  isRequired?: boolean;
  title?: string;
  error?: string;
  success?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: React.ReactNode;
  className?: string;
}

export const Input = ({
  className,
  isRequired,
  title,
  error,
  placeholder,
  type,
  value,
  onChange,
  success,
  icon,
}: InputProps) => {
  return (
    <div className={`flex flex-col w-full gap-2 transition-all ${className}`}>
      <p className="text-black text-semibold14">
        {title}
        {isRequired && "*"}
      </p>
      <div
        className={`w-full text-gray-700 transition-all border rounded-lg focus-within:outline focus-within:bg-white ${
          error
            ? "border-red-200 outline-red-50 bg-red-50"
            : "border-gray-200 outline-gray-50 bg-gray-50"
        }`}
      >
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="bg-transparent py-2.5 px-4 text-medium16 placeholder:text-gray-300 w-full"
        />
        {icon}
      </div>
      <span
        className={`text-red-500 transition-all text-medium14 ${
          error ? "h-[18px]" : "h-0"
        }`}
      >
        {error}
      </span>
    </div>
  );
};
