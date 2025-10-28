// 🍕 Food Recommend Page

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import burger from "../assets/icons/burger-line.svg";
import pizza from "../assets/icons/pizza-line.svg";
import fries from "../assets/icons/fries-line.svg";

function Recommend() {
  // 공 애니메이션 용 Ref
  const ballRef = useRef();
  // 배경 애니메이션 용 Ref
  const backgroundRef = useRef();
  // 음식 아이콘 Ref
  const foodIconRef = useRef();
  const [iconSrc, setIconSrc] = useState(burger);
  useEffect(() => {
    if (!backgroundRef.current || !ballRef.current) return;
    let colorTl = gsap.timeline();
    colorTl
      .to(
        backgroundRef.current,
        {
          backgroundColor: "#fff3d0",
          ease: "none",
          duration: 0,
        },
        1
      )
      .to(ballRef.current, { backgroundColor: "#ffbc00", duration: 0 }, "<")
      .to(
        backgroundRef.current,
        {
          backgroundColor: "#ffbc00",
          ease: "none",
          duration: 0,
        },
        "+=1.2"
      )
      .to(
        ballRef.current,
        {
          backgroundColor: "#fff3d0",
          duration: 0,
        },
        "<"
      )
      .to(
        backgroundRef.current,
        {
          backgroundColor: "#fff3d0",
          ease: "none",
          duration: 0,
        },
        "+=1.2"
      )
      .to(ballRef.current, { backgroundColor: "#ffbc00", duration: 0 }, "<")
      .to(
        backgroundRef.current,
        {
          backgroundColor: "#ffbc00",
          ease: "none",
          duration: 0,
        },
        "+=1.2"
      )
      .to(
        ballRef.current,
        {
          backgroundColor: "#fff3d0",
          duration: 0,
        },
        "<"
      );

    let motionTl = gsap.timeline();
    motionTl
      .fromTo(
        ballRef.current,
        { scaleX: 0.8, xPercent: -50, y: -600 },
        { scaleX: 1, y: -130, duration: 1, ease: "power2.in" }
      )
      .to(ballRef.current, {
        y: -300,
        scaleX: 0.9,
        repeat: 6,
        duration: 0.6,
        ease: "power2.out",
        yoyo: true,
        repeatDelay: 0,
      })
      .to(ballRef.current, {
        scaleX: 1,
        y: 700,
        duration: 1,
        ease: "power2.in",
      })
      .to(backgroundRef.current, {
        backgroundColor: "#fff3d0",
        duration: 0.2,
        delay: 0.5,
      });

    return () => {
      colorTl.kill();
      motionTl.kill();
    };
  }, [backgroundRef, ballRef]);

  useEffect(() => {
    if (!iconSrc || !foodIconRef.current) return;
    foodIconRef.current.style.opacity = 0;
    gsap.to(foodIconRef.current, {});
    const timer = setTimeout(() => {
      if (iconSrc === burger) setIconSrc(pizza);
      else if (iconSrc === pizza) setIconSrc(fries);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [iconSrc]);

  return (
    <div
      ref={backgroundRef}
      className="select-none h-screen w-screen flex bg-point-yellow relative overflow-hidden"
    >
      <div
        ref={ballRef}
        className="absolute w-11 h-11 bg-light-yellow rounded-full left-1/2 top-1/2"
      ></div>
      <div
        ref={foodIconRef}
        className="absolute left-1/2 top-[43%] -translate-x-1/2"
      >
        <img src={iconSrc} alt="음식 아이콘" />
      </div>
    </div>
  );
}

export default Recommend;
