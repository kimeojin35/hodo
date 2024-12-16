import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        yellow: {
          50: "#F7FFDB", // 매우 밝은 노랑+연두 (테니스 공의 밝은 톤)
          100: "#EEFFB5",
          200: "#E4FF8A",
          300: "#D9FF5C",
          400: "#CDFF2B",
          500: "#C1FF00", // 기본 테니스 공 색상
          600: "#9ECC00",
          700: "#7A9900",
          800: "#576600",
          900: "#333300", // 어두운 노랑+연두
        },
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
