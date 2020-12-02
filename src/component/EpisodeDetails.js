/* Home page contains slider of top 10 shows.
   Card contains shows information card 
*/
import React, { Component } from 'react';
// import ShowsCard from './ShowsCard';
// // import Slider from './Slider';
import { getEpisodeDetails } from '../services/ApiCall';
import '../styles/Home.css';
import ScrollToTop from "react-scroll-to-top";
class EpisodeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodeDetails: []
        }
    }
    async componentDidMount() {
        const Url = window.location.pathname.split("/");
        let ShowId = parseInt(Url[Url.length - 1]);
        let EpisodeNo = parseInt(Url[Url.length - 3]);
        let seasonNo = parseInt(Url[Url.length - 2]);
        //fetch Api data from getEpisodeDetails() function.
        let showDetails = await getEpisodeDetails(ShowId, seasonNo, EpisodeNo);
        this.setState({ showDetails: showDetails.data })
    }
    render() {
        const { showDetails } = this.state;
        return (
            <div>
                <button onClick={() => this.props.history.goBack()} className="back_button">Back</button>
                <div >
                    <h2><span >Episodes Details</span></h2>
                </div>
                <div class="container">
                    <div class="image">
                        {showDetails && showDetails.image ? <img src={showDetails.image && showDetails.image.medium} alt="show poster" /> :
                            ""}
                    </div>
                    <div className="episodeDetails">
                        <h2>{showDetails && showDetails.name}</h2>

                        <br />
                        {showDetails && showDetails.summary ?
                            <>
                                <div className="details_data" dangerouslySetInnerHTML={{ __html: showDetails.summary }}></div></> :
                            ""}
                    </div>
                </div>
                {/* scroll button to scroll at top of page */}
                <ScrollToTop smooth />
            </div>

        );
    }
}
export default EpisodeDetails;

