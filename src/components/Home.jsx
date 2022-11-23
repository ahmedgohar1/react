import React from 'react'

import '../css/home.css'
import logo from '../assets/avataaars.svg'

export default function Home() {
    return <section id='Home'>
        <div className='px-2 px-lg-5'>
            <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                    <img src={logo} className='img-fluid' alt="LOGO" />
                </div>
                <h1 className='mb-4'>START REACT</h1>
                <div id='iDiv'><i className='fa fa-star fa-3x text-white mb-4'></i></div>
                <h3>Graphic Artist - Web Designer - Illustrator</h3>
            </div>
        </div>

    </section>

}
