import faq from "../styles/Faq.module.css";

const Faq = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={faq.container}>
      <h1>UTILITIES</h1>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p> IP RIGHTS</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>THE DEC BY WONDER BOSS</p>

        <p>
          DEC is a tokenized, emulation-based web platform that creates a fully
          decentralized and Turing-complete computer for its users.
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>MINT & STAKING REWARDS</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>OLL LLC</p>
        <p>Streetwear Fashion Brand for the Artist Curated Merchandise</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>EVENTS</p>
        <p>IRL and Online events</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>OTHER</p>
        <p>
          Gamified Staking,&nbsp; Gift Boxes, &nbsp;
          <b>
            <u>Sub Community Pages</u>
          </b>
          ,&nbsp; Educational Content etc
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>FUTURE RELEASES & AIRDROPS</p>
      </div>
      {/* <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>SPECIFIED COMMUNITY & DAOS</p>
        <p>&nbsp;</p>
      </div> */}
    </div>
  );
};

export default Faq;
