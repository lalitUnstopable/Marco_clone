import React from "react";
import "../CSS/Footer.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

// import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  let data_1 = [
    {
      day: "Monday-Friday",
      time: "08.00 am-10.00 pm",
    },
    {
      day: "Saturday",
      time: "08.00 am-10.00 pm",
    },
    {
      day: "Sunday",
      time: "08.00 am-10.00 pm",
    },
  ];

  let data_2 = [
    {
      title:
        "56/8, los angeles, rochy beach, Santa monica, United states of america - 1205",
      number: "012-6532-568-9746",
    },
  ];

  let data_3 = [
    {
      title: "You can trust us. We only send promo offers, not a single spam.",
    },
  ];

  return (
    <>
      <div className="container_1">
        <div className="row row_11">
          <div className="head">
            <h6 className="heading">Opening Hours</h6>
            {data_1.map((val) => {
              return (
                <div className="col-md-12">
                  <div className="d-flex box">
                    <p style={{ fontSize: "12px", width: "30%" }}>{val.day}</p>
                    <p style={{ fontSize: "12px", marginLeft: "80px" }}>
                      {val.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="head">
            <h6 className="heading">Contact Us</h6>
            {data_2.map((val) => {
              return (
                <div className="col-md-12 col-12 head_22">
                  <p style={{ fontSize: "12px" }}>{val.title}</p>
                  <h4 style={{ color: "white" }}>{val.number}</h4>
                </div>
              );
            })}
          </div>
          <div className="head ">
            <h6 className="heading">Newsletter</h6>
            {data_3.map((val) => {
              return (
                <div className="col-md-12 head_33">
                  <p style={{ fontSize: "12px" }}>{val.title}</p>

                  <input
                    type="text"
                    className="input_size placeholder"
                    placeholder="Your Email address"
                  />
                  <BsFillArrowRightCircleFill className="icon" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row_22">
        <div className="row footer">
          <div className="col-md-6 col-12">
            <p className="content" style={{ fontSize: "12px" }}>
              Copyright ©2023 All rights reserved | This template is made with
              ❤️ by <span style={{ color: "red" }}>Colorlib</span>
            </p>
          </div>
          <div className="col-md-6 col-12 icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
