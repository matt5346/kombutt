/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import Image from "next/image";
import styles from "./index.module.scss";
import Container from "@/components/layout/container";
import Button from "@/components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MainPreview from "@/assets/common/preview_main.png";
import Footer from "@/assets/common/footer.png";
import Slide from "@/assets/common/slide.png";
import Card1 from "@/assets/common/card1.png";
import Card2 from "@/assets/common/card2.png";
import Card3 from "@/assets/common/card3.png";
import Card4 from "@/assets/common/card4.png";

import road1 from "@/assets/common/roadmap1.png";
import road2 from "@/assets/common/roadmap2.png";
import road3 from "@/assets/common/roadmap1.png";
import { useState } from "react";

const roadmapSlider = [
  {
    img: road1,
    text: "Top-100 token holders will get their very own Kombutt via the Kombutt Generator!",
    title: "Q2 2024"
  },
  {
    img: road2,
    text: "The Kombutt Manga with epic tales for the top-50 token holders!",
    title: "Q3 2024"
  },
  {
    img: road3,
    text: "Top-100 token holders will get their very own Kombutt via the Kombutt Generator!",
    title: "Q4 2024"
  }
];

const Home = () => {
  const [showWidget, setShowWidget] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="w-full mb-40">
        <Container>
          <div className={styles.content}>
            <h1>Choose Your Destiny</h1>
            <p>Join Kombutt in the ultimate crypto combat!</p>
            <Button
              className="mt-10"
              type="primary"
              onClick={() => setShowWidget(true)}
            >
              Get Kombutt
            </Button>
          </div>
        </Container>
        <Image className={styles.preview} alt="main" src={MainPreview} />
      </div>

      {showWidget && (
        <div className={styles.iframe}>
          <iframe src="https://widget.venombridge.com/widget.html" />
          <Button
            className={styles.close}
            type="primary"
            onClick={() => setShowWidget(false)}
          >
            Close
          </Button>
        </div>
      )}

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
          <Swiper spaceBetween={20} slidesPerView={2} freeMode>
            {roadmapSlider.map((_, key) => (
              <SwiperSlide>
                <div className={styles.slideMain}>
                  <Image
                    className={key === 1 ? "bg-black" : ""}
                    alt={_.title}
                    src={_.img}
                  />
                  <h2 className="mt-10">{_.title}</h2>
                  <p>{_.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      <div className={styles.footer}>
        <Image className={styles.footerImg} alt="main" src={Footer} />

        <Container>
          <Button
            className={styles.getBig}
            type="primary"
            onClick={() => setShowWidget(true)}
          >
            Get Kombutt
          </Button>
        </Container>

        <div className={styles.footerLinks}>
          <Container>
            <div className={styles.linkItem}>
              <h2>social links:</h2>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span>1.</span>
                <a target="_blank" className="link" href="test">
                  telegram
                </a>
              </div>
            </div>
            <div className={styles.linkItem}>
              <h2>root-contract:</h2>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span>1.</span>
                <a target="_blank" className="link" href="test">
                  link
                </a>
              </div>
            </div>
            <div className={styles.linkItem}>
              <h2>venom-scan:</h2>
              <div className="flex justify-center items-center gap-2 mt-2 mt-2">
                <span>1.</span>
                <a target="_blank" className="link" href="test">
                  link
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
