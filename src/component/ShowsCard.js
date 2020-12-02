/* Shows card information.
*/
import React, { Component } from 'react';
import NoImg from '../images/noimg.jpg';
import starImg from '../images/star.png';
import '../styles/Shows.css';
class ShowsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowId: "",

        }
    }
       componentDidMount() {
        const Url = window.location.pathname.split("/");
        let ShowId = parseInt(Url[Url.length - 1]);
        //fetch Api data from topShows() function.
        if(ShowId){
            this.setState({ ShowId: ShowId })

        }
    }
    render() {
        const { image, rating, summary, name, id,isEpisode,season,number } = this.props;
        const {ShowId}=this.state;
        return (
            <>{this.props ?
                
                <div className="shows_card">
                    <a className="isDisabled" href={isEpisode?`/tv/episode/${number}/${season}/${ShowId}`:`/tv/${name}/${id}`}>
                        {this.props.image ? <img src={image.medium} alt={name} /> :
                            <img src={NoImg} alt={name} className="no_img" />}
                        <div className="show_info">
                            {this.props.name ? <h5> {name}</h5> : ""}
                            <div>
                            {this.props.rating && this.props.rating.average ?<div className="Star_img"> 
                                <img src={starImg} alt="star" />
                            <h5>{rating.average}</h5> </div>: <h5>NA</h5>}
                            </div>
                        </div>
                        <div className="show_overview">
                            <p>Overview:</p>
                            <div dangerouslySetInnerHTML={{ __html: summary }}></div>
                        </div>
                    </a>
                </div> : ""}

            </>
        );
    }
}

export default ShowsCard;

