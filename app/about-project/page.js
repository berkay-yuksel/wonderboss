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
                src="/lunaris.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
                blurDataURL="/lunaris.webp"
                placeholder="blur"
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
                width="1500"
                height="1500"
                blurDataURL="/mintinfo.webp"
                placeholder="blur"
              />
              <Link href="https://twitter.com/ilkay_eth">
                <h3>nac</h3>
                <h5>co-founder & community manager</h5>
              </Link>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/tmac.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
                blurDataURL="/mintinfo.webp"
                placeholder="blur"
              />
              <Link href="https://twitter.com/Tmac_SOL">
                <h3>tmac</h3>
                <h5>artist</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className={aboutProject.text_container}>
          {/* <h2>What is Wonder Boss?</h2>
          <p>
            Wonder Boss is a revolutionary story-driven PFP NFT collection built
            on the Solana blockchain, designed to cultivate a thriving,
            well-rewarded community. More than just digital collectibles, Wonder
            Boss is an ecosystem that fuses art, technology, and
            innovation—empowering its holders with real-world utilities,
            exclusive software, and access to groundbreaking decentralized
            computing solutions. At the heart of the project is the
            Decentralized Emulated Computer (DEC), a cutting-edge web-based
            emulation platform set to launch on the Monad chain. This technology
            will provide users with a Turing-complete, fully decentralized
            computing environment, opening up endless possibilities in Web3.
            Beyond technology, Wonder Boss extends its reach into streetwear
            fashion, gamified staking, and immersive IRL and online events,
            ensuring that the community remains engaged, rewarded, and
            constantly growing.
          </p> */}
          <br />
          <h2>Mission</h2>
          <p>
            Our mission is to build a lasting intellectual property anchored by
            an active, well-rewarded community. Through cultural initiatives, we
            highlight the true value of digital ownership and honor the
            collections, founders, and collectors who bring this culture to
            life. In parallel, we develop applications that turn our ecosystem
            into a space of shared memories, driving steady innovation for the
            experiences of tomorrow.
          </p>
          <br />
          {/* <h2>Vision</h2>
          <p>
            Wonder Boss envisions a future where blockchain technology enhances
            every aspect of digital and real life, from entertainment and gaming
            to decentralized computing and commerce. We strive to become a
            leading force in NFT-driven storytelling, community engagement, and
            Web3 innovation, creating a sustainable and rewarding ecosystem for
            all participants.
          </p> */}
          <div className={aboutProject.first_image_container}>
            {/* <Image
              src="/story2.webp"
              alt="Picture of the author"
              width="800"
              height="450"
              blurDataURL="/mintinfo.webp"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
