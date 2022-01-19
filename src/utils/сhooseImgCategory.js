import { BsCart4, BsGear, BsLightbulb } from "react-icons/bs";

export function сhooseImgCategory(category) {
  let imgCategory = <BsCart4 />;
  if (category === "Random Tought") {
    return (imgCategory = <BsGear />);
  }
  if (category === "Idea") {
    return (imgCategory = <BsLightbulb />);
  }
  return imgCategory;
}
