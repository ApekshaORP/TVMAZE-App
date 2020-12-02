import axios from "axios";
import {api} from './Common';

export const getShows =async ()  => {
    const res = await axios.get(`${api.Base_url}shows`);
    return res;
};
export const getEpisodes =async (showNo)  => {
    const res = await axios.get(`${api.Base_url}shows/${showNo}/episodes`);
    return res;
};
export const getShowsBySearch =async (searchValue)  => {
    const res = await axios.get(`${api.Base_url}search/shows?q=${searchValue}`);
    return res;
};
export const getCastList =async (ShowId)  => {
    const res = await axios.get(`${api.Base_url}shows/${ShowId}?embed=cast`);
    return res;
};


