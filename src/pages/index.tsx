import Image from "next/image";
import styles from "./index.module.scss";
import Container from "@/components/layout/container";
import Button from "@/components/button";

import MainPreview from "@/assets/common/preview_main.png";
import Slide from "@/assets/common/slide.png";
import Card1 from "@/assets/common/card1.png";
import Card2 from "@/assets/common/card2.png";
import Card3 from "@/assets/common/card3.png";
import Card4 from "@/assets/common/card4.png";

const Home = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-full">
        <Container>
          <div className={styles.content}>
            <h1>Choose Your Destiny</h1>
            <p>Join Kombutt in the ultimate crypto combat!</p>
            <Button className="mt-10" type="primary">
              Get Kombutt
            </Button>
          </div>
        </Container>
        <Image className={styles.preview} alt="main" src={MainPreview} />
      </div>

      <Container>
        <div className="flex items-start gap-12">
          <h2 className={styles.desc}>
            Kombutt is the son of a koala and a wombat . With his koala’s calm
            demeanor and a wombat’s tenacity, he swiftly became a legend in the
            blockchain battlegrounds.
          </h2>
          <Image className={styles.slide} alt="main" src={Slide} />
        </div>
        <div className={styles.cards}>
          <div className="relative flex flex-col justify-start items-start max-w-[380px] gap-4 -top-40">
            <Image className={styles.card1} alt="main" src={Card1} />
            <p className="text-center">
              Important fact: wombat poop cubes, while Kombutt - hypercubes.
            </p>
          </div>
          <Image className={styles.card3} alt="main" src={Card3} />
          <div className="flex flex-col justify-end items-end max-w-[380px] gap-4 text-end">
            <Image className={styles.card2} alt="main" src={Card2} />
            <p>
              We promise you Kombutt in every home, airdrops for everyone, and
              Crypto-Communism for all!
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles.mighty}>
          <Image alt="main" src={Card4} />
          <p>
            Kombutt is just a mighty mascot in battle armor. Isn’t this enough
            to join him? <b>It IS enough.</b>
          </p>
        </div>
      </Container>

      <Container>
        <div className={styles.roadmap}>
          <h1>Fatality Roadmap</h1>
        </div>
      </Container>
    </div>
  );
};

export default Home;
