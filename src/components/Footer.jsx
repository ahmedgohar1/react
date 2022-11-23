import React from 'react'

import '../css/footer.css';


export default function Footer() {
    return <section id='footer'>
        <div className='container px-sm-5 mb-5'>
            <div className='row'>

                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>AROUND THE WEB</h2>
                        <div className='d-flex justify-content-center'>
                            <div className='icons mx-2'> <i className='fa-brands fa-facebook-f'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-twitter'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-linkedin'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-dribbble'></i> </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='p-4 text-center footer2'>
            <p className='text-white m-2'>Copyright © Your Website 2021</p>
        </div>
    </section>


}
