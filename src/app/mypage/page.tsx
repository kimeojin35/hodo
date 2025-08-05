import Link from "next/link";
import React from "react";

function Mypage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 프로필 섹션 */}
      <div className="flex items-center space-x-4 border-b pb-4">
        <img
          src="/default-profile.png"
          alt="Profile"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-bold">사용자 닉네임</h2>
          <p className="text-gray-600">간단한 소개를 입력하세요.</p>
        </div>
      </div>

      {/* 내 로드맵 */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">내 로드맵</h3>
        <div className="space-y-3">
          <Link
            href="/roadmap/1"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            🚀 프론트엔드 개발자 로드맵
          </Link>
          <Link
            href="/roadmap/2"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            📌 백엔드 기초 로드맵
          </Link>
        </div>
      </div>

      {/* 북마크한 로드맵 */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">북마크한 로드맵</h3>
        <div className="space-y-3">
          <Link
            href="/roadmap/3"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            🌟 고급 Next.js 로드맵
          </Link>
        </div>
      </div>

      {/* 설정 */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">설정</h3>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          닉네임 변경
        </button>
      </div>
    </div>
  );
}

export default Mypage;
