import React from "react";
import {
  ContentContainer,
  Description,
  Image,
  MainContainer,
  WorkTitle,
} from "./styles";

const Project = () => {
  return (
    <MainContainer>
      <Image />
      <ContentContainer>
        <WorkTitle>PokePalace</WorkTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Description>
      </ContentContainer>
    </MainContainer>
  );
};

export default Project;
