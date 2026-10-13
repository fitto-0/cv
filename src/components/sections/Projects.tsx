"use client";

import { useTranslations } from "next-intl";
import React from "react";


interface Data {
    period: string,
    name: string,
    tech: string,
    link: string | null,
    description: string[],
}

const Projects = () => {
  const {markup, raw} = useTranslations("projects");
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
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer"
            className="font-semibold text-sm text-neutral-800 underline-offset-4 hover:underline cursor-pointer dark:text-neutral-200">
            {item.name}
            </a>
          ) : (
            <span className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
            {item.name}
            </span>
          )}
          <p className="text-neutral-600 mb-1 italic text-sm dark:text-neutral-400">
          {item.tech}
            </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600 text-sm dark:text-neutral-400">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          </ul>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Projects;
