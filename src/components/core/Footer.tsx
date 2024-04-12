import React, { ReactNode, forwardRef } from "react";

interface Props {
  children?: ReactNode;
}
export type Ref = HTMLElement;

const Footer = forwardRef<Ref, Props>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="table w-full fixed bottom-0 left-0 z-[-1] min-h-96"
    >
      <div
        className="w-1/2 table-cell py-[100px] px-[140px] bg-left bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://image.ibb.co/mRGjDm/section_bg_7.jpg')",
        }}
      >
        <h2 className="uppercase leading-[40px] text-[30px] mb-[25px] text-white">
          COME ON IN!
        </h2>
        {/* <h3 className="tracking-[1px] text-[14px] uppercase font-semibold mb-[10px] text-[#daa37f]">
          Weekdays
        </h3>
        <p className="text-[#d7d7d7] mb-[25px]">08PM - 12AM</p>
        <h3 className="tracking-[1px] text-[14px] uppercase font-semibold mb-[10px] text-[#daa37f]">
          Weekends
        </h3>
        <p className="text-[#d7d7d7] mb-[25px]">12PM - 02AM</p> */}
        {/* <a href="#" className="btn">
          Browse menu
        </a> */}
      </div>
      <div className="w-1/2 table-cell py-[100px] px-[140px] bg-black">
        <h2 className="uppercase leading-[40px] text-[30px] mb-[25px] text-white">
          CONTACT
        </h2>
        {/* <h3 className="tracking-[1px] text-[14px] uppercase font-semibold mb-[10px] text-[#daa37f]">
          Phone
        </h3>
        <p className="text-[#d7d7d7] mb-[25px]">+(000) 111 222 333</p>
        <h3 className="tracking-[1px] text-[14px] uppercase font-semibold mb-[10px] text-[#daa37f]">
          Mail
        </h3>
        <p className="text-[#d7d7d7] mb-[25px]">address@mail.com</p>
        <h3 className="tracking-[1px] text-[14px] uppercase font-semibold mb-[10px] text-[#daa37f]">
          Address
        </h3>
        <p className="text-[#d7d7d7] mb-[25px]">
          543 TN, doula street
          <br />
          NY, New York
        </p> */}
      </div>
    </footer>
  );
});

export default Footer;
