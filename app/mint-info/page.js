import mintInfo from "../../styles/Mintinfo.module.css";
import Image from "next/image";
import Link from "next/link";
import FooterBottom from "../../components/FooterBottom";

const MintInfo = () => {
  return (
    <div className={mintInfo.bigger}>
      <div className={mintInfo.container}>
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>MINT INFORMATION</h1>

        <div className={mintInfo.text_container}>
          <div>
            <h5>MINT DETAILS</h5>
            <ul>
              <li> 0,55 SOL</li>
              <li> 5555 PIECE</li>
              <li> PRE-SALE STARTING IN MAY 26th, 2026 -- EST</li>
              {/* <li> YOU CAN MINT UP TO 5 PER WALLET IN PRE-SALE</li> */}
              <li> PUBLIC MINT STARTING IN MAY 27th, 2026 -- EST</li>
              {/* <li> YOU CAN MINT UP TO 10 PER WALLET IN PRE-SALE</li> */}
            </ul>
          </div>
          <div>
            <div>
              <h5>HOW TO CHECK ELIGIBILITY FOR PRE-SALE?</h5>
              <p>
                <Link href="/wallet-check">
                  {" "}
                  <span>Click me to check your wallet!</span>
                </Link>
              </p>
            </div>
            <div>
              <span>
                <span>
                  <Link href="https://launchmynft.io/mint/wonderboss">
                    {" "}
                    <span>MINT PAGE </span>
                  </Link>
                </span>
                <Link href="https://discord.com/invite/GmZzzC72as">
                  {" "}
                  <span>DISCORD </span>
                </Link>
              </span>

              <span>
                <Link href="https://twitter.com/wonderbossnft">
                  {" "}
                  <span>𝕏 ACCOUNT</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={mintInfo.banner}
        src="/family.png"
        alt="family pic"
        width="2816"
        height="1454"
        blurDataURL="/family.png"
        placeholder="/family.png"
      />
      <FooterBottom />
    </div>
  );
};

export default MintInfo;
