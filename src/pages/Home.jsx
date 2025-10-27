// 🏠 Home Page

import CustomButton from "../components/CustomButton";
import FoodIcon from "../components/FoodIcon";
import pizza1 from "../assets/decorations/pizza1.png";
import pizza2 from "../assets/decorations/pizza2.png";
import tteokbokki from "../assets/decorations/tteokbokki.png";
import chicken from "../assets/decorations/chicken.png";
import line from "../assets/decorations/line2.png";
import dot from "../assets/decorations/dot-pattern.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
  const highlightboxRef = useRef();
  const foodImgsRef = useRef([]);

  useEffect(() => {
    if (!highlightboxRef.current || !foodImgsRef.current) return;
    gsap.fromTo(
      highlightboxRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left", duration: 0.4 }
    );

    const images = foodImgsRef.current;
    let tl = gsap.timeline();
    tl.fromTo(
      images[0],
      { x: -500 },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.6 }
    );
    tl.fromTo(
      images[1],
      { x: 520 },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.6 },
      0.4
    );
    tl.fromTo(
      images[2],
      { x: -520 },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.6 },
      0.8
    );
    tl.fromTo(
      images[3],
      { x: 520 },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.6 },
      1.2
    );
  }, [highlightboxRef, foodImgsRef]);

  return (
    <div className="select-none h-screen w-screen bg-light-yellow relative overflow-hidden">
      <div className="flex flex-col items-center pt-20">
        <FoodIcon />
        <div className="relative w-112.5 flex justify-center mb-7 mt-50">
          <h1 className="w-fit text-[80px] font-black text-point-brown z-4">
            랜덤메뉴추천
          </h1>
          <div
            ref={highlightboxRef}
            className="absolute bottom-2 bg-point-yellow/80 w-112.5 h-14.5 z-3"
          ></div>
        </div>
        <p className="whitespace-pre-line font-light text-lg/6 text-center mb-18 z-2">
          오늘 뭐 먹을지 고민되시나요?{"\n"}취향에 맞는 메뉴를 쉽고 빠르게
          추천해드립니다.
        </p>
        <CustomButton style={"default"} onClick={() => {}}>
          추천받으러가기
        </CustomButton>
      </div>
      <img
        ref={(el) => {
          if (el && !foodImgsRef.current.includes(el))
            foodImgsRef.current.push(el);
        }}
        className="absolute max-w-[43%] min-w-fit w-full h-fit -left-41.25 -top-10 z-2"
        src={pizza1}
        alt="데코용 피자1"
      />
      <img
        ref={(el) => {
          if (el && !foodImgsRef.current.includes(el))
            foodImgsRef.current.push(el);
        }}
        className="absolute max-w-[43%] min-w-fit w-full h-fit -right-41.25 bottom-30  z-3"
        src={pizza2}
        alt="데코용 피자2"
      />
      <img
        ref={(el) => {
          if (el && !foodImgsRef.current.includes(el))
            foodImgsRef.current.push(el);
        }}
        className="absolute max-w-[40%] min-w-fit w-full h-fit -left-30 -bottom-40  z-2"
        src={tteokbokki}
        alt="데코용 떡볶이"
      />
      <img
        ref={(el) => {
          if (el && !foodImgsRef.current.includes(el))
            foodImgsRef.current.push(el);
        }}
        className="absolute max-w-[50%] min-w-fit w-full h-fit -right-60 top-5 z-2"
        src={chicken}
        alt="데코용 치킨"
      />
      <img
        className="absolute -left-30 top-0 min-w-460 z-1"
        src={line}
        alt="데코용 곡선"
      />
      <img
        className="absolute bottom-0 w-screen h-33.5 object-cover z-0"
        src={dot}
        alt="데코용 도트패턴"
      />
    </div>
  );
}

export default Home;
