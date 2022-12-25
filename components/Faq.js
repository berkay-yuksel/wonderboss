import faq from "../styles/Faq.module.css";

const Faq = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={faq.container}>
      <h1>TIME LINE</h1>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q1</p> <p>MINTING</p>
        <p>Mint day is the most exciting day. Beggining for a new adventure!</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q1</p> <p>STAKING</p>
        <p>
          Stake day is the most exciting day. Beggining for a new adventure!
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q2</p> <p>AIR DROP</p>
        <p>
          Airdrop day is the most exciting day. Beggining for a new adventure!
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q3</p> <p>MUTATION</p>
        <p>
          Mutation day is the most exciting day. Beggining for a new adventure!
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q3</p> <p>MERCH</p>
        <p>
          Merch day is the most exciting day. Beggining for a new adventure!
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q4</p> <p>GAME</p>
        <p>Game day is the most exciting day. Beggining for a new adventure!</p>
      </div>
    </div>
  );
};

export default Faq;
