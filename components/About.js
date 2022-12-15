import about from "../styles/About.module.css";

const About = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={about.container}>
      <h2>ABOUT</h2>
      <div>
        <div className={about.text_container}>
          <div>
            <h5>AN INTERNATIPNAL DIGITAL DESING STUDO</h5>
            <h5>REIMAGINING HOW PEOPLE CONNECT WITH BRANDS</h5>
          </div>

          <div>
            <p>
              We're a small team of curious humans who create work we’re proud
              of for people and brands we believe in. With collaboration at the
              heart of every project, we identify what skills are required and
              then bring the best people together to create something truly
              extraordinary. Combining strategy, branding, web design and
              development, we build digital experiences that transform the way
              people connect and interact with brands.
            </p>
            <button onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
              ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
