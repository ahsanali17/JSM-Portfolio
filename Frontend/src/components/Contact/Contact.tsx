import React from 'react'

import {ContactContainer, ContactFormTitle, ContactForm, ContactInputTitle, ContactInputField, ContractFormTextAndButtonContainer ,ContractTextAreaTitle, ContactTextArea, ContactFormButton} from './styles';


function Contact() {
 const formInputFields = [{input:'Full Name', type:'Full Name', value:'Full Name', placeholder:'Full Name'}, {input: 'E-mail Address', type: 'email', value:'E-mail Address', placeholder: 'E-mail Address'}];
 
  return (
   <ContactContainer>
    <ContactForm>
     <ContactFormTitle>Contact Me</ContactFormTitle>
     {formInputFields.map((item, index) => {
      return (
       
       <div key={index}>
        <ContactInputTitle>{item.input}</ContactInputTitle>
        <ContactInputField type={item.type} placeholder={item.placeholder} />
       </div>
      )
     })}
     <ContractFormTextAndButtonContainer>
      <ContractTextAreaTitle>Send Message</ContractTextAreaTitle>
      
      <ContactTextArea placeholder='Enter your message here'/>
      
      <ContactFormButton type='button'>Submit Message</ContactFormButton>
      
     </ContractFormTextAndButtonContainer>
    </ContactForm>
   </ContactContainer>
  )
}

export default Contact;