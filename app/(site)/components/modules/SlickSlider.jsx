"use client";
import Image from "next/image";

export default function SlickSlider({ module }) {
  return (
    <div className="py-40 px-24 green-gradient" datatype="slickSlider">
      <h3 className="font-chivo font-black text-orangeAccent">{module?.title}</h3>
      <div className="flex gap-10 justify-around items-center">
        {module?.images?.map((image, i) => (
          <div key={i} className="pt-24">
            <Image
              src={image?.url}
              width={200}
              height={200}
              alt={image?.alt}
              className="rounded"
              placeholder={image?.blurDataURL && "blur"}
              blurDataURL={image?.blurDataURL}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
