import React from "react";
import { Curve, MainSection, Section } from "./styles";

const Layout = () => {
  return (
    <MainSection>
      <Section>
        <Curve />
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
