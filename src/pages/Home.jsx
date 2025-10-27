// 🏠 Home Page

import CustomButton from "../components/CustomButton";

function Home() {
  return (
    <div className="h-screen w-screen bg-light-yellow">
      <div className="flex flex-col items-center">
        <div className="relative w-112.5 flex justify-center mb-7">
          <h1 className="w-fit text-[80px] font-black text-point-brown z-2">
            랜덤메뉴추천
          </h1>
          <div className="absolute bottom-2 bg-point-yellow/80 w-112.5 h-14.5"></div>
        </div>
        <p className="whitespace-pre-line font-light text-lg/6 text-center mb-12.5">
          오늘 뭐 먹을지 고민되시나요?{"\n"}취향에 맞는 메뉴를 쉽고 빠르게
          추천해드립니다.
        </p>
        <CustomButton style={"default"} onClick={() => {}}>
          추천받으러가기
        </CustomButton>
      </div>
    </div>
  );
}

export default Home;
