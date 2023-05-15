import Hero from "./modules/Hero";
import ShopSection from "./modules/ShopSection";
import SlidingInfoCards from "./modules/SlidingInfoCards";
import NumberedInfoList from "./modules/NumberedInfoList";
import Events from "./modules/Events";

export default function RenderModules({ modules, events }) {
  // console.log(modules);
  return (
    <>
      {modules.map((module, i) => {
        return <Module module={module} events={events} key={i}></Module>;
      })}
    </>
  );
}

function Module({ module, events }) {
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
      return <Events module={module} events={events} />;
    default:
      return null;
  }
}
