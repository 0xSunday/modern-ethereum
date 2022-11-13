import React from "react";
import "./header.css";
import headerImage from "../../assets/header-img.png";
const Header = () => {
  return (
    <div className="header_main">
      <div className="header">
        <div className="header_content">
          <h1 className="gradient__text">Welcome to Ethereum </h1>
          <p>
            Ethereum is the community-run technology powering the cryptocurrency
            ether (ETH) and thousands of decentralized applications.
          </p>
          <div className="header_content_input">
            <input type="email" placeholder="Search" />
            <button type="button">Enter</button>
          </div>
        </div>
        <div className="header_image">
          <img src={headerImage} alt="etherem" />
        </div>
      </div>
      <div className="explore_button">
        <button className="hover">Explore Ethereum</button>
      </div>
    </div>
  );
};

export default Header;
