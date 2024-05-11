import faq from "../styles/Faq.module.css";

const Faq = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={faq.container}>
      <h1>UTILITIES</h1>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p> IP RIGHTS</p>
        <p>&nbsp;</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>CLASHUB</p>
        <p>Multi-Chain Blockchain Game</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>MINT & STAKING REWARDS</p>
        <p>&nbsp;</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>OLL LLC</p>
        <p>Streetwear Fashion Brand for the Artist Curated Merchandise</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>IRL EVENTS</p>
        <p>&nbsp;</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>FOMOS PLATFORM</p>
        <p>
          Gamified Staking,&nbsp; Invitation App,&nbsp;Gift Boxes, &nbsp;Artists
          Page,&nbsp; Educational Content etc
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>FUTURE RELEASES & AIRDROPS</p>
        <p>&nbsp;</p>
      </div>
      {/* <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>SPECIFIED COMMUNITY & DAOS</p>
        <p>&nbsp;</p>
      </div> */}
    </div>
  );
};

export default Faq;
