import footer from "../styles/Footer.module.css";
import Link, { link } from "next/link";

const Footer = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={footer.container}>
      <h1>WONDER BOSS</h1>
      <div className={footer.inner_container}>
        <div>
          <h5>WE WANT YOU ON THE GANG</h5>
          <h5> C'MON! HOP IN AND SAY HI TO OTHER BOSSES</h5>

          <Link href="https://discord.com/invite/D6JbZjxMt4">
            <button onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              JOIN US
            </button>
          </Link>
        </div>

        <div className={footer.inner_text_container}>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>CONTACT</h5>
            <Link href="https://forms.gle/Eeg8ysCeaXCNBbXJ9">
              {" "}
              <p> Support Form</p>
            </Link>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>MARKET PLACES</h5>
            <Link href="https://www.magiceden.io/marketplace/wonder_boss">
              {" "}
              <p> magiceden.io/marketplace/wonder_boss (soon)</p>
            </Link>

            <Link href="https://www.tensor.trade/trade/wonder_boss">
              {" "}
              <p>tensor.trade/trade/wonder_boss (soon)</p>
            </Link>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>OTHER LINKS</h5>
            <Link href="https://blog.wonderboss.com/">
              {" "}
              <p>blog.wonderboss.com</p>
            </Link>
            {/* <Link href="https://aetherworks.xyz/">
              {" "}
              <p>aetherworks.xyz</p>
            </Link> */}
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>COLLABS AND GIVE AWAYS</h5>
            <Link href="https://www.alphabot.app/_/wonderbossnft">
              {" "}
              <p>https://www.alphabot.app/_/wonderbossnft</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
