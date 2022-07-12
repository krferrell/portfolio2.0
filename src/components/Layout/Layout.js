import React from "react";
import { Curve, MainSection, Section } from "./styles";

const Layout = ({ Home }) => {
  return (
    <MainSection>
      <Section>
        <Curve>{Home}</Curve>
      </Section>
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
