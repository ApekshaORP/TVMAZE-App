import { getShows ,getShowsBySearch} from '../services/ApiCall';

export const api = {
    show_api: "http://api.tvmaze.com/shows",
    search_api :"http://api.tvmaze.com/search/shows"
}

//To get all genres list
export const getGener = async () => {
    var arr = []
    var showList = await getShows();
    showList.data.map((gener) => {
        for (var i = 0; i < gener.genres.length; i++) {
            arr.push(gener.genres[i]);
        }
    })
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var uniqArr = arr.filter(onlyUnique);
    return uniqArr;
};

// to get specific genres data
export const getSelectectGener = async (selectedValue) => {
    var showList = await getShows();
    var list=showList.data.filter((gener) => {
        for (var i = 0; i < gener.genres.length; i++) {
            if  (gener.genres[i] === selectedValue){
                return showList
            }
        }
    })
return list
}

// Shows list sorted by rating
export const topShows = async () => {
    var arr = []
    var showList = await getShows();
    var list=showList.data.sort((a,b) => b.rating.average - a.rating.average );
    return list;
};

//get Search shows
export const searchShows = async (searchValue) => {
    var showList = await getShowsBySearch(searchValue);
    return showList;
};
