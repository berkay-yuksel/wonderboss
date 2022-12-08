import roadmap from '../styles/Roadmap.module.css'
import Image from 'next/image';
import roadmapImg from '../assets/roadmap.png'


const Roadmap = () => {
  return (
    <div className={roadmap.container}>
<Image alt="leeerob" src={roadmapImg} placeholder="blur" />

    </div>
  )
}

export default Roadmap