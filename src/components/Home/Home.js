import React from "react";
import {
  Image,
  LargeText,
  LeftContainer,
  MainContainer,
  MediumText,
  RightContainer,
  TextContainerBottom,
  TextContainerTop,
} from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <TextContainerTop>
          <LargeText>KENNETH</LargeText>
          <LargeText>FERRELL</LargeText>
        </TextContainerTop>
        <TextContainerBottom>
          <LargeText>II</LargeText>
          <MediumText>SOFTWARE ENGINEER</MediumText>
        </TextContainerBottom>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </MainContainer>
  );
};

export default Home;
