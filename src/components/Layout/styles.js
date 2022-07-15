import styled, { css } from "styled-components";

const curveStyles = css`
  width: 100%;
  box-shadow: 0 -29px 25px rgba(0, 0, 0, 0.15);
  border-radius: 100% 100% 0px 0px / 100% 100% 0px 0px;
  height: 100px;
  border: none;

  position: absolute;
  transform: translateY(-100%);
  z-index: 10;
`;

const AboutMeCurve = styled.div`
  background-color: #474b4f;
  ${curveStyles}
`;
const ContactCurve = styled.div`
  background-color: #474b4f;
  ${curveStyles}
`;
const SkillsCurve = styled.div`
  background-color: #61892f;
  ${curveStyles}
`;
const WorksCurve = styled.div`
  background-color: #222629;
  ${curveStyles}
`;

const AboutMeSection = styled.div`
  background-color: #474b4f;
  width: 100%;
  position: relative;
`;
const ContactSection = styled.div`
  background-color: #474b4f;
  width: 100%;
  position: relative;
`;
const WorksSection = styled.div`
  background-color: #222629;
  width: 100%;
  position: relative;
`;
const SkillsSection = styled.div`
  background-color: #61892f;
  width: 100%;
  position: relative;
`;

const MainSection = styled.div`
  position: absolute;
  top: 105%;
  height: 100%;
  width: 100%;
`;

export {
  AboutMeCurve,
  AboutMeSection,
  ContactCurve,
  ContactSection,
  MainSection,
  SkillsCurve,
  SkillsSection,
  WorksCurve,
  WorksSection,
};
