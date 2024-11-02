import "../stylesheets/portfolioStyles.css";
import layerZero from "/content/images/other/layer-0.png";
import layerOne from "/content/images/other/layer-1.png";
import layerTwo from "/content/images/other/layer-2.png";
import layerThree from "/content/images/other/layer-3.png";
import layerFour from "/content/images/other/layer-4.png";
import DynamicText from "./DynamicText";
import { useEffect, useRef } from "react";

function Header() {
  // Create refs for each layer with correct typing (HTMLElement)
  const layerZeroRef = useRef<HTMLDivElement>(null);
  const layerOneRef = useRef<HTMLDivElement>(null);
  const layerTwoRef = useRef<HTMLDivElement>(null);
  const layerThreeRef = useRef<HTMLDivElement>(null);
  const layerFourRef = useRef<HTMLDivElement>(null);

  // Parallax effect using scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      // Accessing the ref and applying the transform only if the element exists
      if (layerZeroRef.current) {
        layerZeroRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
      if (layerOneRef.current) {
        layerOneRef.current.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
      }
      if (layerTwoRef.current) {
        layerTwoRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }
      if (layerThreeRef.current) {
        layerThreeRef.current.style.transform = `translateY(${
          scrollPosition * 0.2
        }px)`;
      }
      if (layerFourRef.current) {
        layerFourRef.current.style.transform = `translateY(${
          scrollPosition * 0.1
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-layer layer-0" ref={layerZeroRef}>
        <img src={layerZero} alt="Layer 0" />
      </div>
      <div className="parallax-layer layer-1" ref={layerOneRef}>
        <img src={layerOne} alt="Layer 1" />
      </div>
      <div className="parallax-layer layer-2" ref={layerTwoRef}>
        <img src={layerTwo} alt="Layer 2" />
      </div>
      <div className="parallax-layer layer-3" ref={layerThreeRef}>
        <img src={layerThree} alt="Layer 3" />
      </div>
      <div className="parallax-layer layer-4" ref={layerFourRef}>
        <img src={layerFour} alt="Layer 4" />
      </div>

      <DynamicText />
    </div>
  );
}

export default Header;
