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
              <li> 1 SOL</li>
              <li> 5555 PIECE</li>
              <li> PRE-SALE STARTING IN JUNE 19, 2024 20 PM EST</li>
              <li> YOU CAN MINT UP TO 5 PER WALLET IN PRE-SALE</li>
              <li> PUBLIC MINT STARTING IN JUNE 19, 2024 20 PM EST</li>
              <li> YOU CAN MINT UP TO 10 PER WALLET IN PRE-SALE</li>
            </ul>
          </div>
          <div>
            <div>
              <h5>HOW TO GET AN ALLOW LIST SPOT?</h5>
              <p>
                Keep an eye on collaborations (mostly on subber.xyz); use the
                invitation app or join our giveaways both on Discord and our X
                account!
              </p>
            </div>
            <div>
              <span>
                <Link href="https://discord.com/invite/D6JbZjxMt4">
                  {" "}
                  <span>DISCORD </span>
                </Link>
              </span>
              <span>
                <Link href="https://www.subber.xyz/fomosapienscommunity/allowlist/fomo-sapiens">
                  {" "}
                  <span>SUBBER </span>
                </Link>
              </span>
              <span>
                <Link href="https://blog.fomosapiensnft.com/posts/fomos-invitation">
                  {" "}
                  <span>INVITATION APP </span>
                </Link>
              </span>
              <span>
                <Link href="https://twitter.com/fomosapiensnft_">
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
        src="/mintinfo.png"
        alt="Picture of the author"
        width="2816"
        height="1454"
        blurDataURL="/mintinfo.webp"
        placeholder="/mintinfo.webp"
      />
      <FooterBottom />
    </div>
  );
};

export default MintInfo;
