import Image from "next/image";

export default function ImageWithText({ module }) {
  return (
    <div className="w-full">
      <div className="">
        <h2>{module?.title}</h2>
        <p>{module?.text}</p>
      </div>
      <div className="">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
