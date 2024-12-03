import React from "react";
import { ReactTyped } from "react-typed";
import image  from "../../assets/home.png"
import "./Home.css"
export default function Home() {
  return (
    <>
      <div className=" container-fluid home d-flex justify-content-between align-items-center" id="home">
        <div className="left col-md-6 p-5 col-12">
          <h1>
            {" "}
            <ReactTyped
              strings={["HI , I'm Rawda"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
          <p>
          A Front-End Developer designs and builds user-friendly, responsive interfaces using HTML, CSS, and JavaScript. They leverage modern frameworks like ReactJs apply CSS libraries such as Tailwind or Bootstrap, and ensure cross-browser compatibility. Additional techniques include performance optimization, version control with Git, and implementing animations with tools like GSAP or Framer Motion to enhance user experience.
          </p>
          <button className="btnC">
            <a href="https://api.whatsapp.com/send?phone=201100241855"  target="_blank" className="text-light text-decoration-none">Contact Me</a>
          </button>
        </div>
        <div className="right col-md-6 pt-5 col-12">
            <img src={image} alt="" className="ms-5"/>
        </div>

      </div>
    </>
  );
}
