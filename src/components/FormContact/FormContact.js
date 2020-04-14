import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import './FormContact.scss';
import { useTranslation } from 'react-i18next';

const FormContact = () => {
  const { t } = useTranslation();

  const [isSentSuccesFull, setIsSentSuccesFull] = useState('')

  function sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {

      setIsSentSuccesFull(t('contact.success'))
      setTimeout(() => {
        setIsSentSuccesFull('')

      }, 2000);
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = data => {
    const templateId = 'template_VdWqVDBe';
    const { name, email, message } = data
    sendFeedback(templateId,
      {
        reply_to: "reply_to_value",
        from_name: name,
        email,
        message_html: message

      })
  }

  return (
    <div className="col-12 form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col-12 col-md-6 form-group">
            <label htmlFor="name">{t('contact.first_field')} *</label>
            <input
              className="form-control"
              name="name"
              ref={register({
                required: true,
                maxLength: 35
              })}
            />
          </div>
          <div className="col-12 col-md-6 form-group">
            <label htmlFor="email">{t('contact.second_field')}*</label>
            <input
              className="form-control"
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
          </div>
          <div className="col-12 form-group">
            <label htmlFor="message">{t('contact.fouth_field')} *</label>
            <textarea
              className="form-control"
              name="message" rows="3"
              ref={register({ required: true })}>
            </textarea>
          </div>
          <div className="col-12 errors">
            <span className="error">{errors.name && t('contact.error_name')} </span>
            <span className="error">{errors.email && t('contact.error_email')} </span>
            <span className="error">{errors.message && t('contact.error_message')} </span>
            <span className="success">{isSentSuccesFull && t('contact.success')} </span>
          </div>
          <div className="from-group">
            <button type="submit" className="btn btn-small">{t('contact.button_send')}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact
