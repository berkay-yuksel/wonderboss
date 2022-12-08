import featured from '../styles/Featured.module.css'

import Image from 'next/image';
import brand from '../assets/brand.png'

const Featured = () => {
  return (
    <div className={featured.container}>
<h2>FEATURED CLIENTS</h2>
     <div className={featured.text_container}>

     <div>
     <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
        <p> Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.
        </p>
        <button>VIEW CASE STUDY</button>
      </div>


      <div>
      <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
        <p> Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.
        </p>
        <button>VIEW CASE STUDY</button>
      </div>


      <div>
      <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
        <p> Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.
        </p>
        <button>VIEW CASE STUDY</button>
      </div>


      <div>
      <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
        <p> Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.
        </p>
        <button>VIEW CASE STUDY</button>
      </div>


     </div>

  
    </div>
  )
}

export default Featured