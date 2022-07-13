import React from "react";
import {
  Content,
  MainContainer,
  MainContentContainer,
  SubContentContainer,
  Title,
  TitleContainer,
} from "./styles";
import { MediumText } from "../../globalStyles";

const AboutMe = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>ME</Title>
      </TitleContainer>
      <MainContentContainer>
        <SubContentContainer>
          <MediumText>Before</MediumText>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.
          </Content>
        </SubContentContainer>
        <SubContentContainer>
          <MediumText>Now</MediumText>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.
          </Content>
        </SubContentContainer>
        <SubContentContainer>
          <MediumText>Later</MediumText>
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.lo
          </Content>
        </SubContentContainer>
      </MainContentContainer>
    </MainContainer>
  );
};

export default AboutMe;
