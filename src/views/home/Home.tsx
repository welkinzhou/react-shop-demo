import React, { useEffect, useRef, useState } from "react";

import Footer from "@/components/core/Footer";
import Banner from "@/components/home/Banner";
// import Section from "@/components/home/Section";
import Story from "@/components/home/Story";
import Great from "@/components/home/Great";
import Store from "@/components/home/Store";

const Home = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const height = footerRef.current!.offsetHeight;
    setFooterHeight(height);
  }, [footerRef]);

  return (
    <>
      <Banner />
      <Story />
      <Great />
      <Store />

      <div
        className="fake-footer"
        style={{ height: footerHeight + "px" }}
      ></div>

      <Footer ref={footerRef} />
    </>
  );
};

export default Home;
