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
    let textColor = `text-${data.color}`
    let bgColor = `bg-${data.color}`

  return (
    <div
      className={`w-full flex ${bgColor}/10 rounded-xl justify-between p-5 `}
    >
      <div className="flex gap-3">
        <div className="relative w-5 h-auto">
          <Image src={imgPath} alt="icon" fill object-fit="cover" />
        </div>
        <h3 className={`${textColor} font-extrabold text-lg`}>
          {data.category}
        </h3>
      </div>

      <p className="text-lightLavender font-extrabold text-lg">
        <span className="text-darkGrayBlue">{data.score}</span> / 100
      </p>
    </div>
  );
}
