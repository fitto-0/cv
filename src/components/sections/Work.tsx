"use client";

import { useTranslations } from "next-intl";
import React from "react";


interface Data {
    period: string,
    position: string,
    type: string,
    description: string,
}

const WorkExp = () => {
  const {markup, raw} = useTranslations("experience");
  return (
    <div className="mb-16 cursor-default">
      <h1 className="mb-4 font-medium text-neutral-800 dark:text-neutral-200">
        {markup("title")}
      </h1>
      {raw('items').map((item : Data, index : number) =>(
        <div className="flex flex-row mb-4 gap-4"
        key={index}>
        <div className="w-30">
          <p className="text-neutral-600 text-md dark:text-neutral-400">
          {item.period}
          </p>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
          {item.position}
          </span>
          <p className="text-neutral-600 mb-1 dark:text-neutral-400">
          {item.type}
            </p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
          {item.description}
          </p>
        </div>
      </div>
      ))}  
    </div>
  );
};

export default WorkExp;
