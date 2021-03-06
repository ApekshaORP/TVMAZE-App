/* Show Cast page contains List of episode and cast list.
*/ 
import React, { Component } from "react";
import Slider from "react-slick";
import No_Cast_Img from '../images/no-cast-img.png';
import NoImg from '../images/noimg.jpg';
import '../styles/ShowCast.css';

export default class ShowCast extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      ShowId:""
    }
}
   componentDidMount() {
    const Url = window.location.pathname.split("/");
    let ShowId = parseInt(Url[Url.length - 1]);
    if(ShowId){
       this.setState({ShowId:ShowId});
      }
  } 
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
    const {castList ,Title,SeasonList}=this.props;
    const {ShowId} =this.state;
    return (<div className="show_cast">
    
     {castList && castList.cast &&castList.cast.length>0? 
     <>  <div className="episode_title">{Title}</div>
      <div className="slider slider_container">
        {/* Slider list for cast in shows */}
        <Slider {...settings}>
            {castList && castList.cast.map((item,index)=>(
                     <a href key={index}>
                <div className="slider" key={index}>
                  {item.character&&item.character.image&&item.character.image.medium?
                <img src={item.character.image.medium} alt={item.name}/>:
                <img src={No_Cast_Img} alt="Image_not_found"/>}
                <div >
            <div className="author_name">{item.person &&item.person.name}</div>
                </div>
                </div> 
                </a>
            ))}
        </Slider>
      </div></>:""}
      {SeasonList &&SeasonList.length> 0?
      <>  <div className="episode_title">{Title}</div>
      <div className="slider slider_container">
          {/* Slider list for Season in shows */}
        <Slider {...settings}>
            {SeasonList &&SeasonList.length>0 && SeasonList.map((item,index)=>(
                     <a href={`/tv/episode/${ShowId}`} key={index}>
                <div className="slider" key={index}>
                  {item.image&&item.image.medium? <img src={item.image&&item.image.medium} alt={item.name} />   
            :<img src={NoImg} alt="Image_not_found"/>}
            <p className="author_name">{item.number}</p> 
                </div> 
                </a>
            ))}
        </Slider>
      </div></>:""}
      </div>
    );
  }
}
