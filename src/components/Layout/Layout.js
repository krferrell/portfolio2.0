import React from "react";
import {
  AboutMeCurve,
  AboutMeSection,
  Curve,
  MainSection,
  Section,
  SkillsCurve,
  SkillsSection,
} from "./styles";

const Layout = ({ AboutMe, Skills }) => {
  return (
    <MainSection>
      <AboutMeSection>
        <AboutMeCurve />
        {AboutMe}
      </AboutMeSection>
      <SkillsSection>
        <SkillsCurve />
        {Skills}
      </SkillsSection>
      <Section>
        <Curve />
      </Section>
    </MainSection>
  );
};

export default Layout;
