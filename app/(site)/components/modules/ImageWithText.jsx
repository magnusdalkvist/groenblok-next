import Image from "next/image";

export default function ImageWithText({ module }) {
  return (
    <div className="w-full flex justify-between container my-24" datatype="imagesWithText">
      <Image
        src={module?.leftImage.url}
        width={module.leftImage?.width}
        height={module.leftImage?.height}
        className="object-cover w-[300px]"
      />
      <div className="max-w-2xl">
        <h2 className="text-4xl mb-5">{module?.title}</h2>
        <p>{module?.text}</p>
      </div>
    </div>
  );
}
