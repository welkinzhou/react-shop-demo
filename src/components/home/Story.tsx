import React from "react";

const Story = () => {
  return (
    <>
      <div className="py-[130px] bg-[#1d140b] pb-0">
        <div className="container px-[15px] mx-auto">
          <div className="mx-[-15px] text-center">
            <div className="w-4/6 mx-auto">
              <h1 className="leading-[40px] uppercase text-[30px] mb-[20px] text-white">
                The Story
              </h1>
              <p className="text-white px-[60px]">
                从1892年法国传教士田德在宾川朱苦拉村种下中国大陆第一株咖啡苗起，适宜的地理气候让云南逐步成为全国最大的咖啡产地，咖啡种植面积、产量和农业产值占全国98%以上。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-0 pb-[52%] bg-center bg-cover bg-no-repeat bg-[#1d140b]"
        style={{
          backgroundImage:
            "url('https://image.ibb.co/kc6XKG/section_bg_12.jpg')",
        }}
      ></div>
    </>
  );
};

export default Story;
