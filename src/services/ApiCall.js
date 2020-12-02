import axios from "axios";
import {api} from './Common';

export const getShows =async ()  => {
    const res = await axios.get(`${api.Base_url}shows`);
    return res;
};
export const getSeasons =async (showNo)  => {
    const res = await axios.get(`${api.Base_url}shows/${showNo}/seasons`);
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
export const getEpisodeList =async (ShowId)  => {
    const res = await axios.get(`${api.Base_url}shows/${ShowId}/episodes`);
    return res;
};
export const getEpisodeDetails =async (ShowId,season_no,Episode_no)  => {
    const res = await axios.get(`${api.Base_url}shows/${ShowId}/episodebynumber?season=${season_no}&number=${Episode_no}`);
    return res;
};
