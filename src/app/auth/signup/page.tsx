"use client";
import React, { useState } from "react";
import { Email, Github, Google } from "@/assets";
import { Button, Input } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  signInWithGithub,
  signInWithGoogle,
  emailVerification,
} from "@/apis/auth";
import { SignupFormType } from "@/types";

function Signup() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigation = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupFormType) => {
    console.log("email: ", data.email);
    const result = await emailVerification(data);

    if (result.success) {
      setIsEmailSent(true);
    } else {
      alert(result.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-[360px] flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <p className="text-bold28">계정 만들기</p>
          <p className="text-gray-700 text-medium16">
            더 많은 기능을 활용해보세요
          </p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <Button type="white" onClick={signInWithGithub}>
            <Github />
            깃허브로 회원가입
          </Button>
          <Button type="white" onClick={signInWithGithub}>
            <Google />
            구글로 회원가입
          </Button>
          <div className="flex items-center gap-2 py-2">
            <span className="w-full border border-gray-100" />
            <p className="text-gray-400 text-medium14">or</p>
            <span className="w-full border border-gray-100" />
          </div>
          {isEmailSent ? (
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="p-1 rounded-md bg-white border border-gray-200 flex h-fit">
                <Email size={18} className="text-gray-600" />
              </div>
              <div className="flex flex-col gap-1 py-1">
                <p className="text-gray-700 text-medium16">
                  이메일을 확인해주세요
                </p>
                <p className="text-gray-400 text-medium14">
                  입력하신 이메일로 인증 코드를 발송했습니다
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full gap-4">
              <Controller
                control={control}
                rules={{
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "올바른 이메일 주소를 입력해주세요",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    title="이메일"
                    placeholder="you@example.com"
                    error={errors.email?.message}
                  />
                )}
                name="email"
              />
              <Controller
                control={control}
                rules={{
                  required: "비밀번호를 입력해주세요",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자 이상이어야 합니다",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    title="비밀번호"
                    placeholder="••••••••"
                    error={errors.password?.message}
                  />
                )}
                name="password"
              />
            </div>
          )}
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          text={isEmailSent ? "이메일 재전송" : "회원가입"}
        />
        <p className="text-gray-500 text-medium14">
          계정이 있으신가요?{" "}
          <span
            onClick={() => navigation.push("login")}
            className="text-black underline cursor-pointer text-semibold14"
          >
            로그인
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
