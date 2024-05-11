import mintInfo from "../../styles/Mintinfo.module.css";
import Image from "next/image";

import Link from "next/link";

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
              <li> PRE-SALE STARTING IN MAY 22, 2024 20 PM EST</li>
              <li> YOU CAN MINT UP TO 5 PER WALLET IN PRE-SALE</li>
              <li> PUBLIC MINT STARTING IN MAY 22, 2024 20 PM EST</li>
              <li> YOU CAN MINT UP TO 10 PER WALLET IN PRE-SALE</li>
            </ul>
          </div>
          <div>
            <div>
              <h5>HOW TO GET AN ALLOW LIST SPOT?</h5>
              <p>
                You can engage with official tweets,send fan content via twitter
                #fomosapiens , join wl raffles in discord & twitter and apply
                from magic eden.
              </p>
            </div>
            <div>
              <span>
                <button>GO TO DISCORD</button>
              </span>
              <span>
                <button>GO TO LAUNCHPAD</button>
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
        placeholder="blur"
      />
    </div>
  );
};

export default MintInfo;
