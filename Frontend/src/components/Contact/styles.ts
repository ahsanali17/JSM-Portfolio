import styled from "styled-components";

const contactFontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'`

// export const ContactContainer = styled.div`
//  display: grid;
//  position: relative;
//  justify-content: center;
//  align-items: center;
// `;

// export const ContactFormTitle = styled.h2`
//  font-family: ${contactFontFamily};
// `;

// export const ContactForm = styled.form`
//  display: grid;
//  justify-content: center;
//  align-items: center;
// `;

// export const ContactInputTitle = styled.h4`
//  font-family: ${contactFontFamily};
//  font-weight: normal;
// `;

// export const ContactInputField = styled.input`
//  background-color: yellow;
//  height: 1.5rem;
 
//  &:focus::placeholder {
//   font-size: smaller;
//   transform: translateY(-20%);
//  }
// `;

// export const ContractFormTextContainer = styled.div`
//  display: grid;
//  margin-bottom: 1rem;
// `;

// export const ContractTextAreaTitle = styled.h4`
//  font-family: ${contactFontFamily};
//  font-weight: normal;
//  margin-bottom: 1rem;
// `;

// export const ContactTextArea = styled.textarea`
//  height: 3rem;
//  margin-bottom: 1rem;
//  width: 100%;
 
//  font-family: ${contactFontFamily};
 
//  &:focus::placeholder {
//   font-size: smaller;
//   transform: translateY(-20%);
//  }
// `;

// export const ContactFormButton = styled.button`
//  border: 1px solid black;
//  cursor: pointer;
//  transition: color 0.2s;
//  color: rgba(0,0,0,0.5);
//  border-radius: 2.5px;
 
//  &:hover {
//   color: rgba(0,0,0,1);
//  }
// `;

export const ContactSectionContainer = styled.section`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 40px;
  min-height: 70vh;
`;

export const ContactMainDiv = styled.div`
 align-items: center;
 box-align: center;
 display: flex;
 flex-direction: column;
 margin-top: 2.5rem;
 padding: 0 10rem;
`;

export const ContactArticle = styled.article`
 box-sizing: border-box;
 margin-bottom: 5rem;
 position: relative;
 text-align: center;
 
`;

export const ContactArticleWrapper = styled.div`
 box-sizing: border-box;
 position: relative;
`;

export const ContactArticleH1 = styled.h1`
 color: white;
 font-size: 3.2em;
 font-weight: bold;
 line-height: 1.3;
 max-width: unset;
 opacity: 1;
 transform: translate3d(0,0,0);
`;

export const ContactArticleP = styled.p`
 color: white;
 font-size: 1.6em;
 line-height: 1.2;
 letter-spacing: 0.02rem;
 margin: 0 auto;
 margin-top: 15px;
 opacity: 1;
 transform: translate3d(0,0,0);
`;

export const ContactForm = styled.form`
 align-items: center;;
 box-pack: center;
 box-align: center;
 justify-content: center;
 
 @media screen and (max-width: 700px) {
  width: 60%;
  min-width: 500px;
 }
`;

export const ContactFormRow1 = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 3rem;
 position: relative;
 width: 100%;
`;

export const ContactFormRow2 = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 position: relative;
 width: 100%;
`;

export const ContactFormInputGroup = styled.div`
 display: flex;
 flex-direction: column;
 position: relative;
 
 &:not(:last-child) {margin-right: 20px};
 
 color: rgba(61, 21, 95, 0.5);
 @media screen and (max-width: 700px) {
  width: 45%;
 }
`;

export const ContactFormInputLabel = styled.label`
 color: white;
 cursor: pointer;
 font-size: 1.6rem;
 font-weight: 200;
 margin-bottom: 5px;
 
 &::before, ::after {
  box-sizing: border-box;
 }
 
 &:hover {
  color: green;
 }
`;
 
export const ContactFormInputs = styled.input`
 background: transparent;
 border: 0;
 border-bottom: 1px solid;
 color: green;
 padding: 0.6em;
 padding-left: 0;
 position: relative;
 font-size: 1.25rem;
 
 &:focus-within {
  color: white;
 }
`; 

export const ContactFormTextArea = styled.textarea`
 background: transparent;
 border: 0;
 border-bottom: 1px solid;
 border-radius: 0;
 color: green;
 font-size: 1.25rem;
 overflow: auto;
 padding: 0.6em;
 padding-left: 0;
 position: relative;
 resize: none;
 -webkit-tap-highlight-color: transparent;
 
 &:focus-within {
  color: white;
 }
`;

export const ContactFormButtonContainer = styled.div`
 align-items: center;
 display: flex;
 justify-content: center;
 margin-top: 2rem;
`;

export const ContactFormButton = styled.button`
 position: relative;
 font-weight: bold;
 text-transform: uppercase;
 letter-spacing: 0.1em;
 font-size: 0.9em;
 user-select: none;
 display: inline-flex;
 overflow: hidden;
 background: transparent;
 white-space: nowrap;
 -webkit-tap-highlight-color: transparent;
 -webkit-appearance: button;
 margin: 0;
 padding: 0;
 border: none;
 cursor: pointer;
`;

export const ContactFormButtonDiv = styled.div`
 z-index: 1;
 display: flex;
 position: relative;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 padding: 1.25em 3em;
 width: 100%;
 color: grey;
 border: 1px solid green;
 
 &:hover {
  color: white;
 }
`;