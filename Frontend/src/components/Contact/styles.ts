import styled from "styled-components";

const contactFontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'`

export const ContactContainer = styled.div`
 display: grid;
 position: relative;
 justify-content: center;
 align-items: center;
`;

export const ContactFormTitle = styled.h2`
 font-family: ${contactFontFamily};
`;

export const ContactForm = styled.form`
 display: grid;
 justify-content: center;
 align-items: center;
`;

export const ContactInputTitle = styled.h4`
 font-family: ${contactFontFamily};
 font-weight: normal;
`;

export const ContactInputField = styled.input`
 background-color: yellow;
 height: 1.5rem;
 
 &:focus::placeholder {
  font-size: smaller;
  transform: translateY(-20%);
 }
`;

export const ContractFormTextAndButtonContainer = styled.div`
 display: grid;
`;

export const ContractTextAreaTitle = styled.h4`
 font-family: ${contactFontFamily};
 font-weight: normal;
`;

export const ContactTextArea = styled.textarea`
 background-color: yellow;
 /* height: 3rem; */
 
 font-family: ${contactFontFamily};
 
 &:focus::placeholder {
  font-size: smaller;
  transform: translateY(-20%);
 }
`;

export const ContactFormButton = styled.button`
 margin-top: 10%;
 margin-bottom: 10%;
 
 border: 1px solid black;
 cursor: pointer;
 
 transition: color 0.2s;
 
 color: rgba(0,0,0,0.5);
 
 &:hover {
  color: rgba(0,0,0,1);
 }
`;