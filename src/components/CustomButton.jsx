// ✨ 커스텀 버튼 컴포넌트
import {gsap} from 'gsap'

const CustomButton = ({ children, style, onClick }) => {
  // 버튼 스타일 지정 함수
  const buttonStyle = () => {
    console.log("??");
    switch (style) {
      case "white":
        return "text-point-brown bg-white ";
      case "default":
      default:
        return "text-white bg-point-brown ";
    }
  };

  return (
    <button
      onMouseEnter={()=>{
        gsap
      }}
      className={
        buttonStyle() +
        "text-xl font-semibold rounded-full h-12.5 px-10 flex justify-center items-center cursor-pointer"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
