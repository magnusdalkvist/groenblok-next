import Accordion from "../Accordion";
import BorderLines from "../BorderLines";
import RenderPortableText from "../RenderPortableText";
import Underline from "../Underline";

export default function AccordionList({ module }) {
  return (
    <div className="mt-[140px]">
      <BorderLines className="w-[10%]">
        <h4>{module?.title}</h4>
      </BorderLines>
      <div>
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
  );
}
