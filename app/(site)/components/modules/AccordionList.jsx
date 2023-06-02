import Accordion from "../Accordion";
import BorderLines from "../BorderLines";
import RenderPortableText from "../RenderPortableText";
import Underline from "../Underline";

export default function AccordionList({ module }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-8 items-start mb-8">
      <BorderLines side={"left"} innerStyle="p-4">
        <h4>{module?.title}</h4>
      </BorderLines>
      <div>
        <div className="py-8">
          {module?.accordions?.map((accordion, i) => (
            <>
              <Accordion key={i} title={accordion?.question}>
                <RenderPortableText content={accordion?.content} />
              </Accordion>

              {i % 2 === 0 ? <Underline side="right" /> : <Underline />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
