import React from "react";
import FixedBg from "../ui/FixedBg";

const banner = () => {
  return (
    <FixedBg
      url="/src/assets/header-bg.jpg"
      extClassName="bg-black table w-full h-screen relative"
    >
      <div className="absolute top-0 left-0 w-full table h-full text-center bg-black/40 animation-fade">
        <div className="table-cell align-middle">
          <h1 className="text-[56px] text-white mt-0 mb-[20px] tracking-[1px] font-medium animate-[opacity_1s]">
            ENJOY COFFEE
          </h1>
          <p className="text-[14px] text-white m-0 mb-[18px] animate-[opacity_3s]">
            Since 1892, Zhu Ku La, Bin Chuan
          </p>
          <span className="cursor-pointer py-[10px] px-[20px] text-[11px] text-white tracking-[3px] font-medium text-center uppercase bg-[#daa37f] animate-[opacity_3s]">
            SHOP
          </span>
        </div>
        <img
          className="absolute bottom-[15px] left-1/2 ml-[-12px] cursor-pointer animate-[opacity_3s]"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo="
        />
      </div>
    </FixedBg>
  );
};

export default banner;
