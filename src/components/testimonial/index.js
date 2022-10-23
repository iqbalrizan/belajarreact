import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import testi1 from "../../assets/images/imgtesti1.png";
import star from "../../assets/images/star.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div className="testimonial">
      <div className="judul">
        <h1>TESTIMONIAL</h1>
        <h2>Berbagai review positif dari para pelanggan kami</h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="kotak">
            <div className="row">
              <div className="col-3">
                <img src={testi1} alt="" />
              </div>
              <div className="col-9">
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur excepturi ea corrupti enim sint beatae recusandae iure perspiciatis consequuntur? Optio voluptates vero tempore quidem aut ducimus fugiat nostrum
                  veritatis!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="kotak">
            <div className="row">
              <div className="col-3">
                <img src={testi1} alt="" />
              </div>
              <div className="col-9">
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur excepturi ea corrupti enim sint beatae recusandae iure perspiciatis consequuntur? Optio voluptates vero tempore quidem aut ducimus fugiat nostrum
                  veritatis!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="kotak">
            <div className="row">
              <div className="col-3">
                <img src={testi1} alt="" />
              </div>
              <div className="col-9">
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur excepturi ea corrupti enim sint beatae recusandae iure perspiciatis consequuntur? Optio voluptates vero tempore quidem aut ducimus fugiat nostrum
                  veritatis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
