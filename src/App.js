import React from "react";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";

import Features from "./container/features/Features";
import Header from "./container/header/Header";
import Blog from "./container/blog/Blog";
import WhatEthereum from "./container/whatEthereum/WhatEhereum";
import Possibility from "./container/possibility/Possibility";
import Footer from "./container/footer/Footer";

import './app.css'

const App = () => {
  return (
    <div>
      <div className="top_part gradient__bg">
        <Navbar />
        <Header />

      </div>
      <Brand />
      <WhatEthereum />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
