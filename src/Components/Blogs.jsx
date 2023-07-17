import React from 'react';
import "../CSS/Blog.css";
import Footer from './Footer';

const Blogs = () => {
  return (
    <div>
      <div className="about_back_image11">
        <div className="box_111">
            <h1 className="heading111">Do You're Getting a Telescope </h1>
            <p  className="content111">There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
            <button className="bg-white text-dark">VIEW MORE</button>
        </div>
        </div>

         {/* 2nd div */}

        <div className="row box_251">
          <div className="col-md-4 div_2_col">
            <img src="https://preview.colorlib.com/theme/marco/img/blog/cat-widget1.jpg" alt="" />
            <div className="background_color">
            <h6>SOCIAL LIFE</h6>
            <hr />
            <p>Enjoy Your Social Life Together</p>
            </div>
           
          </div>
          <div className="col-md-4 div_2_col">
            <img src="https://preview.colorlib.com/theme/marco/img/blog/cat-widget1.jpg" alt="" />
            <div className="background_color">
            <h6>POLITICS</h6>
            <hr />
            <p>Be a part of politics</p>
            </div>
           
          </div>
          <div className="col-md-4 div_2_col">
            <img src="https://preview.colorlib.com/theme/marco/img/blog/cat-widget1.jpg" alt="" />
            <div className="background_color">
            <h6>FOOD</h6>
            <hr />
            <p>Let the food be finished</p>
            </div>
           
          </div>
        </div>

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
       
       <div className="blog_footer">
       <Footer  />
       </div>
     

    </div>

    // 3rd div

    

    
  )
}

export default Blogs