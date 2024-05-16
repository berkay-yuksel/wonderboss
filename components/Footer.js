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

          <Link href="https://discord.com/invite/D6JbZjxMt4">
            <button onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              JOIN US
            </button>
          </Link>
        </div>

        <div className={footer.inner_text_container}>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>CONTACT</h5>
            <p>fsapiens@gmail.com</p>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>MARKET PLACES</h5>
            <Link href="magiceden.io/marketplace/fomo_sapiens">
              {" "}
              <p> magiceden.io/marketplace/fomo_sapiens</p>
            </Link>

            <Link href="https://www.tensor.trade/trade/fomo_sapiens">
              {" "}
              <p>https://www.tensor.trade/trade/fomo_sapiens</p>
            </Link>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>OTHER LINKS</h5>
            <Link href="https://discord.com/invite/D6JbZjxMt4">
              {" "}
              <p>blog.fomosapiensnft.com</p>
            </Link>
            <Link href="https://discord.com/invite/D6JbZjxMt4">
              {" "}
              <p>invitation.fomosapiensnft.com</p>
            </Link>
          </div>
          <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            <h5>WHITELIST APPLICATION</h5>
            <Link href="https://discord.com/invite/D6JbZjxMt4">
              {" "}
              <p>subber.xyz/fomosapienscommunity</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={footer.bottom_container}>
        <div>FOMO SAPIENS 2024</div>
        <div className={footer.bottom_links_container}>
          <Link href="https://twitter.com/fomosapiensnft_">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              TWITTER{" "}
            </span>
          </Link>
          <Link href="https://discord.com/invite/D6JbZjxMt4">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              DISCORD{" "}
            </span>
          </Link>
          <Link href="/">
            {" "}
            <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              LAUNCHPAD{" "}
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
