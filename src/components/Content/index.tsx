import React, { FC, useCallback, useEffect, useState } from "react";

import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

import "./Content.css";
import { getRandomImg } from "../../utils/getImages";

const Content: FC = () => {
  const [currentBGMain, setCurrentBGMain] = useState(getRandomImg());
  const [currentBGLeft, setCurrentBGLeft] = useState(getRandomImg());
  const [currentBGRight, setCurrentBGRight] = useState(getRandomImg());

  const reload = useCallback(() => {
    setCurrentBGMain(getRandomImg());
    setCurrentBGLeft(getRandomImg());
    setCurrentBGRight(getRandomImg());
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      reload();
    }, 5200);

    return () => clearTimeout(timeout);
  });

  return (
    <main className="content">
      <Left currentBG={currentBGLeft} />
      <Main currentBG={currentBGMain} reload={reload} />
      <Right currentBG={currentBGRight} />
    </main>
  );
};

export default Content;
