"use client";
import React from "react";

function Notice() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">알림</h2>
      <div className="space-y-3">
        <div className="p-4 border rounded-lg bg-gray-50">
          ✅ 새로운 댓글이 달렸습니다.
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          🔔 새로운 로드맵이 추가되었습니다.
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          📢 공지사항을 확인해주세요.
        </div>
      </div>
    </div>
  );
}

export default Notice;
