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
           LAUNCHPAD
          </span>
        </Link>
        <Link href="https://twitter.com/fomosapiensnft_">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            TWITTER
          </span>
        </Link>
        <Link href="https://discord.com/invite/D6JbZjxMt4">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            DISCORD
          </span>
        </Link>
        <Link href="https://blog.fomosapiensnft.com/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            BLOG
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
