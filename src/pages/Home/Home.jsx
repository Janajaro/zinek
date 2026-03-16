import { useEffect, useRef } from "react";
import "./Home.css";

export const Home = () => {
  const moonRef = useRef(null);
  const mountainFrontRef = useRef(null);
  const truckRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (moonRef.current) {
        moonRef.current.style.transform = `translateY(${y * 0.45}px)`;
      }

      if (mountainFrontRef.current) {
        mountainFrontRef.current.style.transform = `translateY(${-y * 0.2}px)`;
      }

      if (truckRef.current) {
        truckRef.current.style.transform = `translateX(${y * 0.9}px)`;
      }

    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="parallax-container">
        <img
          ref={moonRef}
          className="ZN-anna_hai-moon"
          src="/img/integral/ZN-anna_hai-moon.png"
          alt="moon"
        />
        <img
          className="ZN-anna_hai-mountain-bckgd"
          src="/img/integral/ZN-anna_hai-mountain-bckgd.png"
          alt="mountain bg"
        />
        <img
          ref={mountainFrontRef}
          className="ZN-anna_hai-mountain-front"
          src="/img/integral/ZN-anna_hai-mountain-front.png"
          alt="mountain front"
        />
        <img
          className="ZN-anna_hai-sidewalk"
          src="/img/integral/ZN-anna_hai-sidewalk.png"
          alt="sidewalk"
        />
        <img
          ref={truckRef}
          className="ZN-anna_hai-truck"
          src="/img/integral/ZN-anna_hai-truck.png"
          alt="truck"
        />
      </div>

      <div className="lower-container">

        <h2 className="h2-home">
          ◖Zinek is an independent festival of self-publishing and analog print◗ 
        </h2>

        <br />

        <p className="p-home">
          ◖Do you draw, take photos, create zines? Do you have a passion for letterpress, riso, silkscreen, linocut… in short, do you enjoy prints that are not all the same, and do you want to meet people from workshops where your print smells and hands get dirty?◗ 
        </p>

        <br />

        <h2 className="h2-home">
          ◖In the spring of 2026, a new festival dedicated to artzines, artistic graphics and illustration will start in Prague◗  
        </h2>

        <br />

        <p className="p-home"> 
          ◖More info coming soon! Stay tuned!◗ 
        </p>
      </div>
    </div>
  );
};
