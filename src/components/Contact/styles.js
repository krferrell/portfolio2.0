import styled from "styled-components";

const MainContanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 84vw;
  height: 85vh;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;
const PreBeepText = styled.p`
  font-size: 2vh;
  color: #e5e5e5;
`;
const BeepText = styled.p`
  font-size: 5vh;
  color: #86c232;
  margin: 5vh 0;
`;

const NameAndEmailSection = styled.div`
  display: flex;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  width: 23vw;
`;

const SmallInput = styled.input`
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #222629;
  color: #e5e5e5;
  margin-right: 3vw;
  :focus {
    outline: #8ee4af !important;
    border-color: #8ee4af;
  }
`;
const MessageInput = styled.textarea`
  border: none;
  margin-top: 3vh;
  border-radius: 8px;
  color: #e5e5e5;
  height: 15vh;
  padding: 7px;
  resize: none;
  background-color: #222629;
  :focus {
    outline: #8ee4af;
    border-color: #8ee4af;
  }
`;

export {
  BeepText,
  ContentContainer,
  EmailContainer,
  MainContanier,
  MessageInput,
  NameAndEmailSection,
  PreBeepText,
  SmallInput,
};
