import React from "react";
import {
  AboutMeCurve,
  AboutMeSection,
  ContactCurve,
  ContactSection,
  MainSection,
  SkillsCurve,
  SkillsSection,
  WorksCurve,
  WorksSection,
} from "./styles";

const Layout = ({ AboutMe, Contact, Skills, Works }) => {
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
      <ContactSection>
        <ContactCurve />
        {Contact}
      </ContactSection>
    </MainSection>
  );
};

export default Layout;
