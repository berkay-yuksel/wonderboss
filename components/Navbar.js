import Link, {link} from 'next/link'
import navbar from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={navbar.container}>
<h1>FOMO SAPIENS</h1>
<div className={navbar.nav}>
<Link href="/">
  CASE STUDIES
</Link>
<Link href="/">
WORK
</Link>
<Link href="/">
ABOUT
</Link>
<Link href="/">
CONTACT
</Link>
</div>

    </div>
  )
}

export default Navbar