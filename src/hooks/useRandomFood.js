import { foods } from "../data/foods";

const useRandomFood = () => {
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
};

export default useRandomFood;
