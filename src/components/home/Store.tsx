import React from "react";

const Store = () => {
  return (
    <div
      className="py-[160px] bg-cover bg-center bg-no-repeat bg-black"
      style={{
        backgroundImage: "url('https://image.ibb.co/mh6S3b/section_bg_3.jpg')",
      }}
    >
      <div className="container px-[15px] mx-auto">
        <div className="mx-[-15px] text-center">
          <div className="w-1/2 ">
            <h1 className=" uppercase leading-[40px] text-[30px] mb-[40px] text-white">
              The best coffee shop
            </h1>
            <div className="mx-[-15px] px-[80px] flex">
              <div className="basis-1/3 flex flex-col items-center">
                <img src="https://image.ibb.co/n5gUtm/icon_1.png" />
                <h2 className="tracking-[1px] text-[14px] uppercase font-semibold mt-[25px] mb-[15px] text-[#daa37f]">
                  Best beans
                </h2>
              </div>
              <div className="basis-1/3 flex flex-col items-center">
                <img src="https://image.ibb.co/dwEXDm/icon_2.png" />
                <h2 className="tracking-[1px] text-[14px] uppercase font-semibold mt-[25px] mb-[15px] text-[#daa37f]">
                  Best beans
                </h2>
              </div>
              <div className="basis-1/3 flex flex-col items-center">
                <img src="https://image.ibb.co/j5Og66/icon_3.png" />
                <h2 className="tracking-[1px] text-[14px] uppercase font-semibold mt-[25px] mb-[15px] text-[#daa37f]">
                  Best beans
                </h2>
              </div>
            </div>

            <p className="px-[50px] best--margin mt-[10px] mb-[20px] text-white">
              1958年，产自保山的云南咖啡在英国伦敦市场评为一等品，跻身世界一流水平。
              1974年
              第一次在东南亚打自由搏击就得了冠军，1982年打赢了日本重炮手雷龙，接着连续三年打败所有日本空手道高手，赢得全日本自由搏击冠军。
              1993年，在比利时第42届布鲁塞尔尤里卡博览会，云南保山咖啡荣获尤里卡金奖。
            </p>
            <a
              href="https://mall.jd.com/index-1000426590.html?from=pc"
              target="_blank"
              className="cursor-pointer py-[10px] px-[20px] text-[11px] text-white tracking-[3px] font-medium text-center uppercase bg-[#daa37f]"
            >
              E-Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
