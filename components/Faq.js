import faq from "../styles/Faq.module.css";

const Faq = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={faq.container}>
      <h1>UTILITIES</h1>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p> IP RIGHTS</p>
        <p>Full commercial ownership of your Boss identity</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>BOSSPHORUS MAGAZINE</p>
        <p>Premium publication showcasing Solana NFTs</p>
        {/* <p>
          A premium Solana publication showcasing collections, serving as a
          cultural archive and a physical collectible.
        </p> */}
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>EVENTS APP</p>
        <p> Exclusive infrastructure for IRL and online experiences</p>
        {/* <p>
          The exclusive social layer for IRL and online experiences, enabling
          rewards, galleries, and verified presence.
        </p> */}
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>THE DEC BY WONDER BOSS</p>
        <p>Tokenized and decentralized emulated web computer</p>
        {/* <p>
          Tokenized, emulation-based web platform that creates a fully
          decentralized and Turing-complete computer for its users
        </p> */}
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>OLL LLC</p>
        <p>Official streetwear and merchandise partnership</p>
      </div>

      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>FUTURE RELEASES & AIRDROPS</p>
        <p>Priority access to future releases and exclusive drops</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>MINT REWARDS</p>
        <p>Solana NFT rewards for every completed minting pool</p>
      </div>
      {/* <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>SPECIFIED COMMUNITY & DAOS</p>
        <p>&nbsp;</p>
      </div> */}
    </div>
  );
};

export default Faq;
