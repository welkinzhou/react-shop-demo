import React, { FC } from "react";

interface Props {
  className: string;
}

const Section: FC<Props> = ({ className }) => {
  return (
    <div className={"py-[130px]" + " " + className}>
      <div className="container px-[15px] mx-auto">
        <div className="mx-[-15px] text-center">
          <div className="w-5/12 relative min-h-px px-[15px] inline-block float-none">
            <h1 className="mt-0 uppercase leading-[40px] text-[30px] mb-[20px]">
              We believe in coffee that tastes incredible
            </h1>
            <p className="mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
        </div>
        <div className="max-w-[960px] my-0 mx-auto mt-[65px] text-center flex">
          <div className="basis-1/3 px-[25px]">
            <img
              src="https://image.ibb.co/bKy6Db/coffee_item_2.png"
              className="w-[90%]"
            />
            <h2 className="tracking-[1px] text-[16px] uppercase font-semibold mt-[25px] mb-[15px]">
              Mocha latte
            </h2>
            <p className="m-0 leading-[23px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <div className="basis-1/3 px-[25px]">
            <img
              src="https://image.ibb.co/nN0WeG/coffee_item_1.png"
              className="w-[90%]"
            />
            <h2 className="tracking-[1px] text-[16px] uppercase font-semibold mt-[25px] mb-[15px]">
              Pour over
            </h2>
            <p className="m-0 leading-[23px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <div className="basis-1/3 px-[25px]">
            <img
              src="https://image.ibb.co/dHQa6w/coffee_item_3.png"
              className=" w-[90%]"
            />
            <h2 className="tracking-[1px] text-[16px] uppercase font-semibold mt-[25px] mb-[15px]">
              Espresso
            </h2>
            <p className="m-0 leading-[23px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <div className="mx-[-15px] row--margin text-center">
          <a
            href="#"
            className="text-white py-[10px] px-[20px] text-[11px] tracking-[1px] font-medium bg-[#daa37f] rounded-none text-center uppercase"
          >
            Full menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
