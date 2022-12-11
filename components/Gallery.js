import gallery from '../styles/Gallery.module.css'
import Image from 'next/image';
import deneme from '../assets/deneme.jpg'

const Gallery = () => {
  return (
    <div className={gallery.container}>

<div>
<Image alt="leeerob" src={deneme} placeholder="blur" />
<h5>LEMKUS</h5>
<p>1-00</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>2-00</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>3-00</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>4-00</p>
</div>


    </div>
  )
}

export default Gallery