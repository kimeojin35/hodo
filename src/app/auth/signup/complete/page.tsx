// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Controller, useForm } from "react-hook-form";
// import { Button, Input, Select } from "@/components";
// import { INTERESTS, LEVELS } from "@/constants/option";
// import { supabase } from "@/process";

// const randomNicknames = [
//   "푸른고래",
//   "날쌘돌이",
//   "작은별",
//   "번개거북",
//   "춤추는토끼",
// ];

// const generateRandomNickname = () => {
//   const randomIndex = Math.floor(Math.random() * randomNicknames.length);
//   return randomNicknames[randomIndex];
// };

// const SignupComplete = () => {
//   const router = useRouter();
//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//     watch,
//   } = useForm({ defaultValues: { nickname: "", interests: [], level: "" } });

//   const onSubmit = async (data: {
//     nickname: string;
//     interests: any;
//     level: any;
//   }) => {
//     const user = await supabase.auth.getUser();
//     if (!user.data?.user) {
//       alert("사용자 정보를 가져올 수 없습니다.");
//       return;
//     }

//     const nickname = data.nickname.trim() || generateRandomNickname();
//     const { error } = await supabase.from("users").insert([
//       {
//         id: user.data.user.id,
//         email: user.data.user.email,
//         nickname,
//         interests: data.interests,
//         level: data.level,
//       },
//     ]);

//     if (error) {
//       alert("회원가입 완료 중 오류가 발생했습니다.");
//     } else {
//       router.push("/");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-screen">
//       <div className="w-full max-w-[360px] flex flex-col gap-9">
//         <div className="flex flex-col gap-3">
//           <p className="text-bold28">계정 만들기</p>
//           <p className="text-gray-700 text-medium16">
//             더 많은 기능을 활용해보세요
//           </p>
//         </div>
//         <Controller
//           control={control}
//           rules={{ required: "닉네임을 입력해주세요" }}
//           render={({ field }) => (
//             <Input
//               {...field}
//               title="닉네임"
//               placeholder="닉네임을 입력해주세요"
//               error={errors.nickname?.message}
//             />
//           )}
//           name="nickname"
//         />
//         <Select
//           title="관심 분야"
//           placeholder="선택"
//           options={INTERESTS}
//           error={errors.interests?.message}
//         />
//         <Select
//           title="목표 레벨"
//           placeholder="선택"
//           options={LEVELS}
//           error={errors.level?.message}
//         />
//         <Button onClick={handleSubmit(onSubmit)} text="완료" />
//       </div>
//     </div>
//   );
// };

// export default SignupComplete;
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SignupComplete = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/mypage"); // ✅ 대시보드로 이동
    }, 3000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">회원가입이 완료되었습니다!</h1>
      <p>잠시 후 마이페이지로 이동합니다...</p>
    </div>
  );
};

export default SignupComplete;
