import styled from "@emotion/styled";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import PSAP from "../components/PSAP";
import FramerMotion from "../components/FramerMotion";

const Home: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Background>
      <PSAP />
      <FramerMotion />
    </Background>
  );
};

const Background = styled.div``;
export default Home;
