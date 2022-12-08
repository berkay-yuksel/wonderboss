import footer from '../styles/Footer.module.css'
import Link, {link} from 'next/link'



const Footer = () => {
  return (
<div className={footer.container}>
  <h1>CASE STUDIES</h1>
<div className={footer.inner_container} >
<div >
<h5>WE WOULD LOVE TO HEAR FROM YOU</h5>
<h5> YOU. LETS WORK-- TOGETHER</h5>
<button>CONTACT US</button>
</div>

<div className={footer.inner_text_container}>
  <div>
    <h5>OPEN POSITIONS</h5>
    <p>HELLO@DASHDIGITAL.IO</p>
    <p>+27 72 611 3343</p>
  </div>
  <div>
    <h5>BUSINESS INQUIRES</h5>
    <p>JUNIOR-MID DIGITAL DESIGNER</p>
    <p>asdkadklalşsdklşas</p>
    <p>LONDON SE15 4BQ</p>
  </div>
  <div>
    <h5>LONDON</h5>
    <p>133A RYE LANE</p>
    <p>LONDON SE15 4BQ</p>
    <p>UK</p>
  </div>
  <div>
    <h5>CAPE TOWN</h5>
    <p>14 UPPER PEPPER STREET</p>
    <p>CBD, 8001</p>
    <p>CAPE TOWN</p>
  </div>

</div>

    </div>

  
    <div className={footer.bottom_container}>

<div>
  LOGO MOGO 2023
</div>
<div className={footer.bottom_links_container}>
<Link href="/">
DRIBBBLE
</Link>
<Link href="/">

INSTAGRAM
</Link>
<Link href="/">
LINKEDIN
</Link>
<Link href="/">
BACK TO TOP
</Link>

</div>

    </div>
</div>
  )
}

export default Footer