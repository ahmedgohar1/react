/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'

import '../css/portfolio.css'

const imagesList = [
  require('../assets/cabin.png'),
  require('../assets/cake.png'),
  require('../assets/circus.png'),
  require('../assets/game.png'),
  require('../assets/safe.png'),
  require('../assets/submarine.png'),
];

export default function Portfolio() {

  useEffect(()=>{

    const closeBtns = document.getElementsByClassName('close-btn');
    for (let i = 0; i < closeBtns.length; i++) 
    {
      closeBtns[i].addEventListener('click',()=>{ 
        closeBtns[i].parentElement.parentElement.classList.remove('show');
        closeBtns[i].parentElement.parentElement.classList.add('hide');
      });
    }
    
    const overlays = document.getElementsByClassName('overlay');
    for (let i = 0; i < overlays.length; i++) 
    {
      overlays[i].addEventListener('click',()=>{ 
        
        overlays[i].parentElement.parentElement.querySelector('.img-modal').classList.remove('hide');
        overlays[i].parentElement.parentElement.querySelector('.img-modal').classList.add('show');
      });
    }


  },[])

  return <section id='Portfolio' className='container py-5 d-flex flex-column justify-content-center align-items-center'>
    <h2>portfolio</h2>
    <div id='iDiv'> <i className='fa fa-star'></i> </div>
    <div className="row mt-5">
      {
        imagesList.map((img, index) => <div key={index} className='col-lg-4 mb-2 p-4'>
          <div className='img-modal hide'>
            <div className='img-modal-body col-10 col-lg-6 p-2 p-lg-5 position-relative d-flex flex-column justify-content-center align-items-center'>
              <h2>{imagesList[index].replace('/static/media/','').split('.')[0]}</h2>
              <div id='iDiv'> <i className='fa fa-star'></i> </div>
              <img src={img} alt="image" />
              <p className='text-center fw-bold mt-4 mx-lg-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quas fuga similique officiis unde voluptatum. Perspiciatis quae fuga eligendi voluptate.</p>
              <i className='close-btn fa fa-close fa-2x'></i>
            </div>
          </div>
          <div className='img-card overflow-hidden position-relative'>
            <div className='overlay'>
              <i className='fa fa-plus text-white fa-6x'></i>
            </div>
            <img className='img-fluid' src={img} alt="image" />
          </div>
        </div>)
      }
    </div>
  </section>
}
