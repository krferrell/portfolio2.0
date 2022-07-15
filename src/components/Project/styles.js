import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  height: 60vh;
  width: 35vw;
  background-color: lavender;

  border-radius: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
`;

const WorkTitle = styled.p`
  font-size: 3vh;
  color: #61892f;
  margin-top: 1vh;
  letter-spacing: 2px;
`;

const Description = styled.p`
  color: #e5e5e5;
  font-size: 1.5vh;
  margin-top: 1vh;
  margin-bottom: 6vh;
`;

export { ContentContainer, Description, Image, MainContainer, WorkTitle };
