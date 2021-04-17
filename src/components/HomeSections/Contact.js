import React from 'react'

import { ContactForm } from '../ContactForm'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        If you need to reach out to me for any questions, or just for a chat,
        feel free to contact me.
      </p>
      <ContactForm />
    </section>
  )
}

export { Contact }
