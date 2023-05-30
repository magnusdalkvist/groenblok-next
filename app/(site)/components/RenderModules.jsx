import Hero from "./modules/Hero";
import ShopSection from "./modules/ShopSection";
import SlidingInfoCards from "./modules/SlidingInfoCards";
import NumberedInfoList from "./modules/NumberedInfoList";
import Events from "./modules/Events";
import SkewedImagesWithText from "./modules/SkewedImagesWithText";
import ImageWithText from "./modules/ImageWithText";
import SlickSlider from "./modules/SlickSlider";
import InstagramFeedComponent from "./modules/InstagramFeedComponent";
import AccordionList from "./modules/AccordionList";
import Projects from "./modules/Projects";

export default function RenderModules({ modules }) {
  return (
    <>
      {modules?.map((module, i) => {
        return <Module module={module} key={i}></Module>;
      })}
    </>
  );
}

function Module({ module }) {
  switch (module._type) {
    case "module.hero":
      return <Hero module={module} />;
    case "module.slidingInfoCards":
      return <SlidingInfoCards module={module} />;
    case "module.shopSection":
      return <ShopSection module={module} />;
    case "module.numberedInfoList":
      return <NumberedInfoList module={module} />;
    case "module.events":
      return <Events module={module} />;
    case "module.projects":
      return <Projects module={module} />;
    case "module.skewedImagesWithText":
      return <SkewedImagesWithText module={module} />;
    case "module.imageWithText":
      return <ImageWithText module={module} />;
    case "module.slickSlider":
      return <SlickSlider module={module} />;
    case "module.instagramFeedComponent":
      return <InstagramFeedComponent module={module} />;
    case "module.accordionList":
      return <AccordionList module={module} />;
    default:
      return null;
  }
}
