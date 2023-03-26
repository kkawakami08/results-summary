import Image from "next/image";
import icon from "../public/images/icon-reaction.svg";

// {
//   category: "Reaction",
//   score: 80,
//   icon: "reaction",
//   color: "lightRed",
// },

export default function SummaryPoints({ data }) {
  let imgPath = `../images/icon-${data.icon}.svg`;
  let textColor;
  let bgColor;

  switch (data.color) {
    case "lightRed":
      textColor = "text-lightRed font-extrabold text-lg";
      bgColor = "w-full flex bg-lightRed/10 rounded-xl justify-between p-5";
      break;
    case "orangeyYellow":
      textColor = "text-orangeyYellow font-extrabold text-lg";
      bgColor = "w-full flex bg-orangeyYellow/10 rounded-xl justify-between p-5";
      break;
    case "greenTeal":
      textColor = "text-greenTeal font-extrabold text-lg";
      bgColor = "w-full flex bg-greenTeal/10 rounded-xl justify-between p-5";
      break;
    case "cobaltBlue":
      textColor = "text-cobaltBlue font-extrabold text-lg";
      bgColor = "w-full flex bg-cobaltBlue/10 rounded-xl justify-between p-5";
      break;
  }

  return (
    <div className={bgColor}>
      <div className="flex gap-3">
        <div className="relative w-5 h-auto">
          <Image src={imgPath} alt="icon" fill object-fit="cover" />
        </div>
        <h3 className={textColor}>
          {data.category}
        </h3>
      </div>

      <p className="text-lightLavender font-extrabold text-lg">
        <span className="text-darkGrayBlue">{data.score}</span> / 100
      </p>
    </div>
  );
}
