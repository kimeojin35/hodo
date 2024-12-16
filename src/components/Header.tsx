"use client";
import React, { useState } from "react";

export const Header = () => {
  const arr = new Array(5).fill(0);
  return (
    <div className="flex gap-2 items-center bottom-2 fixed">
      <p className="">Hodō</p>
      <nav className="flex rounded-full p-2 gap-2 bg-white border border-gray-100">
        {arr.map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-yellow-500 rounded-full hover:-translate-y-2 hover:scale-150 transition-all"
          ></div>
        ))}
      </nav>
    </div>
  );
};
