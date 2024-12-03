import React from 'react'
import rest from "../../assets/rest.jpeg"
import devfolio from "../../assets/devfolio.jpeg"
import mealfy from "../../assets/mealfy.jpeg"
import bookmark from "../../assets/bookmark.jpeg"
import weather from "../../assets/weather.jpeg"
import todo from "../../assets/todo.jpeg"
import "./Prog.css"

export default function Proj() {
  return (
    <>
    <div className="proj text-center mt-5" id="projs">
        <h2 className=' text-light'>Projects </h2>
        <div className="projects d-flex flex-wrap justify-content-center align-items-center gap-5 mt-5">
          
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={rest} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>Resturant WebSite</h3>
                <p className=' text-light text-start'>Modern and fully responsive restaurant website template designed to create an elegant online presence for restaurants, cafes, or any food-related business. The template is built with clean, semantic HTML, CSS, and JavaScript, ensuring an optimal viewing experience across all devices, from desktops to smartphones.</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/Responsive_Resturant/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/Responsive_Resturant.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={devfolio} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>Developer Portofolio </h3>
                <p className=' text-light text-start'>A responsive developer portfolio built with HTML, CSS, JavaScript, Bootstrap, Typed.js, and Swiper.js. It features a sleek, adaptable design that works on any device. The portfolio includes smooth scrolling, text animations with Typed.js, and interactive project sliders using Swiper.js, all while maintaining a clean and professional look.</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/BootStrap_Responsive_Devfolio/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/BootStrap_Responsive_Devfolio.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={mealfy} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>MealFy</h3>
                <p className=' text-light text-start'>Mealify is a sleek, responsive landing page for restaurants, featuring both dark and light themes. It offers intuitive navigation with sections for menus, chef specials, and contact information. The design focuses on user-friendly experiences across all devices, with high-quality visuals, fast loading times, and smooth theme transitions.</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/MealiFy/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/MealiFy.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={bookmark} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>Websites Marker</h3>
                <p className=' text-light text-start'>The Bookmark Manager is a responsive web application built with HTML, CSS, JavaScript, and Bootstrap, allowing users to efficiently manage their favorite websites. It supports full CRUD operations—adding, visiting, editing, and deleting bookmarks,The site features a dynamic search function for quickly filtering bookmarks</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/BookMarker/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/BookMarker.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={weather} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>Weather App</h3>
                <p className=' text-light text-start'>This web app is a weather application that allows users to search for the weather conditions of a specific city using an API. It dynamically displays the city's temperature in Celsius or Fahrenheit, humidity, air pressure, wind speed, and a weather icon. Users can switch between light and dark modes, enhancing the viewing experience.</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/Weather_App/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/Weather_App.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
            <div className="project col-md-5 col-lg-3 col-9 rounded-3 shadow">
                <img src={todo} alt="" className='w-100'/>
                <div className="caption px-2  pt-4 py-3">
                <h3 className=' text-light text-start'>ToDo List</h3>
                <p className=' text-light text-start'>This web app is a To-Do List application that allows users to manage their daily tasks. It dynamically displays a list of tasks that users can add, edit, or delete. Users can mark tasks as complete or incomplete, and filter tasks based on their status. Tasks are saved locally, ensuring persistence even after a page refresh.</p>
                <div className="btns d-flex justify-content-start">
                  <button><a href="https://rawda2.github.io/Responsive_Resturant/" target="_blank">Demo</a></button>
                  <button><a href="https://github.com/rawda2/Responsive_Resturant.git" target="_blank">Source Code</a></button>

                </div>
                </div>
                
            </div>
        </div>
    </div>
    
    </>
  )
}
