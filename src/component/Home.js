/* Home page contains slider of top 10 shows.
   Card contains shows information card 
*/
import React, { Component } from 'react';
import ShowsCard from './ShowsCard';
import Slider from './Slider';
import { topShows } from '../services/Common';
import '../styles/Home.css';
import ScrollToTop from "react-scroll-to-top";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: []
        }
    }
    async componentDidMount() {
        //fetch Api data from topShows() function.
        let data = await topShows();
        this.setState({ showList: data })
    }
    render() {
        const { showList } = this.state;
        return (
            <div>
                {showList && showList.length > 0 ?
                    <div >
                        <h2><span >Popular Shows</span></h2>
                        <div className="homeSlider">
                            <Slider showList={showList} />
                        </div>
                        <div className="title"> Shows Recommended For You
                        </div>
                        <div className="show_container">{showList.length > 0 && showList && showList.slice(10, showList.length - 1).map((show) => (
                            <ShowsCard {...show} key={show.id} />
                        ))}
                        </div>
                    </div> : <div className="main_home"><div className="loader"></div></div>}
                {/* scroll button to scroll at top of page */}
                <ScrollToTop smooth />
            </div>
        );
    }
}
export default Home;

