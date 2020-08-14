import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SampleText = () => {
  console.log("rendering----------------------------");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("hi");
  }, [i18n]);

  return (
    <div>
      <p>{t("hello.label")}</p>
    </div>
  );

  // return <h1>{t('Welcome to React')}</h1>
};

export default SampleText;
