import '../styles/globals.css';

import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import Gallery from '../components/Gallery.js'
import About from '../components/About.js'
import Roadmap from '../components/Roadmap.js'
import Featured from '../components/Featured.js'
import Faq from '../components/Faq.js'
import Story from '../components/Story.js'
import Footer from '../components/Footer.js'

const Home = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<Gallery/>
<About/>
<Roadmap/>
<Featured/>
<Faq/>
<Story/>
<Footer/>
    </div>
  )
}

export default Home