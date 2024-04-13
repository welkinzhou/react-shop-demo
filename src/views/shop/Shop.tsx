import React from "react";

import TopBar from "@/components/core/TopBar";

import ProductGrid from "@/components/shop/ProductGrid";
import data from "./mock";

const Shop = () => {
  return (
    <div className="h-screen bg-slate-100">
      <TopBar />
      <div className="fixed top-0 left-0 bottom-0 right-0 pt-40 overflow-y-scroll">
        <div className="w-[1000px] mx-auto flex flex-wrap">
          {data.map((item) => {
            return <ProductGrid data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
