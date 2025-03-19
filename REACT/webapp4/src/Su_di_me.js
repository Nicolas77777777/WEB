import React from 'react'

const Su_di_me = () => {
  return (
    <div className="bg-home d-flex flex-column justify-content-center align-items-center text-white" style={{
      backgroundImage: "url('/img/lupo2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
    
      <div className="position-absolute top-0 w-100 d-flex justify-content-center p-3">
  
      </div>

      <div className="text-center px4"> 
        <p>
          Tecnicamente, la devanāgarī è un alfasillabario: sebbene possano anche apparire separate, 
          consonanti e vocali vengono di regola congiunte in legature grafiche di cui l'unità fondamentale
          non è il singola fonema, bensì la sillaba akṣara.
          Questa è sempre intesa come accumulo di una o più consonanti terminante
          in una vocale o in un dittongo.
          Al contrario dell'alfabeto latino, in cui consonanti e vocali seguono 
          una successione casuale, l'alfasillabario devanāgarī dispone le lettere
          secondo precisi criteri fonologici. Inizia con le vocali, seguono 
          i dittonghi, quindi le consonanti. Ogni gruppo è a sua volta ordinato 
          in cinque «posizioni» , secondo la successione del punto di articolazione, dalla gola alle labbra:
        </p>
      </div>
    </div>
  )
}

export default Su_di_me