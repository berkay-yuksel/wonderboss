"use client";
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

import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react'

const Home = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  

  return (
    <motion.div >
<Navbar  />
<Hero />
<Gallery />
<About />
<motion.div 
ref={ref}
style={{ scaleX: scrollYProgress }} 
><Roadmap  /></motion.div>
<Featured />
<Faq />
<Story />
<Footer />
    </motion.div>
  )
}

export default Home