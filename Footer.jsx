import React from "react";
import "./Footer.css"
export default function Footer() {
  return (
    <>
      <footer className=" mt-5 d-flex justify-content-around align-items-center flex-wrap py-4 " id="footer">
        <div className="left text-light col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
          <h3>Contact Me</h3>
          <p>Feel Free To reach out!</p>
        </div>
        <div className="right text-light col-md-6 col-12 ">
           <div className="contact d-flex gap-1 justify-content-center align-items-center">
           <i className="fa-regular fa-envelope"></i>    
           <p><a className="text-light text-decoration-none mt-3 d-block" href="mailto:ashrawda@gmail.com">ashrawda@gmail.com</a></p>       
           </div>
           <div className="contact d-flex gap-1 justify-content-center align-items-center">
           <i className="fa-solid fa-brands fa-linkedin"></i>    
           <p><a className="text-light text-decoration-none mt-3 d-block" href="https://www.linkedin.com/in/rawda-ashor-168250304/" target="_blank">https://www.linkedin.com/in/rawda-ashor-168250304/</a></p>       
           </div>
           <div className="contact d-flex gap-1 justify-content-center align-items-center">
           <i className="fa-solid fa-brands fa-github"></i>    
           <p><a className="text-light text-decoration-none mt-3 d-block" href="https://github.com/rawda2" target="_blank">https://github.com/rawda2</a></p>       
           </div>
        </div>
      </footer>
    </>
  );
}
