import React from "react";
import Zuri_icon from "../img/Zuri_icon.png";
import I4G from "../img/I4G.png";

function Footer() {
  return (
    <>
      <div className='container'>
        <div className='footerContent'>
          <div className='row d-flex justify-content-between'>
            <div className='col-sm-3'>
              <img src={Zuri_icon} />
            </div>

            <div className='col'>
              <div className='footerText'>HNG Internship 9 Frontend Task</div>
            </div>

            <div className='col-sm-2'>
              <img src={I4G} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
