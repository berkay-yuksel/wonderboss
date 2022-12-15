import story from "../styles/Story.module.css";

import Image from "next/image";
import deneme from "../assets/deneme.jpg";
import roadmapImg from "../assets/roadmap.png";

const Story = ({ justLeave, onMouseEnter, onMouseLeave, scrollEnter }) => {
  return (
    <div
      className={story.container}
      onMouseEnter={scrollEnter}
      onMouseLeave={justLeave}
    >
      <Image alt="leeerob" src={deneme} placeholder="blur" />
      <Image alt="leeerob" src={roadmapImg} placeholder="blur" />
      <Image alt="leeerob" src={deneme} placeholder="blur" />
      <Image alt="leeerob" src={roadmapImg} placeholder="blur" />
      <Image alt="leeerob" src={deneme} placeholder="blur" />
    </div>
  );
};

export default Story;
