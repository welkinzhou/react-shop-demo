import React, { FC, ReactNode } from "react";

interface Props {
  url: string;
  extClassName?: string;
  children?: ReactNode;
}

const FixedBg: FC<Props> = ({ extClassName, url, children }) => {
  return (
    <div
      className={`bg-center bg-cover bg-fixed bg-no-repeat ${extClassName}`}
      style={{
        backgroundImage: `url('${url}')`,
      }}
    >
      {children}
    </div>
  );
};

export default FixedBg;
