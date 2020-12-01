/* Shows card details.
*/
import React, { Component } from 'react';
import ScrollToTop from "react-scroll-to-top";
import ShowCast from './ShowCast';
import '../styles/ShowDetails.css';
import NoImg from '../images/noimg.jpg';

import { getEpisodes, getCastList } from '../services/ApiCall';
class ShowsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: [],
            EpisodeList: []
        }
    }
    async componentDidMount() {
        const Url = window.location.pathname.split("/");
        let ShowId = parseInt(Url[Url.length - 1]);
        //fetch Api data from getEpisodes() and getCastList() function.
        const EpisodeList = await getEpisodes(ShowId);
        const showDetails = await getCastList(ShowId);
        this.setState({ EpisodeList: EpisodeList.data, showDetails: showDetails.data });
    };
    render() {
        const { showDetails, EpisodeList } = this.state;
        return (
            <>{Object.keys(showDetails).length > 0 ?
                <div>
                    <div class="container">
                        <div class="image">
                            {showDetails&&showDetails.image ? <img src={showDetails.image && showDetails.image.medium} alt="show poster" /> :
                                <img src={NoImg} alt="Image_not_found" />}
                        </div>
                        <div class="main">
                            <h2>{showDetails && showDetails.name}</h2>
                            <div class="list_item">
                                <br />{showDetails&&showDetails.language ? <>Available in :<p className="details_data"> {showDetails.language}</p> </> : ""
                                }
                            </div>
                            <br /> <div class="list_item">{showDetails.rating && showDetails.rating.average ? <>Rating : <p className="details_rating">{showDetails.rating.average}</p></> : ""
                            }
                            </div> <br />
                            {showDetails && showDetails.genres ?
                                <>Generes :
                                {showDetails && showDetails.genres.map((generes, index) => (
                                    <li key={index} className="details_rating"> {generes}</li>
                                ))}
                                </> : ""
                            }
                            <br />
                            {showDetails.summary ?
                            <>Summary :
                                <div className="details_data" dangerouslySetInnerHTML={{ __html: showDetails.summary }}></div></> :
                                ""}
                        </div>
                    </div>
                    <div >
                        <ShowCast Title={"EPISODES :"} EpisodeList={EpisodeList} />
                    </div>
                    <div >
                        <ShowCast Title={"SHOWS CAST :"} castList={showDetails._embedded} />
                    </div>
                </div> : <div className="main_home"><div className="loader"></div></div>}
                {/* scroll button to scroll at top of page */}
                <ScrollToTop smooth />
            </>
        );
    }
}

export default ShowsDetails;

