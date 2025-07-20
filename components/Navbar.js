import Link from "next/link";
import navbar from "../styles/Navbar.module.css";

const Navbar = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={navbar.container}>
      <h1 onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        WONDER BOSS
      </h1>
      <div className={navbar.nav}>
        <Link href="/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            LAUNCHPAD
          </span>
        </Link>
        <Link href="https://twitter.com/wonderbossnft">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            TWITTER / X
          </span>
        </Link>
        <Link href="https://discord.com/invite/GmZzzC72as">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            DISCORD
          </span>
        </Link>
        <Link href="https://blog.wonderboss.com/">
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            BLOG
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
