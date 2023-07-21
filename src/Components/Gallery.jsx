import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../CSS/Gallery.css";
import Footer from './Footer';

const Gallery = () => {

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
              <h1 className="heading1">Gallery</h1>
              <div className="smash">
              <NavLink to="/" className="nav-link  text-white">Home</NavLink> 
              <i className="bi bi-arrow-right arrow"></i>
              <NavLink to="/about" className="nav-link  text-white">Gallery</NavLink>
              </div>
          </div>
      </div>

      {/* 2nd div */}

      <div className="container-fluid div_398">
        <h2>Food and Customer Gallery</h2>
        <p className="p_2">
          Who are in extremely love with eco friendly system.
        </p>
        <div className="row row_1">
          {obj.map((val) => {
            return (
              <div className="col-md-2 items" id="red" onClick={() => toggle(val)}>
                {val}
              </div>
            );
          })}
        </div>
      </div>

      <div className="main_row_298">
        <div className="row row_298">
          {img.map((val) => {
            return (
              <div className="col-md-4 col_6">
                <img src={val.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 3rd div */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide slider212"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators Indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-danger"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className="bg-danger"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className="bg-danger"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className="bg-danger"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active Image">
            <img
              src="https://preview.colorlib.com/theme/marco/img/user.png"
              className="d-block "
              alt="..."
            />
            <div className="caption_1">
              <h5 className="text-dark">Hulda Sutton</h5>
              <p className="text-dark">
                Accessories Here you can find the best computer accessory for
                your laptop<br></br>, monitor, printer, scanner, speaker. Here
                you can find the best computer<br></br> accessory for your
                laptop, monitor, printer, scanner, speaker.
              </p>
            </div>
          </div>

          <div className="carousel-item Image">
            <img
              src="https://preview.colorlib.com/theme/marco/img/user.png"
              className="d-block "
              alt="..."
            />
            <div className="caption_1">
              <h5 className="text-dark fw-bold">Hulda Sutton</h5>
              <p className="text-dark">
                Accessories Here you can find the best computer accessory for
                your laptop<br></br>, monitor, printer, scanner, speaker. Here
                you can find the best computer<br></br> accessory for your
                laptop, monitor, printer, scanner, speaker.
              </p>
            </div>
          </div>

          <div className="carousel-item Image">
            <img
              src="https://preview.colorlib.com/theme/marco/img/user.png"
              className="d-block "
              alt="..."
            />
            <div className="caption_1">
              <h5 className="text-dark">Hulda Sutton</h5>
              <p className="text-dark">
                Accessories Here you can find the best computer accessory for
                your laptop<br></br>, monitor, printer, scanner, speaker. Here
                you can find the best computer<br></br> accessory for your
                laptop, monitor, printer, scanner, speaker.
              </p>
            </div>
          </div>

          <div className="carousel-item Image">
            <img
              src="https://preview.colorlib.com/theme/marco/img/user.png"
              className="d-block "
              alt="..."
            />
            <div className="caption_1">
              <h5 className="text-dark">Hulda Sutton</h5>
              <p className="text-dark">
                Accessories Here you can find the best computer accessory for
                your laptop<br></br>, monitor, printer, scanner, speaker. Here
                you can find the best computer<br></br> accessory for your
                laptop, monitor, printer, scanner, speaker.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="gallery_footer">
      <Footer />
      </div>

    </>
  )
}

export default Gallery