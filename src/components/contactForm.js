import React from 'react'
import './formGrid.css'

export default function contactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <div>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required />
      </div>
      <div>
        <label htmlFor="mail">E-mail:</label>
        <input type="email" id="mail" name="user_mail" required />
      </div>
      <div>
        <label htmlFor="msg">Message:</label>
        <textarea id="msg" name="user_message" required />
      </div>
      <div className="button">
        <button type="submit">Send your message</button>
      </div>
    </form>
  )
}
