"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/process";

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        console.error("Auth Error:", error?.message);
        router.push("/auth/signup"); // 인증 실패 시 회원가입 페이지로
        return;
      }

      // ✅ 유저 정보가 userinfo 테이블에 있는지 확인
      const { data: userInfo, error: userError } = await supabase
        .from("userinfo")
        .select("*")
        .eq("email", data.session.user.email)
        .single();

      if (!userInfo) {
        console.log("userinfo 테이블에 없음 → 추가 필요");
        const { error: insertError } = await supabase.from("userinfo").insert([
          {
            id: data.session.user.id,
            email: data.session.user.email,
            nickname: data.session.user.user_metadata?.name || "New User",
            avatar_url: data.session.user.user_metadata?.avatar_url || "",
          },
        ]);

        if (insertError) {
          console.error("userinfo 추가 실패:", insertError.message);
        }
      }

      router.push("/auth/signup/complete"); // 성공 시 이동
    };

    handleAuth();
  }, [router]);

  return <div>이메일 인증 처리 중...</div>;
};

export default AuthCallback;
