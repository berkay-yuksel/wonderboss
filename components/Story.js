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
        src="/deneme.jpg"
        width="816"
        height="816"
        placeholder="blur"
        blurDataURL="/deneme.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/roadmap.png"
        width="2816"
        height="1454"
        placeholder="blur"
        blurDataURL="/deneme.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/deneme.jpg"
        width="816"
        height="816"
        placeholder="blur"
        blurDataURL="/deneme.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/roadmap.png"
        width="2816"
        height="1454"
        placeholder="blur"
        blurDataURL="/deneme.webp"
        quality={10}
      />
      <Image
        alt="leeerob"
        src="/deneme.jpg"
        width="816"
        height="816"
        placeholder="blur"
        blurDataURL="/deneme.webp"
        quality={10}
      />
    </div>
  );
};

export default Story;
