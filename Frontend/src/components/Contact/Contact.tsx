import React from 'react'

import { ContactForm, ContactFormButton, ContactSectionContainer, ContactMainDiv, ContactArticle, ContactArticleWrapper, ContactArticleH1, ContactArticleP, ContactFormRow1, ContactFormRow2, ContactFormInputGroup, ContactFormInputLabel, ContactFormInputs, ContactFormTextArea, ContactFormButtonContainer, ContactFormButtonDiv} from './styles';

function Contact() {
  return (
    <ContactSectionContainer id="#Contact">
      <ContactMainDiv>

        <ContactArticle>
          <ContactArticleWrapper>
            <ContactArticleH1>Send me a message!</ContactArticleH1>
            
            <ContactArticleP>Got a question or proposal, or just want <br />
              to say hello? Go ahead.
            </ContactArticleP>
          </ContactArticleWrapper>
        </ContactArticle>
        
        <ContactForm id="contact" method="POST" action="https://formsubmit.co/ahsantime1@gmail.com">
          <input type="hidden" name="_url" value="https://ahsansyed.com"/>

          
          <ContactFormRow1>
            <ContactFormInputGroup>
              <ContactFormInputLabel htmlFor="full-name">
                Your Name
              </ContactFormInputLabel>
              
              <ContactFormInputs id="full-name" name="name" placeholder="Enter your Name" type="text" required/>
            </ContactFormInputGroup>
            
            <ContactFormInputGroup>
              <ContactFormInputLabel htmlFor="email-address">
                Email Address
              </ContactFormInputLabel>
              
              <ContactFormInputs id="email-address" name="email" placeholder="Enter your email address" type="email" required />
            </ContactFormInputGroup>
          </ContactFormRow1>
        
          <ContactFormRow2>
            <ContactFormInputLabel htmlFor="message">
              Your Message
            </ContactFormInputLabel>
            
            <ContactFormTextArea 
              id="message" 
              name="message" 
              placeholder="Hey I'd like to speak to you about our products at Company Z, let's plan a meeting to talk.."
              required rows={3} 
              minLength={30} 
            />
          </ContactFormRow2>
          
          <ContactFormButtonContainer>
            <ContactFormButton 
              type="submit" 
              id="submit-button" 
            >
              <ContactFormButtonDiv>
                Submit
              </ContactFormButtonDiv>
            </ContactFormButton>
            
          </ContactFormButtonContainer>
          
        </ContactForm>
        
      </ContactMainDiv>
    </ContactSectionContainer>
  )
}

export default Contact;