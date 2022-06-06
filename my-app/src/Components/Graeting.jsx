import React from 'react'
import thankYou from '../images/illustration-thank-you.svg';
import "./Greating.css"

export const Graeting = (props) => {
  return (
    <div className='Container'>
        <div className='Greating-card'>
        <img className='Greating-img' src={thankYou} />
        <div className='Score--Container'>
          <p className='Score--p'>
            You selected {props.ratingValue} out of  5
          </p>
          </div>
          <div className='ThankYou--Container'>
              <h1>Thank You!</h1>
              <p className='Text--P'>
                  We appreciate you taking the time to give a rating.If you ever need more support.don't hesitate to get in touch!
              </p>

          </div>
        </div>
        
    </div>
  )
}
