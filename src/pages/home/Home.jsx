import React from "react";
import { useInView, InView } from "react-intersection-observer";

import HeroContainer from "../../components/home/hero/HeroContainer";
import TechnologyContainer from "../../components/home/technology/TechnologyContainer";
import ProjectContainer from "../../components/home/project/ProjectContainer";
import AboutContainer from "../../components/home/about/AboutContainer";

const Home = () => {
  const sections = [
    <HeroContainer key="hero" />,
    <TechnologyContainer key="technology" />,
    <ProjectContainer key="project" />,
    <AboutContainer key="about" />,
  ];

  return (
    <>
      {sections.map((section, index) => (
        <InView key={index}>
          {({ inView, ref }) => (
            <section ref={ref} className={inView ? "animate-fadeUp" : ""}>
              {section}
            </section>
          )}
        </InView>
      ))}
    </>
  );
};

export default Home;
