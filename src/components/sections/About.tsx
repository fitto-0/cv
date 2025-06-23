import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  return (
    <div className="mb-10 md:mb-16 cursor-default">
      <h1 className="mb-4 font-medium text-neutral-800 dark:text-neutral-200">
      {t("title")}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 pl-2 text-[15px]">
        {t("content")}
      </p>
    </div>
  );
};

export default About;
