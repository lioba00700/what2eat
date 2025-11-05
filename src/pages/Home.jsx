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
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // 글자 하이라이터 div Ref
  const highlightboxRef = useRef();
  // 데코용 음식 이미지 Ref
  const foodImgsRef = useRef([]);
  // 화면 전환용 가림막 Ref
  const transitionScreenRef = useRef({ left: null, right: null });

  useEffect(() => {
    if (!highlightboxRef.current || !foodImgsRef.current) return;
    // 왼쪽에서 오른쪽으로 width 나타남
    gsap.fromTo(
      highlightboxRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left", duration: 0.4 }
    );

    // 데코용 음식 이미지 배열
    const images = foodImgsRef.current;
    // 순차적 애니메이션 효과 위해 타임라인 사용
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

  // 추천받으러가기 버튼 클릭 시 실행되는 함수
  const onClickRecommend = () => {
    if (!transitionScreenRef.current.left || !transitionScreenRef.current.right)
      return;
    gsap.to(transitionScreenRef.current.left, {
      x: "100%",
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(transitionScreenRef.current.right, {
      x: "-100%",
      duration: 0.5,
      ease: "power1.inOut",
    });
    setTimeout(() => {
      navigate("food");
    }, 800);
  };

  return (
    <div className="select-none h-screen w-screen bg-light-yellow relative overflow-hidden">
      <div
        ref={(el) => {
          if (el) transitionScreenRef.current.left = el;
        }}
        className="absolute w-[50%] top-0 -left-[50%] h-screen bg-point-yellow z-10"
      ></div>
      <div
        ref={(el) => {
          if (el) transitionScreenRef.current.right = el;
        }}
        className="absolute w-[50%] top-0 -right-[50%] h-screen bg-point-yellow z-10"
      ></div>
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
        <CustomButton style={"default"} onClick={onClickRecommend}>
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
        className="absolute -left-30 top-0  min-w-460 z-1"
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
