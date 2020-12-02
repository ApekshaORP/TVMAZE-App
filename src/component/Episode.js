/* Home page contains slider of top 10 shows.
   Card contains shows information card 
*/
import React, { Component } from 'react';
import ShowsCard from './ShowsCard';
import { getEpisodeList } from '../services/ApiCall';
import '../styles/Home.css';

import ScrollToTop from "react-scroll-to-top";
class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodeList: []
        }
    }
    async componentDidMount() {
        const Url = window.location.pathname.split("/");
        let ShowId = parseInt(Url[Url.length - 1]);
        //fetch Api data from getEpisodeList() function.
        let episodeList = await getEpisodeList(ShowId);
        this.setState({ episodeList: episodeList.data })
    }
    render() {
        const { episodeList } = this.state;
        return (
            <div>                <button onClick={() => this.props.history.goBack()} className="back_button">Back</button>

                <div >
                    <h2><span >Episodes</span></h2>
                </div>
                <div className="show_container">{episodeList.length > 0 && episodeList && episodeList.map((show) => (
                    <ShowsCard {...show} key={show.id} isEpisode={true} />
                ))}
                </div>
                {/* scroll button to scroll at top of page */}
                <ScrollToTop smooth />
            </div>

        );
    }
}
export default Episodes;

