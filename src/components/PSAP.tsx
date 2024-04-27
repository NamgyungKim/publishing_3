import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../assets/images/psap/sld3-bg.jpg";
import land from "../assets/images/psap/slider2_02.png";
import people from "../assets/images/psap/slider2_03.png";
import jupiter from "../assets/images/psap/slider2_04.png";
import styled from "@emotion/styled";

gsap.registerPlugin(ScrollTrigger);
const word = "with gsap";

const PSAP: React.FC = () => {
  const container = useRef(null);
  const images = [bgImage, jupiter, land, people];
  const lettersRef = useRef([]);
  const imagesRef = useRef([]);
  const title1 = useRef(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
        .to(title1.current, { y: -50 }, 0)
        .to(imagesRef.current[0], { scale: 1.2 }, 0)
        .to(imagesRef.current[1], { y: -200 }, 0)
        .to(imagesRef.current[2], { y: 200 }, 0)
        .to(imagesRef.current[3], { y: 220 }, 0);
      lettersRef.current.forEach((letter) => {
        tl.to(
          letter,
          {
            top: Math.floor(Math.random() * -75) - 25
          },
          0
        );
      });
    });
    return () => context.revert();
  }, []);

  return (
    <Wrap ref={container} className="container">
      <div className="body">
        <h1 ref={title1}>Parallax</h1>
        <h1>Scroll</h1>
        <div className="word">
          <p>
            {word.split("").map((letter, i) => {
              return (
                <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                  {letter}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <ImageWrap className="images">
        {images.map((image, i) => {
          return (
            <div className="position" key={`i_${i}`}>
              <div
                ref={(el) => (imagesRef.current[i] = el)}
                className="imageContainer"
              >
                <img src={image} alt="image" />
              </div>
            </div>
          );
        })}
      </ImageWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 200vh;
  height: 60vw;
  width: 100vw;
  box-sizing: border-box;
  .body {
    position: absolute;
    margin-left: 10vw;
    padding-top: 200px;
    top: 0px;
    h1 {
      position: relative;
      color: #333;
      font-size: 5vw;
      line-height: 5vw;
      text-transform: uppercase;
      z-index: 100;
    }
    p {
      position: relative;
      color: white;
      margin-top: 50px;
      font-size: 3vw;
      text-transform: uppercase;
      z-index: 100;
      span {
        position: relative;
      }
    }
  }
`;

const ImageWrap = styled.div`
  .position {
    position: absolute;
    img {
      width: 100%;
    }
  }
  .position:nth-of-type(1) {
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .position:nth-of-type(2) {
    left: 50%;
    top: 40%;
    width: 40vw;
    transform: translateX(-50%);
  }
  .position:nth-of-type(3) {
    width: 90%;
    left: 8%;
    bottom: 20%;
  }
  .position:nth-of-type(4) {
    left: 30%;
    transform: translateX(-50%);
    width: 20%;
    bottom: 25%;
  }
`;

export default PSAP;
