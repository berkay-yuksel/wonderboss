import featured from "../styles/Featured.module.css";
import Image from "next/image";
import deneme from "../assets/deneme.jpg";
import Link from "next/link";

const Featured = ({
  justLeave,
  textEnter,
  onMouseEnter,
  onMouseLeave,
  lockedEnter,
}) => {
  return (
    <div className={featured.container}>
      <div onMouseEnter={textEnter} onMouseLeave={justLeave}>
        <Link href="/mint-info">
          <Image alt="leeerob" src={deneme} placeholder="blur" />
          <h5>Mint Information</h5>
        </Link>
        <p>1-00</p>
      </div>

      <div  onMouseEnter={lockedEnter} onMouseLeave={justLeave}>
        <Link href="/staking">
          <Image alt="leeerob" src={deneme} placeholder="blur" />
          <h5>Staking</h5>
        </Link>
        <p>2-00</p>
      </div>

      <div>
        <Link href="/merch">
          <Image alt="leeerob" src={deneme} placeholder="blur" />
          <h5>Merch</h5>
        </Link>
        <p>3-00</p>
      </div>

      <div>
        <Link href="/gallery">
          <Image alt="leeerob" src={deneme} placeholder="blur" />
          <h5>Gallery</h5>
        </Link>
        <p>4-00</p>
      </div>
    </div>
  );
};

export default Featured;
