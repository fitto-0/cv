"use client";

import {
  Copy,
  CopyCheckIcon,
  /* Github, */
  LucideLinkedin,
  Mail,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  const copyClipBoard = (value: string) => {
    navigator.clipboard.writeText(value);
    toast("Copied", {
      className: "max-w-fit space-x-2",
      icon: <CopyCheckIcon />,
    });
  };

  const contactItems = [
    {
      icon: <PhoneIcon width={15} height={15} className="text-neutral-600 dark:text-neutral-400" />,
      label: t("infos.phone"),
      value: t("phone"),
      copyable: true,
      isLink: false,
    },
    {
      icon: <Mail width={15} height={15} className="text-neutral-600 dark:text-neutral-400" />,
      label: t("infos.email"),
      value: t("email"),
      copyable: true,
      isLink: true,
      linkPrefix: "mailto:",
    },
    {
      icon: <LucideLinkedin width={15} height={15} className="text-neutral-600 dark:text-neutral-400" />,
      label: t("infos.linkedin"),
      value: t("linkedin"),
      copyable: false,
      isLink: true,
      linkPrefix: "",
      href: "https://www.linkedin.com/in/fatima-zahra-elkasmi/",
    },
  ];
  

  return (
    <div className="cursor-default mb-20">
    <h1 className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">
      {t('title')}
    </h1>

    {contactItems.map((item, index) => (
      <div key={index} className="flex gap-4 w-full items-center h-10">
        <div className="flex w-30 items-center gap-2">
          {item.icon}
          <p className="text-neutral-600 dark:text-neutral-400">{item.label}</p>
        </div>
        <div className="text-neutral-800 flex-1 text-sm md:text-md dark:text-neutral-200">
          {item.isLink ? (
            <Link
              href={item.href || `${item.linkPrefix}${item.value}`}
              target={item.href ? "_blank" : "_self"}
              className="text-sm md:text-md"
            >
              {item.value}
            </Link>
          ) : (
            item.value
          )}
        </div>
        {item.copyable && (
          <Button
            variant="ghost"
            className="hover:cursor-pointer"
            onClick={() => copyClipBoard(item.value)}
          >
            <Copy className="text-neutral-600 size-3 dark:text-neutral-400" />
          </Button>
        )}
      </div>
    ))}
  </div>
);
};
  
export default Contact;