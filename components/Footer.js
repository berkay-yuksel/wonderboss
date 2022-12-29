import footer from "../styles/Footer.module.css";
import Link, { link } from "next/link";

const Footer = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={footer.container}>
      <h1>FOMO SAPIENS</h1>
      <div className={footer.inner_container}>
        <div>
          <h5>WE WANT YOU ON THE SHIP</h5>
          <h5> C'MON! HOP IN AND SAY HI TO FOMOS</h5>
          <button onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            JOIN US
          </button>
        </div>

        <div className={footer.inner_text_container}>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>CONTACT</h5>
            <p>fomosapiens@gmail.com</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>MARKET PLACES</h5>
            <p>https://magiceden.io/fomo-sapiens-nft</p>
            <p>https://opensea.io/collection/fomo-sapiens-nft</p>
            <p>&nbsp;</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>LINKS</h5>
            <p>https://twitter.com/fomosapiens_</p>
            <p>https://docs.fomosapiens.com/</p>
            <p>https://www.nftinspect.xyz/fomosapiens</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>WHITELIST APPLICATION</h5>
            <p>https://docs.google.com/forms/u/0/</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>

      <div className={footer.bottom_container}>
        <div>FOMO SAPIENS 2023</div>
        <div className={footer.bottom_links_container}>
          <Link href="/">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              TWITTER{" "}
            </span>
          </Link>
          <Link href="/">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              DISCORD{" "}
            </span>
          </Link>
          <Link href="/">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              MAGIC EDEN{" "}
            </span>
          </Link>
          <Link href="/">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              BACK TO TOP{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
