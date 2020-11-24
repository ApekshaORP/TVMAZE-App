/* Shows card information.
*/
import React, { Component } from 'react';
import NoImg from '../images/noimg.jpg';
import starImg from '../images/star.png';
import '../styles/Shows.css';
class ShowsCard extends Component {
    render() {
        const { image, rating, summary, name, id } = this.props;
        return (
            <>{this.props ?
                <div className="shows_card">
                    <a className="isDisabled" href={`/tv/${name}/${id}`}>
                        {this.props.image ? <img src={image.medium} alt={name} /> :
                            <img src={NoImg} alt={name} className="no_img" />}
                        <div className="show_info">
                            {this.props.name ? <h5> {name}</h5> : ""}
                            {this.props.rating && this.props.rating.average ?<div className="Star_img"> 
                                <img src={starImg} alt="star" />
                            <h5>{rating.average}</h5> </div>: "NA"}
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

