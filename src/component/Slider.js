/* comman slider.*/
import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/Shows.css';
import '../styles/Home.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      autoplay: true,
      responsive: [
        {
          breakpoint: 2024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { showList } = this.props
    return (
      <div>
        <Slider {...settings}
        >
          {showList.slice(0, 10).map((item, index) => {
            return(  
            <a className="isDisabled" href={`/tv/${item.name}/${item.id}`} key={index}>
              <div className="slider_img container_slider">
                <img src={item.image.medium} alt={item.name} />
                <div class="content">
                  <div class="list_item">{item.rating ? <>Rating : <p className="details_rating">{item.rating.average}</p></> : ""
                  }
                  </div>
                  <h3></h3>

                </div>
              </div>
            </a>
          )} )}
        </Slider>
      </div>
    );
  }
}