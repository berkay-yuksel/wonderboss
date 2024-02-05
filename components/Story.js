import story from "../styles/Story.module.css";

import Image from "next/image";

const Story = ({ justLeave, onMouseEnter, onMouseLeave, scrollEnter }) => {
  return (
    <div
      className={story.container}
      onMouseEnter={scrollEnter}
      onMouseLeave={justLeave}
    >
      <Image
        alt="leeerob"
        src="/story1.webp"
        width="2000"
        height="1000"
        placeholder="blur"
        blurDataURL="/story1.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/story2.webp"
        width="2000"
        height="1000"
        placeholder="blur"
        blurDataURL="/story2.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/story3.webp"
        width="2000"
        height="1000"
        placeholder="blur"
        blurDataURL="/story3.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/story4.webp"
        width="2000"
        height="1000"
        placeholder="blur"
        blurDataURL="/story4.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/story5.webp"
        width="2000"
        height="1000"
        placeholder="blur"
        blurDataURL="/story5.webp"
        quality={10}
      />
    </div>
  );
};

export default Story;
