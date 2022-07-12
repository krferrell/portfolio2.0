import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 30%;
  top: 5%;
  position: relative;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 55%;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 45%;
`;

const TextContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const TextContainerBottom = styled.div`
  display: flex;
  align-items: flex-end;
  width: 70%;
`;

const Image = styled.div`
  height: 56vh;
  width: 35vw;
  background-color: lightblue;

  border-radius: 8px;
`;

const LargeText = styled.p`
  font-size: 15vh;
  font-family: "Baskervville", serif;
  letter-spacing: 10px;
  color: #e5e5e5;
`;
const MediumText = styled.p`
  font-size: 4vh;
  margin-left: 40px;
  font-weight: bold;
  line-height: 15vh;
  font-family: "Baskervville", serif;
  letter-spacing: 2px;
  color: #e5e5e5;
`;

export {
  Image,
  LargeText,
  LeftContainer,
  MainContainer,
  MediumText,
  RightContainer,
  TextContainerBottom,
  TextContainerTop,
};
