import React, { useState } from "react";
import "../CSS/Home.css";
import Footer from "./Footer";

const Home = () => {
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

  // let [show, setShow] = useState(false);


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
      <header>
      <div className="container444">
        <h6>WIDE OPTIONS OF CHOICE</h6>
        <h1>Delicious Recipes</h1>
        <p>
          inappropriate behavior is often laughed off as "boys will be boys",
          women <br></br>
          face higher standard especially in the workplace. That why it's{" "}
          <br></br>
          crucial that, as women.
        </p>
        <button className="btn">CHECK OUR MENU</button>
      </div>
      </header>

      {/* 2nd div */}
      <div className="container-fluid cont_1">
        <div className="row">
          <div className="col-md-6 col-12  col_1">
            <h2>About Our Story</h2>
            <p className="p_1">
              Who are in extremely love with eco friendly system. Lorem ipsum
              dolor <br></br> sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor<br></br>incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim<br></br> veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea<br></br>{" "}
              commodo consequat.
            </p>
            <button className="btn_1">VIEW FULL MENU</button>
          </div>

          <div className="col-md-6 col-12 col_2"></div>
        </div>
      </div>

      {/* 3rd div */}

       <div className="container-fluid div_3">
        <h2>What kind of Foods we serve for you</h2>
        <p className="p_2">
          Who are in extremely love with eco friendly system.
        </p>
        <div className="row row_1">
          {obj.map((val) => {
            return (
              <div className="col-md-2 items" onClick={() => toggle(val)}>
                {val}
              </div>
            );
          })}
        </div>
      </div> 

      {/* 4th div */}

      <div className="main_row_2">
        <div className="row row_2">
          {data.map((val) => {
            return (
              <div className="col-md-6 col-12 col_3">
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

      {/* 5th div */}

      <div className="div_5">
        <div className="color_to_image">
          <div className="container-fluid cont_4">
            <div className="row">
              <div className="col-md-6 col_4">
                <h2>
                  Reserve Your Seats to <br></br>Confirm if You Come with{" "}
                  <br></br>Your Family
                </h2>
                <p style={{ marginTop: "40px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.
                </p>
              </div>

              <div className="col-md-6 col_5">
                <form action="" className="form">
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
                  <button className="btn_4">Make Reservation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6th div */}

      <div className="container-fluid div_33">
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

      <div className="main_row_22">
        <div className="row row_2">
          {img.map((val) => {
            return (
              <div className="col-md-4 col_6">
                <img src={val.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 7th div */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide slider"
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

      {/* 8th div */}
      <div className="div_8">
        <h1>Latest From Our Blog</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et <br></br> dolore magna aliqua.
        </p>
        <div className="row">
        {
          blog_data.map((val)=>{
            return (
              <div className="col-md-3 blog">
                  <div className="card" style={{width: "17 rem"}}>
                    <img src={val.img} className="card-img-top" alt="..." />
                    <div className="card-body card_body">
                      <h5 className="card-title items">{val.date}</h5>
                      <p className="card-text p_1" >{val.title}</p>
                      <p className="card-text p_2">{val.content}</p>
                      <div className="d-flex justify-content-between mt-5">
                        <p className="items">❤️ 15 Like</p>
                        <p  className="items">🗨️ 12 Comments</p>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })
        }
         </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
