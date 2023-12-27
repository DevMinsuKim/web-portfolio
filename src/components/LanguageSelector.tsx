"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import IcoKor from "@/assets/icons/ico_kor.svg";
import { MdLanguage } from "react-icons/md";

const tabs = [
  { id: "icoKor", icon: <IcoKor /> },
  { id: "mdLanguage", icon: <MdLanguage className="h-6 w-6" /> },
];

export default function LanguageSelector() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex space-y-1 flex-col rounded-2xl border-2 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative px-3 py-1.5  text-white`}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference m-1"
              style={{ borderRadius: 16 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
            />
          )}
          <div className="flex justify-center">{tab.icon}</div>
        </button>
      ))}
    </div>
  );
}
