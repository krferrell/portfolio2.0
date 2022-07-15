import React from "react";
import { LeftColumn, MainContainer, RightColumn } from "./style";
import { LargeText } from "../Home/styles";
import Project from "../Project/Project";

const Works = () => {
  return (
    <MainContainer>
      <LeftColumn>
        <LargeText className="work">Work</LargeText>
        <Project />
        <Project />
        <Project />
      </LeftColumn>
      <RightColumn>
        <Project />
        <Project />
        <Project />
      </RightColumn>
    </MainContainer>
  );
};

export default Works;
