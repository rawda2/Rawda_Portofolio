import React from "react";
import img1 from "../../assets/api.png";
import img2 from "../../assets/bootstrap.png";
import img3 from "../../assets/css.png";
import img4 from "../../assets/js.png";
import img5 from "../../assets/html.png";
import img6 from "../../assets/git.png";
import img7 from "../../assets/react.png";
import img8 from "../../assets/figma.png";
// import img9 from "../../assets/c#.png"
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div className=" d-flex exp justify-content-center align-items-center flex-column mt-5" id="skills">
        <h2 className=" text-light">Skills</h2>

        <div className="main">
          <div className="left d-flex gap-4 py-3 flex-wrap justify-content-center align-items-center">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            {/* <img src={img9} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
