import React from "react";
import Zuri_icon from "../img/Zuri_icon.png";
import I4G from "../img/I4G.png";

function Footer() {
  return (
    <>
      <div className='footerLine'></div>
      <div className='container-fluid mt-3 pb-5'>
        <div className='footerContent'>
          <div className='d-flex justify-content-between flex-wrap'>
            <img src={Zuri_icon} alt='zuri_icon' />
            <footer> HNG Internship 9 Frontend Task</footer>
            <img src={I4G} alt='ingressive icon' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
