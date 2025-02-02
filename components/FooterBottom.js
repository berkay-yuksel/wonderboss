import React from "react";
import footerBottom from "../styles/Footer.module.css";
import Link, { link } from "next/link";

const FooterBottom = ({
  justLeave,
  onMouseEnter,
  onMouseLeave,
  clickableEnter,
}) => {
  return (
    <div>
      {" "}
      <div className={footerBottom.bottom_container}>
        <div>WONDER BOSS 2025</div>
        <div className={footerBottom.bottom_links_container}>
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

export default FooterBottom;
