"use client";

import React from "react";
import MyImage from "../MyImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import SwitchLanguage from "../SwitchLanguage";
import { useTranslations } from "next-intl";
import Image from "next/image";


const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const themeChanger = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = useTranslations('header');
  // Ensure we only render theme-dependent UI once the component is mounted to avoid
  // a server/client HTML mismatch during hydration.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    
      <div className="items-center gap-2 md:gap-5 flex mt-20 mb-20 ">
        <div className="relative">
          <MyImage className="rounded-full size-26 md:size-35 border-2 border-neutral-300 dark:border-neutral-700 shadow-lg" />
          {/* Attention Grabber */}
          <div className="absolute -top-12 -left-8 md:-top-20 md:-left-32 pointer-events-none select-none w-24 md:w-32">
            <p className="text-[10px] md:text-sm font-medium text-neutral-600 dark:text-neutral-400 -rotate-12 mb-2 italic text-center">
              Try to click !
            </p>
            <div className="relative h-12 md:h-16 w-full rotate-[15deg]">
              <Image src="/images/fleche.png" alt="arrow" fill className="object-contain filter dark:invert" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {t('name')}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           {t('title')}
          </p>
          <Link
            href={'https://fzel.vercel.app/'}
            target="blank"
            className="bg-neutral-300 px-2 py-[2px] hover:opacity-80 text-neutral-600 text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            {t('link')}
          </Link>
        </div>
        
        <div>
          <SwitchLanguage/>
          {mounted && (
            <Button
              className="cursor-pointer"
              size="icon"
              variant="ghost"
              onClick={themeChanger}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          )}
          
        </div>
      </div>
    </>
  );
};

export default NavBar;
