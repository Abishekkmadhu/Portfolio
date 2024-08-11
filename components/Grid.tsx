import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={getClassName(i)}
            img={item.img}
            imgClassName={item.imgClassName}
            
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export const getClassName = (index : number) => {
    if (index === 0 ) {
        return "md:col-span-3 md:row-span-2 lg:min-h-[60vh]";
      }
      if (index === 1 || index === 2) {
        return "md:col-span-2 md:row-span-1";
      }
      if (index === 3 || index === 5) {
        return "md:col-span-2 md:row-span-1";
      }
      if (index === 4) {
        return "md:col-span-3 md:row-span-2";
      }

      return "";
}

export default Grid;