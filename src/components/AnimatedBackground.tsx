"use client";

import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Enhanced spheres with higher opacity for light mode */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-blue-500/40 dark:bg-blue-600/30 bg-sphere animate-move" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] bg-purple-500/40 dark:bg-purple-600/30 bg-sphere animate-move-slow" />
      <div className="absolute bottom-[5%] left-[20%] w-[450px] h-[450px] bg-teal-500/40 dark:bg-teal-600/30 bg-sphere animate-move" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[55%] left-[45%] w-[550px] h-[550px] bg-pink-500/40 dark:bg-pink-600/30 bg-sphere animate-move-slow" style={{ animationDelay: "-7s" }} />
      <div className="absolute top-[15%] right-[30%] w-[400px] h-[400px] bg-amber-400/30 dark:bg-amber-500/20 bg-sphere animate-move" style={{ animationDelay: "-11s" }} />
      <div className="absolute bottom-[25%] right-[15%] w-[480px] h-[480px] bg-indigo-500/40 dark:bg-indigo-600/30 bg-sphere animate-move-slow" style={{ animationDelay: "-15s" }} />
    </div>
  );
};

export default AnimatedBackground;
