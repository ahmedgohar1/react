import React from 'react'
import '../css/contact.css'

export default function Contact() {
  return <section id='Contact' className='container py-5 d-flex flex-column justify-content-center align-items-center'>
    <h2>Contact Us</h2>
    <div id='iDiv'> <i className='fa fa-star'></i> </div>
    <div className="col-11 d-flex flex-column justify-content-center align-items-stretch my-5">
      <input type="text" placeholder='Name'  />
      <input type="email" placeholder='Email'  />
      <input type="number" placeholder='Phone Number'  />
      <textarea cols="30" rows="5" placeholder='Message' ></textarea>
      <button>Send</button>
    </div>
  </section>
}
