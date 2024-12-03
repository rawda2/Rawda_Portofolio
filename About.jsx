import React from 'react'
import image from "../../assets/about.png"
import './About.css'

export default function About() {
  return (
    <>
     <div className="about mx-auto rounded justify-content-center align-items-center flex-column py-4 mt-5" id="about">
        <header>
            <h2>
                About
            </h2>
        </header>
        <div className="main d-flex" >
        <div className="left col-md-6">
            <img src={image} alt="" className='w-100' />

        </div>
        <div className="right col-md-6 py-5 px-2">
            <div className="me">
                <h5>{`<`}_{'>'} Senior Computer Science Student</h5>
            </div>

            <div className="me">
                <h5>{`<`}_{'>'} Front End Developer</h5>
            </div>
            

        </div>
        </div>
     
     </div>

    </>
  )
}
