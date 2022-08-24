import React, { FC } from "react";

interface IRight {
  currentBG: string;
}

const Right: FC<IRight> = ({ currentBG }) => {
  return (
    <div
      className="content-right"
      style={{ backgroundImage: `url(${currentBG})` }}
    >
      Right
    </div>
  );
};

export default Right;
