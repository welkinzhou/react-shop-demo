import React from "react";
import FixedBg from "../ui/FixedBg";

const Great = () => {
  return (
    <FixedBg
      extClassName="py-[130px] bg-white"
      url="https://image.ibb.co/kvDRDb/section_bg_10.jpg"
    >
      <div className="container px-[15px] mx-auto">
        <div className="mx-[-15px]">
          <div className="w-10/12 mx-auto">
            <div className=" ml-[40%]">
              <h2 className="text-[22px] leading-[30px] mb-[15px]">
                GREAT COFFEE
              </h2>
              <p className="mb-[40px] text-[#767676] leading-[23px]">
                打破云南咖啡豆被动局面，提升豆子品质，提升精品率，是必经之路。云南咖农是有能力做精品豆的，2016年，美国精品咖啡协会前主席Ted
                Lingle为一款云南咖啡打出87分的高分，而超过80分，即为精品级别。
              </p>
              <a
                href="http://www.moa.gov.cn/xw/qg/202404/t20240407_6453074.htm"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer py-[10px] px-[20px] text-[11px] text-white tracking-[3px] font-medium text-center uppercase bg-[#daa37f]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </FixedBg>
  );
};

export default Great;
