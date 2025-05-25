"use client";
import React from "react";
import { Github, Google } from "@/assets";
import { Button, Input } from "@/components";
import { signInWithGithub } from "@/apis/auth/github";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/apis/auth";

function Login() {
  const navigation = useRouter();
  type LoginFormType = { email: string; password: string };
  const { control, handleSubmit, getValues } = useForm<LoginFormType>({
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-[360px] flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <p className="text-bold28">만나서 반가워요</p>
          <p className="text-gray-700 text-medium16">
            나만의 로드맵을 만들고 공유해요
          </p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <Button type="white" onClick={signInWithGithub}>
            <Github />
            깃허브로 로그인
          </Button>
          <Button type="white" onClick={signInWithGithub}>
            <Google />
            구글로 로그인
          </Button>
          <div className="flex items-center gap-2 py-2">
            <span className="w-full border border-gray-100" />
            <p className="text-gray-400 text-medium14">or</p>
            <span className="w-full border border-gray-100" />
          </div>
          <Controller
            control={control}
            render={({ field }) => (
              <Input {...field} title="이메일" placeholder="you@example.com" />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                title="비밀번호"
                placeholder="••••••••"
              />
            )}
            name="password"
          />
        </div>
        <Button onClick={handleSubmit(getValues)} text="로그인" />
        <p className="text-gray-500 text-medium14">
          계정이 없으신가요?{" "}
          <span
            onClick={() => navigation.push("signup")}
            className="text-black underline cursor-pointer text-semibold14"
          >
            회원가입
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
