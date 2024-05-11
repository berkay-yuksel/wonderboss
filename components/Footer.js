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
            <p>fsapiens@gmail.com</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>MARKET PLACES</h5>
            <p>https://magiceden.io/fomo-sapiens</p>
            <p>https://www.tensor.trade/trade/fomo-sapiens</p>
            <p>&nbsp;</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>OTHER LINKS</h5>

            <p>https://blog.fomosapiensnft.com</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>WHITELIST APPLICATION</h5>
            <p>https://www.subber.xyz/fomosapienscommunity</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>

      <div className={footer.bottom_container}>
        <div>FOMO SAPIENS 2023</div>
        <div className={footer.bottom_links_container}>
          <Link href="https://twitter.com/fomosapiensnft_">
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
