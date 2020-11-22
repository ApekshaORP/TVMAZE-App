import axios from "axios";
import {api} from './Common';

export const getShows =async ()  => {
    const res = await axios.get(`${api.show_api}`);
    const  data = await res;
    return data;
};

export const getEpisodes =async (showNo)  => {
    const res = await axios.get(`${api.show_api}/${showNo}/episodes`);
    const  data = await res.data;
    return data;
};
export const getShowsBySearch =async (searchValue)  => {
    const res = await axios.get(`${api.search_api}?q=${searchValue}`);
    const  data = await res.data;
    return data;
};
export const getCastList =async (ShowId)  => {
    const res = await axios.get(`${api.show_api}/${ShowId}?embed=cast`);
    const  data = await res.data;
    return data;
};

