/* Show list page contains show list.
This compnent is used for showing geners list and search data.
*/ 
import React, { Component } from 'react';
import ShowsCard from './ShowsCard';
import { getSelectectGener,searchShows } from '../services/Common';
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
    async componentDidMount() {
        const Url = window.location.pathname.split("/");
        if (Url[1] === "tv") {
            // for genres list API
            let searchValue = Url[Url.length - 1];
            this.setState({ searchValue: searchValue })
           //fetch Api data of genres from generShowList() function.
           const generShowList = await getSelectectGener(searchValue);
            this.setState({ isGener: true, searchResult: generShowList });
        } else {
            // for search shows
            let searchValue = Url[Url.length - 1]
            this.setState({ searchValue: searchValue });
            //fetch Api data from searchShows() function.
            const generShowList = await searchShows(searchValue);
            this.setState({ searchResult:generShowList, isGener: false })
         }

    }
    render() {
        const { searchResult, isGener } = this.state;
        return (
            <div>{searchResult.length > 0 ?<>
                <div className="title">Showing Search result for "{this.state.searchValue}"</div>
                <div className="show_container">{searchResult.length > 0 && searchResult.map((show) => (
                    <> {isGener ? <ShowsCard {...show} key={show.id} /> : <ShowsCard {...show.show} key={show.id} />}</>
                ))}
                </div></>: <div className="title">No Search result for "{this.state.searchValue}"</div>}
            </div>
            
        );
    }
}

export default ShowList;

