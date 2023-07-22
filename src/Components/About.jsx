import React from 'react'
import { NavLink } from 'react-router-dom';
import "../CSS/About.css";
import Footer from './Footer';

const About = () => {

  let blog_data = [
    { 
      img:"https://preview.colorlib.com/theme/marco/img/about/s1.jpg",
      date:"10 Jan 2018",
      title:"Bread Fruit Cheese Sandwich",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://preview.colorlib.com/theme/marco/img/about/s2.jpg",
      date:"10 Jan 2018",
      title:"Beef Cutlet with Spring Oninon",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://preview.colorlib.com/theme/marco/img/about/s3.jpg",
      date:"10 Jan 2018",
      title:"Meat with sauce & Vegetables",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    }
  ]
  return (
    <>
    {/* 1st div */}
    <div className="about_back_image">
        <div className="box_1">
            <h1 className="heading1">About Us</h1>
            <div className="smash">
            <NavLink to="/" className="nav-link  text-white">Home</NavLink> 
            <i className="bi bi-arrow-right arrow"></i>
            <NavLink to="/about" className="nav-link  text-white">About Us</NavLink>
            </div>
        </div>
      </div>

      {/* 2nd div */}

      <div className="container-fluid cont_21">
        <div className="row">
          <div className="col-md-6 col-12 col_21">
            <h2>About Our Story</h2>
            <p>
              Who are in extremely love with eco friendly system. Lorem ipsum
              dolor <br></br> sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor<br></br>incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim<br></br> veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea<br></br>{" "}
              commodo consequat.
            </p>
            <button className="btn_1">VIEW FULL MENU</button>
          </div>

          <div className="col-md-6 col-12 col_22"></div>
        </div>
      </div>

      {/* 3rd div */}

      <div className="div_81">
        <h1>What Kind of Services we Offer</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et <br></br>
        </p>
        <div className="row">
        {
          blog_data.map((val)=>{
            return (
              <div className="col-md-3 blog1">
                  <div className="card" style={{width: "17 rem"}}>
                    <img src={val.img} className="card-img-top" alt="..." />
                    <div className="card-body card_body">
                      <p className="card-text p_1" >{val.title}</p>
                      <p className="card-text">{val.content}</p>
                     
                    </div>
                  </div>
              </div>
            )
          })
        }
         </div>
      </div>

   {/* 4th div */}

     

       <div className="about_footer">
      <Footer />
      </div> 
      

    </>
  )
}

export default About