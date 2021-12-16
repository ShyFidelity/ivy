import React, { useState } from 'react';
import Nails1 from '../images/nails1.png'
import Nails2 from '../images/nails2.png'



function NailsCarousel() {



    const [nailPics, setNailPics] = useState([Nails1, Nails2])



    return (

        <div>
         <ul>
             {nailPics.map(pic => (
                 <li key={pic}> <img src={pic} alt="ivy nails" />  </li>
             ))}
             <li>{nailPics[1]}</li>
         </ul>
        </div>
    )
    
}

export default NailsCarousel