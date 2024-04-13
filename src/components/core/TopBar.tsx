import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useAppSelector } from "@/hooks/index";

const TopBar = () => {
  const count = useAppSelector((state) => state.cart.value);
  return (
    <div className="h-[55px] leading-[55px] bg-zinc-700 text-white relative z-20">
      <div className="w-4/6 mx-auto flex justify-between">
        <div className="text-[14px] font-light">欢迎选购</div>
        <div>
          <Badge count={count} size="small">
            <ShoppingCartOutlined
              style={{ fontSize: "26px", color: "white" }}
            />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
