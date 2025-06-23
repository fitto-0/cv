"use client";

import React from "react";
import MyImage from "../MyImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import SwitchLanguage from "../SwitchLanguage";
import { useTranslations } from "next-intl";


const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const themeChanger = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = useTranslations('header');

  return (
    <>
    
      <div className="items-center gap-2 md:gap-5 flex mt-20 mb-20 ">
        <MyImage className="rounded-full size-18 md:size-24" />
        <div className="flex-1">
          <h1 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {t('name')}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           {t('title')}
          </p>
          <Link
            href={'https://www.verceel.com/'}
            target="blank"
            className="bg-neutral-300 px-2 py-[2px] hover:opacity-80 text-neutral-600 text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            {t('link')}
          </Link>
        </div>
        
        <div>
          <SwitchLanguage/>
          <Button
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => themeChanger()}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          
        </div>
      </div>
    </>
  );
};

export default NavBar;
