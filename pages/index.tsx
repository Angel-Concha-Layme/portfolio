import type { NextPage } from "next";

import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import AppHead from "@/components/AppHead";

export const meta = {
  description:
    "Angel Tomas Concha Layme is a full-stack developer from Arequipa - Peru. He is passionate about writing code and developing web applications to solve real-life challenges.",
  author: "Angel Concha",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/angeltomas-dev-og-new.png`,
  siteName: "Angel Concha",
  imageAlt: "Angel Concha portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Angel Concha | Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>TomasLive.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
