import React from 'react'
import './Form.css'

function ContactForm() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <div className="contact-form__section">
        <input type="hidden" name="form-name" value="contact" />
        <label className="contact-form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="name"
          name="user_name"
          required
          placeholder="Name"
        />
      </div>
      <div className="contact-form__section">
        <label className="contact-form__label" htmlFor="mail">
          E-mail:
        </label>
        <input
          className="contact-form__input"
          type="email"
          id="mail"
          name="user_mail"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="contact-form__section">
        <label className="contact-form__label" htmlFor="msg">
          Message:
        </label>
        <textarea
          className="contact-form__input"
          id="msg"
          name="user_message"
          required
          placeholder="What's on your mind"
        />
      </div>
      <div className="button">
        <button className="contact-form__submit-button" type="submit">
          Send your message
        </button>
      </div>
    </form>
  )
}

export { ContactForm }
