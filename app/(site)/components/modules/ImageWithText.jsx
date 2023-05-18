import Image from "next/image";

export default function ImageWithText({ module }) {
  return (
    <div className="w-full relative" datatype="hero">
      <Image
        src={module?.backgroundImage?.url}
        alt={module?.backgroundImage?.alt}
        className="object-cover h-full w-full"
        placeholder="blur"
        blurDataURL={module?.backgroundImage?.blurDataURL}
        //prevents image from stretching in weird ways
        priority={true}
      />
      <div className="">
        <h2>{module?.title}</h2>
        <p>{module?.text}</p>
      </div>
    </div>
  );
}
