/* comman slider.*/
import React, { Component } from "react";
import Slider from "react-slick";
import starImg from '../images/star.png';
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
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
    const { showList } = this.props;
    return (
      <div>
        <Slider {...settings}
        >
          {showList && showList.slice(0, 10).map((item, index) => (
            <a className="isDisabled" href={`/tv/${item.name}/${item.id}`} key={index}>
              <div className="slider_img container_slider">
                <img src={item.image&&item.image.medium} alt={item.name} />
                <div class="content">
                  <div class="list_item">{item.rating&&item.rating ? <div className="rating" >
                    <img src={starImg} alt="star" className="home_card"/>                   
                    <p className="details_rating">{item.rating.average}</p></div> : ""
                  }
                  </div>
                </div>
              </div>
            </a>
          ) )}
        </Slider>
      </div>
    );
  }
}