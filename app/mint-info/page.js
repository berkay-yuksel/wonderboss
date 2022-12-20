
import mintInfo from "../../styles/Mintinfo.module.css";
import Image from "next/image";
import bannerPic from "../../assets/roadmap.png";
import Link from "next/link";

const MintInfo = () => {
  return (
    <div>
      <div className={mintInfo.container}>
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>MINT INFORMATION</h1>
        <Image
          className={mintInfo.banner}
          src={bannerPic}
          alt="Picture of the author"
          width="100vw"
          // blurDataURL="data:..." automatically provided
          placeholder="blur"
        />
        <h4>LEMKUS IS AN URBAN BOUTIQUE SPECIALISING IN PREMIU</h4>
        <div className={mintInfo.text_container}>
          <div>
            <h5>MINT DETAILS</h5>
            <ul>
              <li> 5 SOL</li>
              <li> 5555 PIECE</li>
              <li> WL MINT STARTING IN JAN 12, 2023 20:00 PM EST</li>
              <li> YOU CAN MINT UP TO 3 PER WALLET IN WL SALE</li>
              <li> PUBLIC MINT STARTING IN JAN 13, 2023 20:00 PM EST</li>
              <li> YOU CAN MINT WITHOUT LIMITS IN PUBLIC SALE</li>
            </ul>
          </div>
          <div>
            <div>
              <h5>HOW TO GET A WL?</h5>
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
    </div>
  );
};

export default MintInfo;
