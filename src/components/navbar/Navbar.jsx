import React, { useState } from "react";
import "./navbar.css";
import eth_logo from "../../assets/eth_logo.png";
import { MdLanguage } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Menu = () => {
  return (
    <>
      <p>
        <a className="hover" href="#UseEthereum">
          Use Ethereum
        </a>
      </p>
      <p>
        <a className="hover" href="#Learn">
          Learn
        </a>
      </p>
      <p>
        <a className="hover" href="#Developers">
          Developers
        </a>
      </p>
      <p>
        <a className="hover" href="#Enterprise">
          Enterprise
        </a>
      </p>
      <p>
        <a className="hover" href="#Community">
          Community{" "}
        </a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [togleMenu, setToglemenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_links">
        <div className="navbar_logo">
          <img src={eth_logo} alt="ethereum logo" />
        </div>

        <div className="navbar_link_container">
          <Menu />
        </div>

        <div className="navbar_languages">
          <MdLanguage color="white" size="25px" />
          <p>
            <a className="hover" href="#Language">Language</a>
          </p>
        </div>

        <div className="navbar_menu">
          {togleMenu ? (
            <AiOutlineCloseCircle
              color="white"
              size="30"
              onClick={() => setToglemenu(false)}
            />
          ) : (
            <AiOutlineMenuFold
              color="white"
              size="30"
              onClick={() => setToglemenu(true)}
            />
          )}
          {togleMenu && (
            <div className="navbar_menu_container scale-up-center">
              <div className="navbar_menu_container_links">
                <Menu />
              </div>
              <div className="navbar_menu_container_links_language ">
                <p>
                  <a className="hover" href="#Language">Language</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
