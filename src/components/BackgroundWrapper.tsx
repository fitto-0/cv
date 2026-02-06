"use client";
import { ReactNode } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Noise from './Noise'

export default function BackgroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen select-none">
      <AnimatedBackground />
      <Noise
        patternSize={250}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}
