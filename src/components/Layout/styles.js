import styled from "styled-components";

const Curve = styled.div`
  background-color: green;
  width: 100%;
  box-shadow: 0 -29px 25px rgba(0, 0, 0, 0.15);
  border-radius: 100% 100% 0px 0px / 100% 100% 0px 0px;
  height: 100px;
  border: none;

  position: absolute;
  transform: translateY(-100%);
  z-index: 10;
`;

const Section = styled.div`
  background-color: green;
  height: 500px;
  width: 100%;
  position: relative;
`;

const AboutMeSection = styled.div`
  background-color: #474b4f;
  width: 100%;
  position: relative;
`;

const AboutMeCurve = styled.div`
  background-color: #474b4f;
  width: 100%;
  box-shadow: 0 -29px 25px rgba(0, 0, 0, 0.15);
  border-radius: 100% 100% 0px 0px / 100% 100% 0px 0px;
  height: 100px;
  border: none;

  position: absolute;
  transform: translateY(-100%);
  z-index: 10;
`;

const SkillsSection = styled.div`
  background-color: #61892f;
  width: 100%;
  position: relative;
`;

const SkillsCurve = styled.div`
  background-color: #61892f;
  width: 100%;
  box-shadow: 0 -29px 25px rgba(0, 0, 0, 0.15);
  border-radius: 100% 100% 0px 0px / 100% 100% 0px 0px;
  height: 100px;
  border: none;

  position: absolute;
  transform: translateY(-100%);
  z-index: 10;
`;

const MainSection = styled.div`
  position: absolute;
  top: 105%;
  height: 100%;
  width: 100%;
  background-color: lightblue;
`;

export {
  AboutMeCurve,
  AboutMeSection,
  Curve,
  MainSection,
  Section,
  SkillsCurve,
  SkillsSection,
};
