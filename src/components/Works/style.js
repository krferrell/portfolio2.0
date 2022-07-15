import styled, { css } from "styled-components";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 5%;
  position: relative;
  margin-top: 5vh;
  padding-bottom: 20vh;
`;

const LeftColumn = styled.div`
  ${flexColumn};
  width: 42vw;
  margin-top: 7vh;

  .work {
    margin-bottom: 12vh;
  }
`;
const RightColumn = styled.div`
  ${flexColumn};
  width: 42vw;
  margin-top: 7vh;
`;

export { LeftColumn, MainContainer, RightColumn };
