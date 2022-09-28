import { Center, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import slide_img1 from "../Images/slide_img1.JPG";
import slide_img2 from "../Images/slide_img2.JPG";
import slide_img3 from "../Images/slide_img3.JPG";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image w="650px" h="400px" m="auto" src={slide_img1} />
          </div>
          <div>
            <Image w="650px" h="400px" m="auto" src={slide_img2} />
          </div>
          <div>
            <Image w="650px" h="400px" m="auto" src={slide_img3} />
          </div>
        </Slider>
      </div>
    );
  }
}
