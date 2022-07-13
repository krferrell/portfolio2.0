import React from "react";
import { SkillsContainer } from "./styles";
import {
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  StyledCompIcon,
  TsIcon,
} from "../../assets/skillsIcons";

const Skills = () => {
  return (
    <SkillsContainer>
      <NodeJsIcon />
      <ReactIcon />
      <ReduxIcon />
      <ScssIcon />
      <StyledCompIcon />
      <TsIcon />
    </SkillsContainer>
  );
};

export default Skills;
