import LoreStyles from "../../styles/Lore.module.css";

import Image from "next/image";
import Link from "next/link";
import FooterBottom from "../../components/FooterBottom";
const Lore = () => {
  return (
    <div className={LoreStyles.topContainer}>
      <div>
        <br />
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>STORY & LORE OF FOMO SAPIENS</h1>
        <div>
          <p>
            Until now, extraterrestrial ventures have primarily served as
            sources of income for the wealthy and governments, focusing on
            mining and tourism. The concept of a sustainable and realistic
            "space civilization" has not been seriously considered due to
            political reasons and the limitations of the human body. However,
            science has progressed independently and has now enabled us to
            overcome our most challenging problem. Scientists have successfully
            evolved human cells to adapt to space conditions, achieving a
            breakthrough in evolution through scientific means rather than
            natural selection. This discovery sparked significant FOMO (fear of
            missing out) among humanity, leading to a surge in efforts related
            to extraterrestrial life. The pioneer of synthetic evolution,
            scientists, established a decentralized company and called for all
            related research to be gathered under its umbrella. This company
            aims to establish a new space civilization, and the people chosen to
            build this civilization outside Earth are called "FOMO SAPIENS."
          </p>
          <div className={LoreStyles.whyPluto}>
            <h2>Why Pluto?</h2>
            <p>
              Pluto is the farthest planet from the sun, making it a logical
              base for reaching planets outside the solar system. Additionally,
              it features a heart-shaped plain on its surface.
            </p>
            <Image
              className="{mintInfo.banner}"
              src="/lore1.gif"
              alt="Picture of the author"
              width="300"
              height="300"
              blurDataURL=""
              placeholder=""
            />
          </div>
          <div className={LoreStyles.howWillTheyGo}>
            <h2>How will they go?</h2>
            <p>
              A shuttle will be launched when Pluto is close enough to Earth,
              utilizing the gravitational forces of the planets along the way to
              aid in its journey. A crew will operate the shuttle for safety,
              while thousands of passengers will sleep in pods. During this
              time, the passengers will live in a virtual world via a "full dive
              VR set." The crew can communicate with the passengers using the VR
              set, and passengers can control humanoid robots to interact with
              the physical world. Until they reach Pluto, passengers will
              continue working and perhaps laying the foundations of the new
              civilization in the virtual world. The spacecraft will also carry
              multipurpose robots, drones, tools, equipment, materials, and
              genetically modified seeds.
            </p>
            <Image
              className="{mintInfo.banner}"
              src="/lore6.webp"
              alt="Picture of the author"
              width="1920"
              height="1080"
              blurDataURL=""
              placeholder=""
            />
          </div>
          <div className={LoreStyles.biotechElements}>
            <h3>Biotech and Synthetic Evolution Elements</h3>
            <p>
              <b>Cell Evolver:</b>This technology evolves human cells to
              withstand extreme temperatures, pressure, acidity levels, and
              radiation, allowing cells to use various gases for energy instead
              of oxygen. The energy generated also meets human energy needs and
              charges biotech items. Evolved cells change color, with the skin
              turning turquoise, becoming the most distinctive feature.
              Evolution cures cellular diseases like cancer and greatly prevents
              new diseases.
            </p>
            <p>
              <b>SB (Smart Blood): </b>Facilitates blood circulation in space by
              following commands from SBC. It can carry any gas, and its speed,
              density, and contents are adjustable by SBC.
            </p>
            <p>
              <b>SVP (Smart Vascular Pads):</b>Works with SMP to facilitate SB
              circulation and actively monitors blood-related health conditions,
              reporting to SBC.
            </p>
            <p>
              <b>SMP (Smart Muscular Pads): </b>Works with SVP to facilitate SB
              circulation. In zero gravity, it simulates realistic muscle
              movements to prevent muscle loss, even working muscles without
              waking the users during sleep. It also enhances realistic movement
              experiences in VR and RB.
            </p>
            <p>
              <b>SBC (Second Brain Chip): </b>Controls other biotech products,
              communicates with humans and computers, and stores information.
            </p>
            <p>
              <b>RB (Robot Body):</b>Robot bodies controlled by human brains,
              surpassing humans in size and strength, and enhanced with
              additional technologies for various purposes.
            </p>
            <p>
              <b>Full Dive VR Set:</b>Allows people to use their bodily signals
              in a virtual world.
            </p>
            <Image
              className="{mintInfo.banner}"
              src="/lore.jpg"
              alt="Picture of the author"
              width="1500"
              height="1500"
              blurDataURL=""
              placeholder=""
            />
          </div>
          {/* 
          <div className={LoreStyles.newCivPerks}>
            <h5>NEW CIV PERKS</h5>
            <p>
              Meals will consist of lab-grown meat and genetically modified
              fruits and vegetables with added multivitamins/minerals. Since
              these foods have no fiber, there will be no need for excretion
              (they will get used to this while still on Earth).
              <br />
              It has been detected that the sex cells produced after using the
              evolver shit carry the new DNA codes. Therefore, the process is
              considered more of a mutation than a modification, and it is
              genetically passed on, meaning children born will also be suited
              for living in space.
              <br />
              The foundations of buildings will use devices that apply
              centrifugal force downward to increase or decrease weight. This
              will cause buildings to float before an earthquake and stick to
              the ground otherwise.
              <br />
              With a software uploaded to the SBC, individuals can train their
              "personal artificial intelligences" that directly pull information
              from their brains. These AIs can be used in different ways with
              consent after individuals die and might sometimes cause trouble.
              <br />
              Deceased individuals will be sent to the core of the center in a
              ceremony.
              <br />
              The access of general AIs used will be limited and primarily used
              for automation.
            </p>

                 <Image
            className="{mintInfo.banner}"
            src="/lore3.webp"
            alt="Picture of the author"
            width="860"
            height="540"
            blurDataURL=""
            placeholder=""
          />
          </div> */}

          <div className={LoreStyles.classTypesContainer}>
            <h1>CLASS TYPES</h1>

            <div className={LoreStyles.classContainer}>
              <div>
                <Image
                  className="{mintInfo.banner}"
                  src="/lore8.webp"
                  alt="Picture of the author"
                  width="500"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <div>
                  <h3>Warriors</h3>
                  <p>
                    The Warriors are a skilled and fearless faction of the
                    Lowell Foundation. Their mission is to explore other planets
                    and defend the new decentralized space civilization, using
                    advanced technology and combat training.{" "}
                  </p>
                </div>
              </div>

              <span>
                <Image
                  className="{mintInfo.banner}"
                  src="/03.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <Image
                  className="{mintInfo.banner}"
                  src="/08.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
              </span>
            </div>

            <div className={LoreStyles.classContainer}>
              <div>
                <Image
                  className="{mintInfo.banner}"
                  src="/lore10.webp"
                  alt="Picture of the author"
                  width="500"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <div>
                  <h3>Scientists</h3>
                  <p>
                    The Scientists of the Lowell Foundation cover diverse fields
                    such as physics, chemistry, biology, astronomy, geology, and
                    environmental science. They will prioritize providing
                    advanced technology for the civilizations’ needs without
                    political constraints.{" "}
                  </p>
                </div>
              </div>

              <span>
                <Image
                  className="{mintInfo.banner}"
                  src="/07.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <Image
                  className="{mintInfo.banner}"
                  src="/02.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
              </span>
            </div>

            <div className={LoreStyles.classContainer}>
              <div>
                <Image
                  className="{mintInfo.banner}"
                  src="/lore7.webp"
                  alt="Picture of the author"
                  width="500"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <div>
                  <h3>Philosophers</h3>
                  <p>
                    The Philosophers of the Lowell Foundation are a group of
                    deep thinkers who are dedicated to engaging with
                    philosophical questions. Their main mission is to cultivate
                    wisdom and promote critical thinking in future generations
                    by taking on the responsibility of education.
                  </p>
                </div>
              </div>
              <span>
                <Image
                  className="{mintInfo.banner}"
                  src="/01.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <Image
                  className="{mintInfo.banner}"
                  src="/06.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
              </span>
            </div>

            <div className={LoreStyles.classContainer}>
              <div>
                <Image
                  className="{mintInfo.banner}"
                  src="/lore11.webp"
                  alt="Picture of the author"
                  width="500"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <div>
                  <h3>Artists</h3>
                  <p>
                    The Artists of Lowell Foundation are a group of creative
                    individuals dedicated to exploring the limitless potential
                    of artistic expression. From painting to sculpture, music to
                    literature, they embrace all forms of art and use their
                    talents to inspire and enrich the community
                  </p>
                </div>
              </div>

              <span>
                <Image
                  className="{mintInfo.banner}"
                  src="/04.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <Image
                  className="{mintInfo.banner}"
                  src="/09.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
              </span>
            </div>

            <div className={LoreStyles.classContainer}>
              <div>
                <Image
                  className="{mintInfo.banner}"
                  src="/lore9.webp"
                  alt="Picture of the author"
                  width="500"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <div>
                  <h3>Diplomats</h3>
                  <p>
                    The Diplomats of the Lowell Foundation are responsible for
                    handling crises, running the foundation, planning space
                    explorations, managing resources, and establishing contact
                    with other civilizations. Their work requires close
                    coordination with the other factions.
                  </p>
                </div>
              </div>
              <span>
                <Image
                  className="{mintInfo.banner}"
                  src="/10.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
                <Image
                  className="{mintInfo.banner}"
                  src="/05.png"
                  alt="Picture of the author"
                  width="300"
                  height="300"
                  blurDataURL=""
                  placeholder=""
                />
              </span>
            </div>
          </div>

          <div className={LoreStyles.chaptersContainer}>
            <h1>Chapters</h1>
            <span className={LoreStyles.chapterInfo}>
              <h2>Chapter 1: Selection and Training</h2>

              <p>
                The first mission of our story involves selecting and training a
                group of individuals who are genetically compatible with space
                travel. This group will be hand-picked for their unique skills
                and expertise and will undergo rigorous training to prepare them
                for the challenges of establishing a new civilization on Pluto.
              </p>
            </span>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/story1.webp"
                alt="Picture of the author"
                width="860"
                height="540"
                blurDataURL=""
                placeholder=""
              />
              <h3>Part 1: Dr. Thiccfloyd found Synthetic Evolution</h3>
              <p>
                {" "}
                “Trying to humanize the extraterrestrial environment was doomed
                to fail. Instead, in order to live in space, the human body had
                to evolve.” -Dr. Thiccfloyd{" "}
              </p>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/story2.webp"
                alt="Picture of the author"
                width="860"
                height="540"
                blurDataURL=""
                placeholder=""
              />
              <h3>Foundation & Lab Opening</h3>
              <p>
                Dr. Thiccfloyd, who enabled the human body to adapt to space
                conditions through synthetic evolution, founded the Lowell
                Foundation to establish a decentralized space civilization
                starting from Pluto and called for all research to be
                consolidated within this organization.{" "}
              </p>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/story3.webp"
                alt="Picture of the author"
                width="860"
                height="540"
                blurDataURL=""
                placeholder=""
              />
              <h3>Invitation</h3>
              <p>
                The Lowell Foundation volunteers' groundbreaking works sparked
                FOMO in humanity and propelled studies on extraterrestrial life.
                It was time to invite the pioneers - artists, warriors,
                philosophers, diplomats, and scientists - who would later be
                known as Fomo Sapiens.{" "}
              </p>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/story4.webp"
                alt="Picture of the author"
                width="860"
                height="540"
                blurDataURL=""
                placeholder=""
              />
              <h3>Tattoo Shop</h3>
              <p>
                {" "}
                Fomo Sapiens, chosen by Lowell Foundation to build a new
                civilization on Pluto, get tattoos to show their fraction. These
                markings signify their role and symbolize their dedication and
                courage across the universe.
              </p>
            </div>
            <div>
              <Image
                className="{mintInfo.banner}"
                src="/story5.webp"
                alt="Picture of the author"
                width="860"
                height="540"
                blurDataURL=""
                placeholder=""
              />
              <h3>Final Preps</h3>
              <p>
                Final preparations have been completed, and an exciting new era
                for humanity in space is about to begin as the Fomo Sapiens
                board the spacecraft known as Trans Neptunian Express, ready to
                embark on their journey towards Pluto.{" "}
              </p>
            </div>
            <h2>Chapter 2: Journey to Pluto</h2>
            <p>
              The second mission involves embarking on the long journey to Pluto
              aboard a state-of-the-art spacecraft. This journey will be filled
              with challenges, including cramped quarters and the difficulties
              of living and working together in a confined space for an extended
              period of time.
            </p>
            <h2>Chapter 3: Establishing a Sustainable Society</h2>
            <p>
              Once the group arrives at Pluto, their next mission will be to
              establish a sustainable way of life on the planet. This will
              involve finding a way to generate food, water, and energy in the
              hostile environment, as well as grappling with the challenges of
              living in a decentralized society.
            </p>
            <h2>Chapter 4: Exploration and Expansion</h2>
            <p>
              As the group begins to establish their new society, their next
              mission will be to explore the uncharted territories of Pluto and
              to look for opportunities to expand their civilization. This will
              involve mapping the planet, searching for valuable resources, and
              establishing new settlements.
            </p>
            <h2>Chapter 5: Ensuring the Future of the New Civilization </h2>
            <p>
              The final mission of our story will involve ensuring the long-term
              survival and success of the new civilization on Pluto. This will
              involve continuing to adapt to the planet's harsh conditions,
              developing new technologies and innovations, and working together
              to overcome any challenges that may arise.
            </p>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Lore;
