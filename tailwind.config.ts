import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      white: "#FFFFFF",
      black: "#000000",
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
      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
    fontSize: {
      bold48: [
        "48px",
        {
          fontWeight: 700,
          lineHeight: "58px",
        },
      ],
      bold40: [
        "40px",
        {
          fontWeight: 700,
          lineHeight: "48px",
        },
      ],
      medium36: [
        "36px",
        {
          fontWeight: 500,
          lineHeight: "44px",
        },
      ],
      semibold36: [
        "32px",
        {
          fontWeight: 600,
          lineHeight: "38px",
        },
      ],
      bold36: [
        "36px",
        {
          fontWeight: 700,
          lineHeight: "44px",
        },
      ],
      bold32: [
        "32px",
        {
          fontWeight: 700,
          lineHeight: "38px",
        },
      ],

      medium28: [
        "28px",
        {
          fontWeight: 500,
          lineHeight: "34px",
        },
      ],
      semibold28: [
        "28px",
        {
          fontWeight: 600,
          lineHeight: "34px",
        },
      ],
      bold28: [
        "28px",
        {
          fontWeight: 700,
          lineHeight: "34px",
        },
      ],
      regular24: [
        "24px",
        {
          fontWeight: 400,
          lineHeight: "28px",
        },
      ],
      medium24: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "28px",
        },
      ],
      semibold24: [
        "24px",
        {
          fontWeight: 700,
          lineHeight: "28px",
        },
      ],

      medium20: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      semibold20: [
        "20px",
        {
          fontWeight: 600,
          lineHeight: "24px",
        },
      ],

      medium18: [
        "18px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      semibold18: [
        "18px",
        {
          fontWeight: 600,
          lineHeight: "22px",
        },
      ],

      medium16: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      semibold16: [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "20px",
        },
      ],
      medium14: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "18px",
        },
      ],
      semibold14: [
        "14px",
        {
          fontWeight: 600,
          lineHeight: "18px",
        },
      ],
      medium12: [
        "12px",
        {
          fontWeight: 500,
          lineHeight: "14px",
        },
      ],
    },
    keyframes: {
      bouncing: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-16px)" },
        "90%": { transform: "translateY(4px)" },
      },
      spin: {
        to: { transform: "rotate(360deg)" },
      },
    },
    animation: {
      bouncing: "bouncing 0.3s ease-in-out",
      spin: "spin 1s linear infinite",
    },
    boxShadow: {
      large: "0 30px 60px 5px rgba(0, 0, 0, 0.12)",
    },
  },
  plugins: [],
} satisfies Config;
