// 🍔 음식 아이콘 컴포넌트

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import burger from "../assets/icons/burger.svg";
import dumpling from "../assets/icons/dumpling.svg";
import frenchFries from "../assets/icons/french-fries.svg";
import hotDog from "../assets/icons/hot-dog.svg";
import sate from "../assets/icons/sate.svg";

const FoodIcon = () => {
  const foodIconsRef = useRef();
  const [foodSrc, setFoodSrc] = useState(burger);
  const srcList = [burger, dumpling, frenchFries, hotDog, sate];

  useEffect(() => {
    if (!foodIconsRef.current) return;
    let tl = gsap.timeline({
      onComplete: () => {
        const index = srcList.findIndex((src) => src === foodSrc);
        if (index === srcList.length - 1) setFoodSrc(srcList[0]);
        else setFoodSrc(srcList[index + 1]);
      },
    });

    tl.to(foodIconsRef.current, { y: -15, ease: "back.out", duration: 1 }).to(
      foodIconsRef.current,
      { y: 0, delay: 2, ease: "back.in", duration: 1 }
    );
  }, [foodSrc, foodIconsRef.current]);

  useEffect(() => {}, [foodIconsRef]);

  return (
    <div className="relative flex w-14 h-14 items-center">
      <img
        ref={foodIconsRef}
        className="absolute inset-0 m-auto z-5"
        src={foodSrc}
        alt="음식 아이콘"
      />
    </div>
  );
};

export default FoodIcon;
