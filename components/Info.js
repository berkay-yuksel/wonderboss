import info from "../styles/Info.module.css";

import Image from "next/image";
import brand from "../assets/brand.png";

const Info = (justLeave, onMouseEnter, onMouseLeave, clickableEnter) => {
  return (
    <div className={info.container}>
      <h2>Info</h2>
      <div className={info.text_container}>
        <div>
          <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
          <p>
            {" "}
            Lemkus reached out to us to create a new design system and conduct
            an overhaul of the brand’s digital experience. The objective was to
            provide customers with seamless purchasing journeys and we did this
            by combining robust user experience with strong and engaging
            content.
          </p>
          <button>VIEW CASE STUDY</button>
        </div>

        <div>
          <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
          <p>
            {" "}
            Lemkus reached out to us to create a new design system and conduct
            an overhaul of the brand’s digital experience. The objective was to
            provide customers with seamless purchasing journeys and we did this
            by combining robust user experience with strong and engaging
            content.
          </p>
          <button>VIEW CASE STUDY</button>
        </div>

        <div>
          <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
          <p>
            {" "}
            Lemkus reached out to us to create a new design system and conduct
            an overhaul of the brand’s digital experience. The objective was to
            provide customers with seamless purchasing journeys and we did this
            by combining robust user experience with strong and engaging
            content.
          </p>
          <button>VIEW CASE STUDY</button>
        </div>

        <div>
          <Image alt="leeerob" src={brand} placeholder="blur" height={30} />
          <p>
            {" "}
            Lemkus reached out to us to create a new design system and conduct
            an overhaul of the brand’s digital experience. The objective was to
            provide customers with seamless purchasing journeys and we did this
            by combining robust user experience with strong and engaging
            content.
          </p>
          <button>VIEW CASE STUDY</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
