// 🍕 Food Recommend Page

import gsap from "gsap";
import { useEffect, useRef } from "react";

function Recommend() {
  // 공 애니메이션 용 Ref
  const ballRef = useRef();
  // 배경 애니메이션 용 Ref
  const backgroundRef = useRef();
  useEffect(() => {
    if (!backgroundRef.current && !ballRef.current) return;
    let tl = gsap.timeline();
    tl.fromTo(
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
        duration: 0.2,
        delay: 0.5
      });
  }, [backgroundRef, ballRef]);
  return (
    <div
      ref={backgroundRef}
      className="select-none h-screen w-screen flex bg-point-yellow relative overflow-hidden"
    >
      <div
        ref={ballRef}
        className="absolute w-11 h-11 bg-light-yellow rounded-full left-1/2 top-1/2"
      ></div>
    </div>
  );
}

export default Recommend;
