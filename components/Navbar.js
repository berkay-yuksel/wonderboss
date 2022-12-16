import Link from "next/link";
import navbar from "../styles/Navbar.module.css";

const Navbar = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={navbar.container}>
      <h1 onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        FOMO SAPIENS
      </h1>
      <div className={navbar.nav}>
        <Link href="/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            MAGIC EDEN
          </span>
        </Link>
        <Link href="/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            TWITTER
          </span>
        </Link>
        <Link href="/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            DİSCORD
          </span>
        </Link>
        <Link href="/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            MINT PAGE
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
