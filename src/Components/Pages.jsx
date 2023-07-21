import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import "../CSS/Pages.css";

const Pages = () => {
  return (
    <div>
      {/* 1st div */}
      <div className="about_back_image">
        <div className="box_1">
          <h1 className="heading1">Elements</h1>
          <div className="smash">
            <NavLink to="/" className="nav-link  text-white">
              Home
            </NavLink>
            <i className="bi bi-arrow-right arrow"></i>
            <NavLink to="/about" className="nav-link  text-white">
              Elements
            </NavLink>
          </div>
        </div>

        {/* 2nd div */}
        <div className="row div_2nd">
          <div className="col-md-12 col-6 div_21nd">
            <h4 style={{ fontWeight: "bold" }}>Text Sample</h4>
          </div>
          <div className="col-md-12 col-6 div_22nd">
            <p style={{ fontSize: "14px", color: "grey" }}>
              Every avid independent filmmaker has{" "}
              <span className="text-danger">Bold</span> about making that Italic
              interest documentary, or short film to show off their creative
              prowess. Many have great ideas and want to “wow” the
              <sup className="text-danger">Superscript</sup>
              scene, or video renters with their big project. But once you have
              the<sub className="text-danger">Subscript</sub> “in the can” (no
              easy feat), how do you move from a
              <strike className="text-danger"> Strike</strike> through of master
              DVDs with the <u className="text-danger">“Underline”</u> marked
              hand-written title inside a secondhand CD case, to a pile of
              cardboard boxes full of shiny new, retail-ready DVDs, with UPC
              barcodes and polywrap sitting on your doorstep? You need to create
              eye-popping artwork and have your project replicated. Using a
              reputable full service DVD Replication company like PacificDisc,
              Inc. to partner with is certainly a helpful option to ensure a
              professional end result, but to help with your DVD replication
              project, here are 4 easy steps to follow for good DVD replication
              results:
            </p>
          </div>
        </div>

        {/* 3rd div */}
        <div className="row div_3rd">
          <div className="col-md-12 div_3rd_head">
            <h4>Sample Buttons</h4>
          </div>

          <div className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-dark bg-white">
              Default
            </button>
            <button type="button" className="btn text-dark bg-danger">
              Primary
            </button>
            <button type="button" className="btn text-dark bg-info">
              Success
            </button>
            <button type="button" className="btn text-dark bg-primary">
              Info
            </button>
            <button type="button" className="btn text-dark bg-warning">
              Warning
            </button>
            <button type="button" className="btn text-dark bg-Danger">
              Danger
            </button>
            <button type="button" className="btn btn-link text-dark bg-white">
              Link
            </button>
            <button type="button" className="btn text-primary bg-white">
              Disable
            </button>
          </div>
          <div className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-primary bg-white">
              Default
            </button>
            <button type="button" className="btn-1">
              Primary
            </button>
            <button type="button" className="btn-2">
              Success
            </button>
            <button type="button" className="btn-3">
              Info
            </button>
            <button type="button" className="btn-4">
              Warning
            </button>
            <button type="button" className="btn-5">
              Danger
            </button>
            <button type="button" className="btn-6">
              Link
            </button>
            <button type="button" className="btn-7">
              Disable
            </button>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-dark bg-white">
              Default
            </button>
            <button type="button" className="btn text-dark bg-danger">
              Primary
            </button>
            <button type="button" className="btn text-dark bg-info">
              Success
            </button>
            <button type="button" className="btn text-dark bg-primary">
              Info
            </button>
            <button type="button" className="btn text-dark bg-warning">
              Warning
            </button>
            <button type="button" className="btn text-dark bg-Danger">
              Danger
            </button>
            <button type="button" className="btn btn-link text-dark bg-white">
              Link
            </button>
            <button type="button" className="btn text-primary bg-white">
              Disable
            </button>
          </div>
          <div className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-primary bg-white">
              Default
            </button>
            <button type="button" className="btn-1">
              Primary
            </button>
            <button type="button" className="btn-2">
              Success
            </button>
            <button type="button" className="btn-3">
              Info
            </button>
            <button type="button" className="btn-4">
              Warning
            </button>
            <button type="button" className="btn-5">
              Danger
            </button>
            <button type="button" className="btn-6">
              Link
            </button>
            <button type="button" className="btn-7">
              Disable
            </button>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-dark bg-white">
              Default
            </button>
            <button type="button" className="btn text-dark bg-danger">
              Primary
            </button>
            <button type="button" className="btn text-dark bg-info">
              Success
            </button>
            <button type="button" className="btn text-dark bg-primary">
              Info
            </button>
            <button type="button" className="btn text-dark bg-warning">
              Warning
            </button>
            <button type="button" className="btn text-dark bg-Danger">
              Danger
            </button>
            <button type="button" className="btn btn-link text-dark bg-white">
              Link
            </button>
            <button type="button" className="btn text-primary bg-white">
              Disable
            </button>
          </div>
          <div className="col-md-12 col-6 div_3rd_btn">
            <button type="button" className="btn text-primary bg-white">
              Default
            </button>
            <button type="button" className="btn-1">
              Primary
            </button>
            <button type="button" className="btn-2">
              Success
            </button>
            <button type="button" className="btn-3">
              Info
            </button>
            <button type="button" className="btn-4">
              Warning
            </button>
            <button type="button" className="btn-5">
              Danger
            </button>
            <button type="button" className="btn-6">
              Link
            </button>
            <button type="button" className="btn-7">
              Disable
            </button>
          </div>
        </div>

        {/* 4th div */}

        <div className="row div_4th">
          <div className="col-md-12 div_4th_head">
            <h4>Left Aligned</h4>
          </div>
          <div className="col-md-12 mt-4">
            <div className="row">
            <div className="col-md-3 div_4th_img">
              <img width="200px" height="200px" src="https://preview.colorlib.com/theme/marco/img/elements/d.jpg" alt="" />
            </div>
            <div className="col-md-9">
            <p className="para">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks such as Party
                Gaming and PlayTech left the United States. Overnight, online
                casino players found themselves being chased by the Federal
                government. But, after a fortnight, the online casino industry
                came up with a solution and new online casinos started taking
                root. These began to operate under a different business
                umbrella, and by doing that, rendered the transfer of money to
                and from them legal. A major part of this was enlisting
                electronic banking systems that would accept this new
                clarification and start doing business with me. Listed in this
                article are the electronic banking systems that accept players
                from the United States that wish to play in online casinos.
              </p>
            </div>
            
            </div>
          </div>
        </div>

        {/* 5th-div */}

        <div className="row div_41th">
          <div className="col-md-12">
            <h4 className="div_41th_head">Right Aligned</h4>
          </div>
          <div className="col-md-12 mt-4">
            <div className="row">
            <div className="col-md-9">
            <p className="para_1">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks such as Party
                Gaming and PlayTech left the United States. Overnight, online
                casino players found themselves being chased by the Federal
                government. But, after a fortnight, the online casino industry
                came up with a solution and new online casinos started taking
                root. These began to operate under a different business
                umbrella, and by doing that, rendered the transfer of money to
                and from them legal. A major part of this was enlisting
                electronic banking systems that would accept this new
                clarification and start doing business with me. Listed in this
                article are the electronic banking systems that accept players
                from the United States that wish to play in online casinos.
              </p>
            </div>
            <div className="col-md-3 div_41th_img">
              <img width="200px" height="200px" src="https://preview.colorlib.com/theme/marco/img/elements/d.jpg" alt="" />
            </div>
            
            
            </div>
          </div>
        </div>

       <div className="page_footer">
       <Footer />
       </div>
      </div>
    </div>
  );
};

export default Pages;
