"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("한국어");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "한국어" ? "English" : "한국어",
    );
  };
  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === "한국어" ? "Switch to English" : "한국어로 전환"}
      </button>
    </div>
  );
}
