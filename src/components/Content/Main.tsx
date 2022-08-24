import React, { FC } from "react";
import { getRandomColor } from "../../utils/getColors";

interface IMain {
  currentBG: string;
  reload: () => void;
}

const Main: FC<IMain> = ({ currentBG, reload }) => {
  return (
    <div
      className="content-main"
      style={{ backgroundImage: `url(${currentBG})` }}
    >
      <button onClick={reload} style={{ background: getRandomColor() }}>
        Reload
      </button>
    </div>
  );
};

export default Main;
