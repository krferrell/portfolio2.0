import React from "react";
import {
  AboutMeCurve,
  AboutMeSection,
  MainSection,
  SkillsCurve,
  SkillsSection,
  WorksCurve,
  WorksSection,
} from "./styles";

const Layout = ({ AboutMe, Skills, Works }) => {
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
      <WorksSection>
        <WorksCurve />
        {Works}
      </WorksSection>
    </MainSection>
  );
};

export default Layout;
