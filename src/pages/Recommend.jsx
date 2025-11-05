// 🍕 Food Recommend Page

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import useRandomFood from "../hooks/useRandomFood";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import decoLine from "../assets/decorations/line1.png";
import dotPattern from "../assets/decorations/dot-pattern.png";

function Recommend() {
  const navigate = useNavigate();
  const { category, name, image } = useRandomFood();
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
        repeat: 2,
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
      <div
        ref={foodContainerRef}
        className="opacity-0 m-auto w-fit flex flex-col items-center"
      >
        <div className="px-6 py-1 mb-4 bg-point-brown w-fit rounded-full text-white font-medium">
          {category}
        </div>
        <div className="relative flex justify-center mb-3">
          <h1 className="font-black z-1 text-[54px] text-point-brown">
            {name}
          </h1>
          <div className="absolute bottom-2 z-0 bg-point-yellow h-8.5 w-full"></div>
        </div>

        <img src={"/foods" + image} alt={`${name} 이미지`} />
        <div className="flex gap-2.5 mt-14">
          <CustomButton style={"white"} onClick={() => navigate("/")}>
            돌아가기
          </CustomButton>
          <CustomButton onClick={() => navigate(0)}>다시 추천받기</CustomButton>
        </div>
        <div className="absolute z-1 -left-30 -top-55">
          <img src={decoLine} alt="deco line1" />
        </div>
        <div className="absolute z-1 -right-30 -bottom-55">
          <img src={decoLine} alt="deco line1" />
        </div>
        <div className="absolute z-0 top-0 rotate-180 w-screen h-33.5">
          <img className="w-full" src={dotPattern} alt="deco dot" />
        </div>
        <div className="absolute z-0 bottom-0  w-screen h-33.5">
          <img className="w-full" src={dotPattern} alt="deco dot" />
        </div>
      </div>
    </div>
  );
}

export default Recommend;
