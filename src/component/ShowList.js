/* Show list page contains show list.
This compnent is used for showing geners list and search data.
*/
import React, { Component } from 'react';
import ShowsCard from './ShowsCard';
import { getSelectectGener, searchShows } from '../services/Common';
import ScrollToTop from "react-scroll-to-top";
import '../styles/Shows.css';
class ShowList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            searchValue: "",
            generShowList: [],
            isGener: false
        }
    }
    componentDidMount() {
        this.ShowListData();
    }
    ShowListData = async () => {
        const Url = window.location.pathname.split("/");
        if (Url[1] === "tv") {
            // for genres list API
            let searchValue = Url[Url.length - 1];
            //fetch Api data of genres from generShowList() function.
            const generShowList = await getSelectectGener(searchValue);
            this.setState({ isGener: true, searchResult: generShowList, searchValue: searchValue });
        } else {
            // for search shows
            let searchValue = Url[Url.length - 1]
            //fetch Api data from searchShows() function.
            const generShowList = await searchShows(searchValue);
            this.setState({ searchResult: generShowList, isGener: false, searchValue: searchValue })
        }
    }
    render() {
        const { searchResult, isGener } = this.state;
        return (
            <div>
                <button onClick={() => this.props.history.goBack()} className="back_button">Back</button>
                {searchResult.length > 0 ? <>
                    <div className="title">Showing Search result for "{this.state.searchValue}"</div>
                    <div className="show_container">{searchResult.length > 0 && searchResult.map((show, index) => (
                        <div key={index}> {isGener ? <ShowsCard {...show} key={show.id} /> : <ShowsCard {...show.show} key={show.id} />}</div>
                    ))}
                    </div></> : <div className="title">No Search result for "{this.state.searchValue}"</div>}
                {/* scroll button to scroll at top of page */}
                <ScrollToTop smooth />
            </div>

        );
    }
}

export default ShowList;

