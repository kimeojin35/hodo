"use client";
import { Logo } from "@/assets";
import { Nav } from "@/components";
import { Search_Modal } from "@/components/Search_Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-white dark:bg-black">
      <Logo
        onClick={() => router.push("/")}
        size={28}
        className="fixed top-4 left-4"
      />
      <Nav />
      <Search_Modal />
    </div>
  );
}
