"use client";
import React, { useRef } from "react";
import bgImage from "../assets/images/framerMotion/sld2-bg.jpg";
import astronaut from "../assets/images/framerMotion/slider3_05.png";
import bird from "../assets/images/framerMotion/slider3_06.png";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

const word = "with framer-motion";

const FramerMotion: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const images = [
    {
      src: bgImage,
      y: 0
    },
    {
      src: astronaut,
      y: lg
    },
    {
      src: bird,
      y: md
    }
  ];

  return (
    <Wrap ref={container} className="container">
      <div className="body">
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className="word">
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <ImageWrap className="images">
        {images.map(({ src, y }, i) => {
          return (
            <div className="position" key={`i_${i}`}>
              <motion.div style={{ y }} className="imageContainer">
                <img src={src} />
              </motion.div>
            </div>
          );
        })}
      </ImageWrap>
    </Wrap>
  );
};
const Wrap = styled.div`
  &.container {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    .body {
      position: absolute;
      margin-left: 10vw;
      top: 0px;
      h1 {
        position: relative;
        color: #333;
        margin-top: 10px;
        font-size: 5vw;
        line-height: 5vw;
        text-transform: uppercase;
        z-index: 100;
      }
      p {
        position: relative;
        color: white;
        margin-top: 10px;
        font-size: 3vw;
        text-transform: uppercase;
        z-index: 100;
        span {
          position: relative;
        }
      }
    }
    .images {
      position: relative;
      top: 0;
      width: 100vw;
      height: 800px;
    }
  }
`;

const ImageWrap = styled.div`
  .position {
    position: absolute;
  }
  .position:nth-of-type(1) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    img {
      width: 80vw;
    }
  }
  .position:nth-of-type(2) {
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    img {
      width: 15vw;
    }
  }
  .position:nth-of-type(3) {
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    img {
      width: 40vw;
    }
  }
`;

export default FramerMotion;
