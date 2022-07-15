import React from "react";
import { LargeText } from "../Home/styles";
import {
  BeepText,
  ContentContainer,
  EmailContainer,
  MainContanier,
  MessageInput,
  NameAndEmailSection,
  PreBeepText,
  SmallInput,
} from "./styles";

const Contact = () => {
  return (
    <MainContanier>
      <LargeText>Contact</LargeText>
      <ContentContainer>
        <PreBeepText>
          Sorry, the person you are trying to reach is busy
        </PreBeepText>
        <PreBeepText>Please, leave a message after the beep...</PreBeepText>
      </ContentContainer>
      <BeepText>BEEP</BeepText>
      <EmailContainer>
        <NameAndEmailSection>
          <SmallInput placeholder="Name" />
          <SmallInput placeholder="Email" />
        </NameAndEmailSection>
        <MessageInput placeholder="Message" />
      </EmailContainer>
    </MainContanier>
  );
};

export default Contact;
