// ✨ 커스텀 버튼 컴포넌트
import gsap from "gsap";

const CustomButton = ({ children, style, onClick }) => {
  // 버튼 스타일 지정 함수
  const buttonStyle = () => {
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
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, {
          y: -5,
          duration: 0.2,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          duration: 0.2,
        });
      }}
      className={
        buttonStyle() +
        "text-xl font-semibold rounded-full h-12.5 px-10 flex justify-center items-center cursor-pointer z-3"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
