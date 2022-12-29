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
          Instead of zero-destined tokens, our token will provide value
          differently
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q2</p> <p>AIR DROP</p>
        <p>
          Who doesn't love air drops? Our story will be continiue with new items
        </p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q3</p> <p>MUTATION</p>
        <p>Mutate your nft to a much cooler fresh pluto-colored space one</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q3</p> <p>MERCH</p>
        <p>Show off your drip and differenciate from normal people as degen</p>
      </div>
      <div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
        <p>2023-Q4</p> <p>GAME</p>
        <p>
          Participate to the adventure in an interactive and more exciting way
        </p>
      </div>
    </div>
  );
};

export default Faq;
