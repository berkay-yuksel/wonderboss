import about from "../styles/About.module.css";
import Link, { link } from "next/link";
const About = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={about.container}>
      <h2>ABOUT</h2>
      <div>
        <div className={about.text_container}>
          <div>
            <h5>ONLY THE ART HAVE THE POWER TO UNITE AND</h5>
            <h5>INSPIRE A COMMUNITY TOWARDS A COMMON GOAL</h5>
          </div>

          <div>
            <p>
              Wonder Boss is a story-telling PFP NFT collection on Solana with a
              core ethos of building a vibrant, rewarded community while
              supporting other collections across the ecosystem, powered by
              three pillars: an Events App where members attend online and IRL
              events, earn rewards, and leave their mark on a shared timeline,
              Bossphorus Magazine archiving NFT culture, introducing collections
              to broader audiences, and offering a physical collectible, and a
              long term vision of a Decentralised Emulated Computer
              experimenting with next-gen on-chain applications.{" "}
            </p>

            <Link href="/about-project">
              {" "}
              <button onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
