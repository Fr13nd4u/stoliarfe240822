import React, { FC } from "react";

interface ILeft {
  currentBG: string;
}

const Left: FC<ILeft> = ({ currentBG }) => {
  return (
    <div
      className="content-left"
      style={{ backgroundImage: `url(${currentBG})` }}
    >
      Left
    </div>
  );
};

export default Left;
