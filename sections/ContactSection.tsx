import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import useTranslation from "next-translate/useTranslation";


const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection, onSectionChange]);

  const { t } = useTranslation("contact");

  return (
    <div
    ref={sectionRef}
    className="contact-panel bg-white dark:bg-[#1B2731] relative"
  >
    <section
      ref={sectionRef}
      id="contact"
      className="section text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">
            {t("title")}
          </h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
          {t("subtitle")}
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
          {t("description")}
        </p>
        <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          {t("buttonText")}
        </LinkButton>
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
