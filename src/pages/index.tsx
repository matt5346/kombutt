/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import Image from "next/image";
import Container from "@/components/layout/container";
import Button from "@/components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";

import MainPreview from "@/assets/common/preview_main.png";
import MainMob from "@/assets/common/preview_mob.png";

import Footer from "@/assets/common/footer.png";

import Card1 from "@/assets/common/card1.png";
import Card2 from "@/assets/common/card2.png";
import Card3 from "@/assets/common/card3.png";
import Card4 from "@/assets/common/card4.png";

import Koala from "@/assets/common/koala.png";
import Wombat from "@/assets/common/wombat.png";

import Play from "@/assets/common/play.svg";

import MiddleCard1 from "@/assets/common/middleCard1.png";
import MiddleCard2 from "@/assets/common/middleCard2.png";
import MiddleCard3 from "@/assets/common/middleCard3.jpg";

import road1 from "@/assets/common/roadmap1.png";
import road2 from "@/assets/common/roadmap2.png";
import road3 from "@/assets/common/roadmap5.png";
import road4 from "@/assets/common/roadmap3.png";
import road5 from "@/assets/common/roadmap4.png";
import { useState } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import useDeviceType from "@/hooks/useDeviceType";
import classNames from "classnames";

const headerSlider = [
  "Important fact: wombat poop cubes, while Kombutt - hypercubes",
  "Kombutt is just a mighty mascot in battle armor. Isn’t this enough to join him? It IS enough.",
  "We promise you Kombutt in every home, airdrops for everyone, and Crypto-Communism for all!"
];

const middleSlides = [MiddleCard1, MiddleCard2, MiddleCard3];

const roadmapSlider = [
  {
    img: road1,
    text: "Top-100 token holders will get their very own Kombutt via the Kombutt Generator!",
    title: "Q2 2024"
  },
  {
    img: road2,
    text: "Q3 2024: The Kombutt Manga with epic tales for the top-50 token holders!",
    title: "Q3 2024"
  },
  {
    img: road3,
    text: "Q4 2024: Kombutt Combat Web3 Game! Get your Kombutt and win the battle.",
    title: "Q4 2024"
  },
  {
    img: road5,
    text: "Q3 1969: Kombutt conquers the moon!",
    title: "Q3 1969"
  },
  {
    img: road4,
    text: "Q3 2025: Kombutt Wins!",
    title: "Q3 2025"
  }
];

const Home = () => {
  const deviceType = useDeviceType();
  const [showWidget, setShowWidget] = useState<boolean>(false);

  const playSound = () => {
    const sound = new Audio(`/kombutt.mp3`);
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play();
  };

  return (
    <div className="w-full">
      <a
        href="https://web3.world/swap"
        target="_blank"
        rel="noreferrer"
        className={styles.fixedlink}
      >
        <Button className={styles.btnMain} type="primary">
          Get Kombutt
        </Button>
      </a>

      <div className="w-full mb-14 lg:mb-40 relative">
        <Swiper
          className={classNames(styles.swiperTop, "swiper-linear")}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          loop
          modules={[Autoplay]}
          speed={10000}
        >
          {headerSlider.map((_, key) => (
            <SwiperSlide key={key}>
              <span>{_}</span>
              <span className={styles.star}>✸</span>
            </SwiperSlide>
          ))}
        </Swiper>
        <Container>
          <div className={styles.content}>
            <h1>Choose Your Destiny!</h1>
            <p>Join Kombutt in the ultimate crypto combat!</p>
          </div>
        </Container>
        <Image
          className={styles.preview}
          alt="main"
          src={deviceType.isDesktop ? MainPreview : MainMob}
        />
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
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <h2 className={styles.desc}>
            Kombutt is the son of a koala <Image alt="koala" src={Koala} /> and
            a wombat <Image alt="wombat" src={Wombat} />. With his koala’s calm
            demeanor and a wombat’s tenacity, he swiftly became a legend in the
            blockchain battlegrounds.
          </h2>
          <Swiper
            className="middle-slider"
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {middleSlides.map((_, key) => (
              <SwiperSlide key={key}>
                <Image
                  className={styles.middleSlide}
                  alt={key.toString()}
                  src={_}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.cards}>
          <div className={styles.firstCard}>
            <Image className={styles.card1} alt="main" src={Card1} />
            <p className="text-center">
              Important fact: wombat poop cubes, while Kombutt - hypercubes.
            </p>
          </div>
          <Image className={styles.card3} alt="main" src={Card3} />
          <div className={styles.lastCard}>
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

      <div className={styles.roadmap}>
        <h1>Fatality Roadmap</h1>
        <div className="flex justify-center">
          <Swiper className="ml-auto" spaceBetween={60} slidesPerView="auto">
            {roadmapSlider.map((_, key) => (
              <SwiperSlide>
                <div className={styles.slideMain}>
                  <div className="relative">
                    <Image
                      className={key === 1 ? "bg-black" : ""}
                      alt={_.title}
                      src={_.img}
                    />
                    {key === 1 && (
                      <Button
                        onClick={playSound}
                        className={styles.listen}
                        type="primary"
                      >
                        listen anime opening
                        <Play className="ml-2" />
                      </Button>
                    )}
                  </div>
                  <h2 className="mt-10">{_.title}</h2>
                  <p>{_.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.footer}>
        <Image className={styles.footerImg} alt="main" src={Footer} />
        <a
          href="https://web3.world/swap"
          target="_blank"
          rel="noreferrer"
          className={styles.getBig}
        >
          <Button type="primary">Get Kombutt</Button>
        </a>
        <div className={styles.footerLinks}>
          <Container>
            <div className={styles.linkItem}>
              <h2>social links:</h2>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span>1.</span>
                <a
                  target="_blank"
                  className="link"
                  href="https://t.me/kombutt"
                  rel="noreferrer"
                >
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
