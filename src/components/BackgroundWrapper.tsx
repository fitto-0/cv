"use client";
import { ReactNode } from "react";
import styles from "./BackgroundWrapper.module.css";

export default function BackgroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen select-none">
      <div 
        className="fixed inset-0 -z-10 object-cover bg-[url('/images/noise.png')] opacity-[.02] bg-fixed"
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}