import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Contact.css";
import Footer from './Footer';
 
const Contact = () => {
  return (
    <>
      {/* 1st div */}
      <div className="about_back_image">
        <div className="box_1">
          <h1 className="heading1">Contact Us</h1>
          <div className="smash">
            <NavLink to="/" className="nav-link  text-white">
              Home
            </NavLink>
            <i className="bi bi-arrow-right arrow"></i>
            <NavLink to="/about" className="nav-link  text-white">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* 2nd div */}

      <div className="iframe">
       <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47364.22801447266!2d-75.94478598718416!3d42.10181108153633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89daef72dfadb7d1%3A0x68f9703f7ed337f!2sBinghamton%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1687966630920!5m2!1sen!2sin"
        frameborder="0">
        </iframe>
       </div>

       {/* <div className="row">
         <div className="col-md-4">
           <div className="1st">
           <i class="bi bi-house"></i>
            
           </div>
           <div className="2nd"></div>
           <div className="3rd"></div>
         </div>
         <div className="col-md-4"></div>
         <div className="col-md-4"></div>
       </div> */}

      <div className="contact_footer" >
        <Footer />
      </div>
       
     
    </>
  );
};

export default Contact;
