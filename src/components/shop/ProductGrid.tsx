import { CoffeeData } from "@/mock/products";
import React, { FC, useRef } from "react";
import { message } from "antd";
import { useAppDispatch } from "@/hooks/index";
import { increment } from "@/store/slices/cart";

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

  const imageLoaded: React.ReactEventHandler<HTMLImageElement> = (event) => {
    (event.target as HTMLImageElement).style.opacity = "1";
  };

  const style = { "--translate-base": 10 } as React.CSSProperties;

  const [messageApi, contextHolder] = message.useMessage();
  const handlePurchase = () => {
    void messageApi.open({
      type: "warning",
      content: "哥们, 你真买啊!",
    });
  };

  const dispatch = useAppDispatch();

  const handleCartAddition = (data: CoffeeData) => {
    console.log("good", data);
    dispatch(increment(data));
  };

  return (
    <>
      {contextHolder}
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
          <h2 className="text-[14px] my-[6px]">{data.headline}</h2>
          <p className="text-[12px] text-[#767676]">{data.description}</p>
          <div className="rounded-es-full overflow-hidden text-[14px] py-[6px] mr-[4px] select-none">
            <div
              className="float-right pr-[10px] pl-[6px] py-[3px] bg-orange-600 text-zinc-100 rounded-e-full cursor-pointer"
              onClick={handlePurchase}
            >
              购买
            </div>
            <div
              className="float-right pr-[4px] pl-[10px] py-[3px] bg-orange-500 text-zinc-100 rounded-s-full cursor-pointer"
              onClick={() => handleCartAddition(data)}
            >
              加入购物车
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
