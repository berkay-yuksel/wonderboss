import hero from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={hero.container}>
      <div className={hero.title}>
        <div className={hero.textWrapper}>
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <h1>A DIGITAL DESIGN STUDIO</h1>
            </div>
          </div>
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <h1>DRIVEN BY RESEARCH &</h1>
            </div>
          </div>
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <h1>STRATEGY</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={hero.sub_title}>
        <h5>DESINGED TO ENGAGE</h5>
        <h5>BUILD TO CONNECT</h5>
      </div>
    </div>
  );
};

export default Hero;
