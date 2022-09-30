import { Center, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import slide_img1 from "../Images/App_img1.png";
import slide_img2 from "../Images/App_img2.png";
import slide_img3 from "../Images/App_img3.png";
import slide_img4 from "../Images/App_img4.png";
import slide_img5 from "../Images/App_img5.png";
import slide_img6 from "../Images/App_img6.png";
import slide_img7 from "../Images/App_img7.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      fade: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img1} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img2} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img3} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img4} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img5} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img6} />
          </div>
          <div>
            <Image w="450px" h="250px" m="auto" src={slide_img7} />
          </div>
        </Slider>
      </div>
    );
  }
}
