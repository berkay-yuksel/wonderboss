import Navbar from "../../components/Navbar";
import mintInfo from "../../styles/Mintinfo.module.css";
import aboutProject from "../../styles/Aboutproject.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutProject = () => {
  return (
    <div>
      <div className={aboutProject.back}>
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>LEARN MORE</h1>
        <div className="team_container">
          <h2>CORE TEAM</h2>
          <div className={aboutProject.team_container}>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/lunaris.webp"
                alt="Picture of the author"
                width="300"
                height="300"
                blurDataURL="/lunaris.webp"
                placeholder="/lunaris.webp"
              />
              <span>
                {" "}
                <Link href="https://twitter.com/lunarisdev">
                  <h3>lunarisdev</h3>
                  <h5>co-founder & project manager</h5>
                </Link>
              </span>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/nac.png"
                alt="Picture of the author"
                width="300"
                height="300"
                blurDataURL="/mintinfo.webp"
                placeholder="/mintinfo.webp"
              />
              <Link href="https://twitter.com/ilkay_eth">
                <h3>nac</h3>
                <h5>co-founder & community manager</h5>
              </Link>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/tmac.jpg"
                alt="Picture of the author"
                width="300"
                height="300"
                blurDataURL="/mintinfo.webp"
                placeholder="/mintinfo.webp"
              />
              <Link href="https://twitter.com/Tmac_SOL">
                <h3>tmac</h3>
                <h5>artist</h5>
              </Link>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/serhan.png"
                alt="Picture of the author"
                width="300"
                height="300"
                blurDataURL="/mintinfo.webp"
                placeholder="/mintinfo.webp"
              />
              <Link href="https://twitter.com/anonimlesmek">
                <h3>anonimlesmek</h3>
                <h5>technical lead</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className={aboutProject.text_container}>
          <h2>What is Wonder Boss?</h2>
          <p></p>
          <br />
          <p></p>
          <br />
          <div className={aboutProject.first_image_container}>
            {/* <Image
              src="/story2.webp"
              alt="Picture of the author"
              width="800"
              height="450"
              blurDataURL="/mintinfo.webp"
              placeholder="/mintinfo.webp"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
