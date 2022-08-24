import React, { FC } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
