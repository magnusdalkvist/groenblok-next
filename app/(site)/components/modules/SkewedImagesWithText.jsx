import Image from "next/image";
import BorderLines from "../BorderLines";

export default function ImageWithText({ module }) {
  return (
    <div className="w-full">
      <BorderLines className="">
        <h2>{module?.title}</h2>
        <p>{module?.text}</p>
      </BorderLines>
      <div className="">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
