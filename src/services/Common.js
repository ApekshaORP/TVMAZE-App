import { getShows, getShowsBySearch } from '../services/ApiCall';
export const api = {
    Base_url: "http://api.tvmaze.com/"
}
//To get all genres list
export const getGener = async () => {
    var arr = [];
    var showList = await getShows();
    showList.data.map(gener => {
        gener.genres.map((gener) => arr.push(gener));
        return arr;
    });
    let genres = [...new Set(arr)];
    return genres;
};

// to get specific genres data
export const getSelectectGener = async (selectedValue) => {
    var showList = await getShows();
    var list = showList.data.filter(gener => gener.genres.map(g => g === selectedValue ? true : false).includes(true));
    return list;
}

// Shows list sorted by rating
export const topShows = async () => {
    var showList = await getShows();
    var list = showList.data.sort((a, b) => b.rating.average - a.rating.average);
    return list;
};

//get Search shows
export const searchShows = async (searchValue) => {
    var showList = await getShowsBySearch(searchValue);
    return showList.data;
};
