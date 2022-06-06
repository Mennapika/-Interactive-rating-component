import React from 'react'
import "./Rating.css"
import star from '../images/icon-star.svg';

const Rating = (props) => {
const[value,SetValue]=React.useState(0);
  return (
    <div className='Container' >
    <div className='Card'>
    <div className='Star--Container'>
    <img src={star} />
    </div>
    <div className='Text--Container'>
        <h1>How did we do? </h1>
        <p className='Text--P'>Please let us know how we did with your support reqeust.All feedback is approciated to help us improve our offering!</p>
    </div>
    <div className='Button-container'>
     <button className='Ratting--Button' onClick={()=>SetValue(1)}>1</button>
     <button  className='Ratting--Button'onClick={()=>SetValue(2)}>2</button>
     <button  className='Ratting--Button' onClick={()=>SetValue(3)}>3</button>
     <button  className='Ratting--Button' onClick={()=>SetValue(4)}>4</button>
     <button  className='Ratting--Button ' onClick={()=>SetValue(5)}>5</button>
    </div>
    <button className='Sumbit--Button'onClick={()=>props.handleSumbited(value)}>Submit</button>
    </div>
    </div>
  )
}

export default Rating