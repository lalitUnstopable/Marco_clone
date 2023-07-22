import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';
import "../CSS/Menu.css";


const Menu = () => {

  var obj = [
    "All Menu",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Budget Meal",
    "Buffet",
  ];

  let emp_2 = [
    {
      name: "Cappuccion",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Mocha",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  let emp_3 = [
    {
      name: "Piccolo Latte",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  let emp_4 = [
    {
      name: "Americano",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  let emp_5 = [
    {
      name: "Macchiato",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  let emp_6 = [
    {
      name: "Ristretto",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  var emp_1 = [
    {
      name: "Cappuccion",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Macchiato",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Piccolo Latte",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Americano",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Mocha",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
    {
      name: "Ristretto",
      title:
        "Usage of the Internet is becoming more common due to rapid advance.",
      price: 49,
    },
  ];

  let Image_Data_1 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g1.jpg",
    },
    {
      img: "https://preview.colorlib.com/theme/marco/img/g2.jpg",
    },
    {
      img: "https://preview.colorlib.com/theme/marco/img/g3.jpg",
    },
    {
      img: "https://preview.colorlib.com/theme/marco/img/g6.jpg",
    },
    {
      img: "https://preview.colorlib.com/theme/marco/img/g5.jpg",
    },
  ];

  let Image_Data_2 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g1.jpg",
    },
    {
      img: "https://preview.colorlib.com/theme/marco/img/g4.jpg",
    },
  ];

  let Image_Data_3 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g5.jpg",
    },
  ];

  let Image_Data_4 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g2.jpg",
    },
  ];

  let Image_Data_5 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g3.jpg",
    },
  ];

  let Image_Data_6 = [
    {
      img: "https://preview.colorlib.com/theme/marco/img/g6.jpg",
    },
  ];

  let blog_data = [
    { 
      img:"https://preview.colorlib.com/theme/marco/img/b1.jpg",
      date:"10 Jan 2018",
      title:"Cooking Perfect Fried Rice in minutes",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://preview.colorlib.com/theme/marco/img/b2.jpg",
      date:"10 Jan 2018",
      title:"Secret of making Heart Shapped eggs",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://preview.colorlib.com/theme/marco/img/b3.jpg",
      date:"10 Jan 2018",
      title:"How to check steak if it is tender or not",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://preview.colorlib.com/theme/marco/img/b4.jpg",
      date:"10 Jan 2018",
      title:"Seaseme and black seed Flavored Bun Rocks",
      content:"inappropriate behavior ipsum dolor sit amet, consectetur."
    }
  ]

  let [data, setData] = useState(emp_1);

  let [img, setImg] = useState(Image_Data_1);

  let [show, setShow] = useState(false);


  let toggle = (val) => {
   
    if (val === "All Menu") {
      setData(emp_1);
      setImg(Image_Data_1);
    } else if (val === "Breakfast") {
      setData(emp_2);
      setImg(Image_Data_2);
    } else if (val === "Lunch") {
      setData(emp_3);
      setImg(Image_Data_3);
    } else if (val === "Dinner") {
      setData(emp_4);
      setImg(Image_Data_4);
    } else if (val === "Budget Meal") {
      setData(emp_5);
      setImg(Image_Data_5);
    } else {
      setData(emp_6);
      setImg(Image_Data_6);
    }
  };

  return (
    <>

    {/* 1st div */}
        <div className="about_back_image">
          <div className="box_1">
              <h1 className="heading1">Menus</h1>
              <div className="smash">
              <NavLink to="/" className="nav-link  text-white">Home</NavLink> 
              <i className="bi bi-arrow-right arrow"></i>
              <NavLink to="/about" className="nav-link  text-white">Menus</NavLink>
              </div>
          </div>
      </div>

      {/* 2nd div */}
    
       <div className="container-fluid div_333" >
        <h2>What kind of Foods we serve for you</h2>
        <p className="p_2">
          Who are in extremely love with eco friendly system.
        </p>
        <div className="row row_157">
          {obj.map((val) => {
            return (
              <div className="col-md-2 items" id="red" onClick={() => toggle(val)}>
                {val}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3rd div */}

      <div className="main_row_2222">
        <div className="row row_2">
          {data.map((val) => {
            return (
              <div className="col-md-6 col_3">
                <div className="d-flex justify-content-between">
                  <h4>{val.name}</h4>
                  <h4 className="text-danger">${val.price}</h4>
                </div>

                <p>{val.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4th div */}
       
      <div className="div_55">
        <div className="color_to_image11">
          <div className="container-fluid cont_485">
            <div className="row">
              <div className="col-md-6 col-12 col_485">
                <h2>
                  Reserve Your Seats to <br></br>Confirm if You Come with{" "}
                  <br></br>Your Family
                </h2>
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.
                </p>
              </div>

              <div className="col-md-6 col-12 col_578">
                <form action="" className="form1">
                  <input type="text" placeholder="Your Name" />
                  <br />
                  <input type="text" placeholder="Your Email Address" />
                  <br />
                  <input type="text" placeholder="Phone Number" />
                  <br />
                  <input type="text" placeholder="Select Date & time" />
                  <br />
                  <select name="" id="">
                    <br />
                    <option value="">Select Event</option>
                    <option value="">Event One</option>
                    <option value="">Event Two</option>
                    <option value="">Event Three</option>
                    <option value="">Event Four</option>
                  </select>
                  <button className="btn_478">Make Reservation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  

      <div className="menu_footer" >
      <Footer />
      </div>

    </>
  )
}

export default Menu