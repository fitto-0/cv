"use client";
import { ReactNode } from "react";

export default function BackgroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen select-none">
      {/* Supprimez la div absolute pour le bruit et utilisez plutôt un fond fixe */}
      <div 
        className="fixed inset-0 -z-10 object-cover bg-[url('/images/noise.png')] opacity-[.02]"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}