import Image from "next/image";
import icon from "../public/images/icon-reaction.svg";
import testResults from "../data.js";

export default function SummaryPoints() {
  return (
    <div className="w-full flex bg-lightRed/10 rounded-xl justify-between p-5">
      <div className="flex gap-3">
        <div className="relative w-5 h-auto">
          <Image src={icon} alt="icon" fill object-fit="cover" />
        </div>
        <h3 className="text-lightRed font-extrabold text-lg">Reaction</h3>
      </div>

      <p className="text-lightLavender font-extrabold text-lg">
        <span className="text-darkGrayBlue">80</span> / 100
      </p>
    </div>
  );
}
