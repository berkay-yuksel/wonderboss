import about from "../styles/About.module.css";
import Link, { link } from "next/link";
const About = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={about.container}>
      <h2>ABOUT</h2>
      <div>
        <div className={about.text_container}>
          <div>
            <h5>ONLY ART HAVE THE POWER TO UNITE AND</h5>
            <h5>INSPIRE A COMMUNITY TOWARDS A COMMON GOAL</h5>
          </div>

          <div>
            <p>
              Fomo Sapiens is a unique story-telling PFP NFT collection
              comprising a large number of distinct pieces. The collection's
              primary goal is to form a well-rewarded, vibrant community on the
              beloved Solana chain via the Pillars (Base, Art, Platform,
              Gaming), each of which has its own sub-community, events,
              software, and professional partnerships.
            </p>
            {/* <p>
              A NFT collection featuring the stories of the Fomo Sapiens, a
              group of pioneering individuals chosen to establish a new
              decentral space civilization starting on Pluto. Led by the
              groundbreaking work of scientists in the field of synthetic
              evolution, these Fomo Sapiens have evolved human cells to
              withstand the harsh conditions. Own a piece of this exciting new
              chapter in human history and join the Fomo Sapien community as
              they pave the way for a new era of space colonization.
            </p> */}

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
