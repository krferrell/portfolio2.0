import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  top: 5%;
  position: relative;
`;

const TitleContainer = styled.div`
  padding-bottom: 3vh;
`;

const Title = styled.span`
  font-size: 15vh;
  padding-left: 8%;
  color: #e5e5e5;
  font-family: "Baskervville", serif;
  letter-spacing: 10px;
`;

const Content = styled.span`
  font-family: "Baskervville", serif;
`;

const MainContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  width: 83%;
`;

const SubContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  color: #e5e5e5;
`;

export {
  Content,
  MainContainer,
  MainContentContainer,
  SubContentContainer,
  Title,
  TitleContainer,
};
