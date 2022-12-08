import gallery from '../styles/Gallery.module.css'
import Image from 'next/image';
import deneme from '../assets/deneme.jpg'

const Gallery = () => {
  return (
    <div className={gallery.container}>

<div>
<Image alt="leeerob" src={deneme} placeholder="blur" />
<h5>LEMKUS</h5>
<p>00-1</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>00-2</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>00-3</p>
</div>

<div>
<Image alt="leeerob" src={deneme}  placeholder="blur" />
<h5>LEMKUS</h5>
<p>00-4</p>
</div>


    </div>
  )
}

export default Gallery