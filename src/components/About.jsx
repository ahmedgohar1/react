import React from 'react'
import '../css/about.css'

export default function About() {
  return <section id='About'>
    <section className='container px-5 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='text-white'>About</h2>
      <div id='iDiv'> <i className='fa fa-star text-white'></i> </div>
      <div className="row mt-5">
        <div className='col-lg-6 mb-4'>
          <p className='text-white px-3 ml-lg-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='col-lg-6 mb-4'>
          <p className='text-white px-3 mr-lg-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
    </section>
  </section>
}
