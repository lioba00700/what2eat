// 🍕 Food Recommend Page

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import useRandomFood from "../hooks/useRandomFood";
import foodImg from "../assets/foods/image 20.png";

function Recommend() {
  const food = useRandomFood();
  // 공 애니메이션 용 Ref
  const ballRef = useRef();
  // 배경 애니메이션 용 Ref
  const backgroundRef = useRef();
  // 추천 메뉴 컨테이너 Ref
  const foodContainerRef = useRef();
  useEffect(() => {
    if (!backgroundRef.current || !ballRef.current || !foodContainerRef) return;
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
        { scaleX: 1, y: 0, duration: 1, ease: "power2.in" }
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
        duration: 0.1,
        delay: 0.5,
      })
      .to(foodContainerRef.current, {
        opacity: 1,
      });

    return () => {
      colorTl.kill();
      motionTl.kill();
    };
  }, [backgroundRef, ballRef, foodContainerRef]);
  return (
    <div
      ref={backgroundRef}
      className="select-none h-screen w-screen flex bg-point-yellow relative overflow-hidden"
    >
      <div
        ref={ballRef}
        className="absolute w-11 h-11 bg-light-yellow rounded-full left-1/2 top-1/2"
      ></div>
      <div ref={foodContainerRef} className="opacity-0">
        <div>{food.category}</div>
        <h1>{food.name}</h1>

        <img src={foodImg} alt="" />
      </div>
    </div>
  );
}

export default Recommend;
