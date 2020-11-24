/* Show Cast page contains List of episode and cast list.
*/ 
import React, { Component } from "react";
import Slider from "react-slick";
import No_Cast_Img from '../images/no-cast-img.png';
import NoImg from '../images/noimg.jpg';
import '../styles/ShowCast.css';

export default class ShowCast extends Component {   
  render() {
    const settings = {
      speed: 500,
      autoplay: false,
      dots: false,
      responsive: [
        {
          breakpoint: 2024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: false,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,            
            infinite: false,

          }
        }
      ]
    };
    const {castList ,Title,EpisodeList}=this.props;
    return (<div className="show_cast">
    
     {castList && castList.cast &&castList.cast.length>0? 
     <>  <div className="title">{Title}</div>
      <div className="slider slider_container">
        {/* Slider list for cast in shows */}
        <Slider {...settings}>
            {castList && castList.cast.map((item,index)=>(
                     <a  key={index}>
                <div className="slider" key={index}>
                  {item.character&&item.character.image&&item.character.image.medium?
                <img src={item.character.image.medium} alt={item.name}/>:
                <img src={No_Cast_Img} alt="Image not found"/>}
                <div >
            <div className="author_name">{item.person &&item.person.name}</div>
                </div>
                </div> 
                </a>
            ))}
        </Slider>
      </div></>:""}
      {EpisodeList &&EpisodeList.length> 0?
      <>  <div className="title">{Title}</div>
      <div className="slider slider_container">
          {/* Slider list for Episode in shows */}
        <Slider {...settings}>
            {EpisodeList &&EpisodeList.length>0 && EpisodeList.map((item,index)=>(
                     <a  key={index}>
                <div className="slider" key={index}>
                  {item.image&&item.image.medium? <img src={item.image&&item.image.medium} alt={item.name} />   
:<img src={NoImg} alt="Image not found"/>}
            <p className="author_name">{item.name}</p> 
                </div> 
                </a>
            ))}
        </Slider>
      </div></>:""}
      </div>
    );
  }
}