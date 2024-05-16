import Navbar from "../../components/Navbar";
import mintInfo from "../../styles/Mintinfo.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutProject = () => {
  return (
    <div className={mintInfo.bigger}>
      <div className={mintInfo.container}>
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>ABOUT FOMO SAPIENS</h1>
        <div className="team_container">
          <h5>CORE TEAM</h5>
          teammm
        </div>
        <div>
          <h5>What is Fomo Sapiens?</h5>
          <p>
            Fomo Sapiens is a unique PFP NFT collection comprising 7777 distinct
            pieces. At its core, the project is dedicated to fostering a vibrant
            community within the NFT realm, where members experience a sense of
            ownership and engagement across various pillars such as Fomos X
            Base, Fomos X Curated, Fomos X Gaming, and Fomos X Platform.{" "}
          </p>
          <br />
          <p>
            {" "}
            Grounded in a rich lore and narrative, the project's ethos is built
            upon storytelling. Events and utilities intricately tied to this
            narrative will unfold within the project's overarching story. NFT
            traits, deeply rooted in this lore, seamlessly integrate with the
            unfolding events and utilities. This interconnectedness not only
            enhances immersion but also drives our primary objective of creating
            a sense of belonging and a thriving community around our
            intellectual property(IP).
          </p>
          <br />
          <Image
            className="{mintInfo.banner}"
            src="/mintinfo.png"
            alt="Picture of the author"
            width="560"
            height="290"
            blurDataURL="/mintinfo.webp"
            placeholder="/mintinfo.webp"
          />
          <h5>Pillars of Fomo Sapiens:</h5>
          <p>
            Fomo Sapiens is a comprehensive NFT project that aims to stand out
            in the NFT space by incorporating various innovative concepts and
            features. The project is structured around four primary pillars:
          </p>
          <h5>1. Fomos X Base: </h5>{" "}
          <p>
            This pillar serves as the central hub of the Fomo Sapiens Ecosystem,
            overseeing all operational tasks and events while also directing the
            creation of the core NFT collection called Fomo Sapiens. Crafted by
            seasoned artists, Fomo Sapiens pieces feature minimalist,
            children-friendly, and culturally diverse cartoonish characters
            tailored for use as social media profile pictures. Owners of these
            designs are granted intellectual property rights.
          </p>
          <h5> 2. Fomos X Curated: </h5>
          <p>
            {" "}
            Under this pillar, Fomo Sapiens showcases NFTs created by its
            artists and offers collectors the opportunity to create exclusive
            art pieces. The platform also features Ambassador Artists who
            promote the their collection and facilitate collaborations between
            artists and the NFT community. Additionally, there is an Artist Sub
            DAO where artist members collaborate with Fomo Sapiens to curate
            special art collections and custom merch products which will be
            produced by the help of streetwear fashion brand OLL.
          </p>
          <h5> 3. Fomos X Gaming: </h5>
          <p>
            Fomo Sapiens introduces @theclashub , an award-winning multi-chain
            card game platform that hosts various NFT collections, including
            Fomo Sapiens NFTs. Players can engage in blockchain-based card games
            and participate in tournaments with exciting prize pools. The
            Clashub is set to transition to the mainnet and release its own
            token through an Initial DEX Offering (IDO), offering collectors a
            Play-to-Earn (P2E) opportunity.
          </p>
          <h5> 4. Fomos X Platform: </h5>
          <p>
            This pillar forms the foundation of Fomo Sapiens, encapsulating its
            platform and ecosystem, all geared towards delivering a seamless and
            user-friendly experience for collectors. By prioritizing community
            building within the NFT space, the project introduces a range of
            practical and enjoyable utilities, employing storytelling and
            gamification to engage users effectively. Through features such as
            Gamified Staking, Invitation App, Gift Boxes, Artists Page,
            Educational Content, and many more, the platform offers a dynamic
            and enriching environment for enthusiasts and collectors alike By
            combining art, storytelling, gaming, and community-building, Fomo
            Sapiens offers a unique and immersive experience for NFT collectors,
            setting itself apart as a groundbreaking project in the NFT space.
          </p>
          <Image
            className="{mintInfo.banner}"
            src="/mintinfo.png"
            alt="Picture of the author"
            width="560"
            height="290"
            blurDataURL="/mintinfo.webp"
            placeholder="/mintinfo.webp"
          />
          <h5>Utilities: </h5>
          <p>
            {" "}
            Fomo Sapiens offers a range of utilities to enhance the experience
            for collectors and community members.Some of the utilities provided
            by Fomo Sapiens include:
          </p>
          <ul>
            <li>IP Rights </li>
            <li> Clashub - Multi-Chain Blockchain Game</li>
            <li> Mint & Staking Rewards </li>
            <li> OLL LLC - Artists Curated Merch</li>
            <li> IRL Events</li>
            <li>
              {" "}
              Platform (Gamified Staking, Invitation App, Gift Boxes, Artists
              Page, Educational Content){" "}
            </li>
            <li> Future Releases & Airdrops</li>
            <li>Specified Community & DAOs </li>
          </ul>
          <p>
            These utilities aim to enrich the overall experience for collectors
            and community members within the Fomo Sapiens ecosystem, offering a
            blend of art, gaming, community engagement, and unique opportunities
            in the NFT space.
          </p>
          <h5> The Invitation App </h5>
          <p>
            This utility is designed to cultivate a community prior to the
            launch by distributing allow list spots in a fair, organic, and
            private manner. Through our user-friendly web app, individuals can
            effortlessly secure their spot by inviting three desired friends
            with just a few simple steps. For more information, feel free to
            <u>
              <Link href="/"> explore</Link>{" "}
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
