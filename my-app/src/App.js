import Rating from './Components/Rating';
import React from 'react';
import { Graeting } from './Components/Graeting';


function App() {
  const [sumbitted,SetSubmitted]=React.useState(false)
  const [ratingValue,SetRatingValue]=React.useState(0)
  function handleSumbited(rate){
    SetSubmitted(true);
    SetRatingValue(rate);
  }
  return (
    <div className="App">
      {
        sumbitted?<Graeting ratingValue={ratingValue}/>:<Rating handleSumbited={handleSumbited}/>
      }
    </div>
  );
}

export default App;
