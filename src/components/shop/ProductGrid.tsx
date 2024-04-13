import { CoffeeData } from "@/views/shop/mock";
import React, { FC, useRef } from "react";

interface Props {
  data: CoffeeData;
}

const ProductGrid: FC<Props> = ({ data }) => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const el = slideRef.current!;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2)) + ""
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2)) + ""
    );
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    slideRef.current!.style.setProperty("--x", "0");
    slideRef.current!.style.setProperty("--y", "0");
  };

  // const handleSlideClick: React.MouseEventHandler<HTMLDivElement> = () => {
  //   console.log(data);
  // };

  const imageLoaded: React.ReactEventHandler<HTMLImageElement> = (event) => {
    (event.target as HTMLImageElement).style.opacity = "1";
  };

  const style = { "--translate-base": 10 } as React.CSSProperties;

  return (
    <div
      ref={slideRef}
      className="w-[320px] px-[10px] pb-[18px] xl:basis-1/3 2xl:basis-1/4"
    >
      <div
        style={style}
        className="pl-[100px] pt-[100%] relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="absolute top-0 left-0 h-full w-full object-cover opacity-0 
          transition-transform origin-center 
          hover:scale-110 
          hover:translate-x-[calc(var(--x)/var(--translate-base)*1px)] 
          hover:translate-y-[calc(var(--y)/var(--translate-base)*1px)]"
          alt={data.headline}
          src={data.url}
          onLoad={imageLoaded}
        />
      </div>

      <div className="w-full py-[16px]">
        <h2 className="font-12px text-[#767676]">{data.description}</h2>
      </div>
    </div>
  );
};

export default ProductGrid;
