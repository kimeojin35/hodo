import { SignupFormType } from "@/types";
import { supabase } from "@/process";

export const emailVerification = async (formData: SignupFormType) => {
  console.log("formData:", formData);

  const { error } = await supabase.auth.signInWithOtp({
    email: formData.email,
    options: {
      shouldCreateUser: true, // ✅ 유저가 없으면 자동 생성
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`, // ✅ 인증 후 이동할 경로
    },
  });

  if (error) {
    console.error("Signup Error:", error);
    return { success: false, message: error.message };
  }

  return { success: true, message: "이메일을 확인해주세요!" };
};
