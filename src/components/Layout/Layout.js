import React from "react";
import {
  AboutMeCurve,
  AboutMeStyles,
  Curve,
  MainSection,
  Section,
} from "./styles";

const Layout = ({ AboutMe }) => {
  return (
    <MainSection>
      <AboutMeStyles>
        <AboutMeCurve />
        {AboutMe}
      </AboutMeStyles>
      <Section>
        <Curve />
      </Section>
      <Section>
        <Curve />
      </Section>
    </MainSection>
  );
};

export default Layout;
