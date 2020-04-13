import React from 'react'
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import './FormContact.scss';

const FormContact = () => {

  function sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const templateId = 'template_VdWqVDBe';
    console.log(data)
    const { name, company, email, phone, type, message } = data
    sendFeedback(templateId,
      {
        reply_to: "reply_to_value",
        from_name: name,
        company_name: company,
        email,
        message_html: message

      })
  }

  return (
    <div>
      jhello
    </div>
  )
}

export default FormContact
