import { getShows, getSeasons, getCastList, getShowsBySearch,getEpisodeList,getEpisodeDetails } from '../services/ApiCall';
import axios from "axios";
jest.mock('axios');
describe('API test case', () => {
    var Apidata = {
        data: [{
            id: 1,
            url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
            name: "Pilot",
            season: 1,
            number: 1,
            type: "regular",
            airdate: "2013-06-24",
            airtime: "22:00",
            airstamp: "2013-06-25T02:00:00+00:00",
            runtime: 60,
            image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
            },
            summary: "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
            _links: {
                self: {
                    href: "http://api.tvmaze.com/episodes/1"
                }
            }
        }]
    }
    it('API call test for getShows information', async () => {
        const responseData = {
            data: [
                {
                    "score": 16.019352,
                    "show": {
                        "id": 275,
                        "url": "http://www.tvmaze.com/shows/275/ali-g-rezurection",
                        "name": "Ali G: Rezurection",
                        "type": "Scripted",
                        "language": "English",
                        "genres": [
                            "Comedy"
                        ],
                        "rating": {
                            "average": 5.8
                        },

                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/60/152357.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/60/152357.jpg"
                        },

                    }
                
                }]

        };
        axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
        await expect(getShows()).resolves.toEqual(responseData);
    });

    it('API call test for getSeasons', async () => {
        
        axios.get.mockImplementationOnce(() => Promise.resolve(Apidata));
        await expect(getSeasons()).resolves.toEqual(Apidata);
    });
    
    it('API call test for getEpisodeDetails', async () => {
        
        axios.get.mockImplementationOnce(() => Promise.resolve(Apidata));
        await expect(getEpisodeDetails()).resolves.toEqual(Apidata);
    })
    it('API call test for getEpisodeList', async () => {
    
        axios.get.mockImplementationOnce(() => Promise.resolve(Apidata));
        await expect(getEpisodeList()).resolves.toEqual(Apidata);
    })
    it('API call test for getCastList', async () => {
        const CastList = {
            data: [{
                id: 1,
                url: "http://www.tvmaze.com/shows/1/under-the-dome",
                name: "Under the Dome",
                language: "English",
                genres: [
                    "Drama",
                    "Science-Fiction",
                    "Thriller"
                ],
                rating: {
                    average: 6.5
                },
                image: {
                    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                    original: "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
                },
                summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
                _embedded: {
                    cast: [{
                        person:
                        {
                            name: "Mike Vogel",
                            image: {
                                medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
                                original: "http://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
                            },
                        }
                    }

                    ]
                }
            }]
        }
        axios.get.mockImplementationOnce(() => Promise.resolve(CastList));
        await expect(getCastList()).resolves.toEqual(CastList);
    })

    it('API call test for getShowsBySearch', async () => {
        const ShowsBySearch = [
            {
                "score": 17.93593,
                "show": {
                    "id": 139,
                    "url": "http://www.tvmaze.com/shows/139/girls",
                    "name": "Girls",
                    "type": "Scripted",
                    "language": "English",
                    "genres": [
                        "Drama",
                        "Romance"
                    ],
                    "rating": {
                        "average": 6.7
                    },
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
                    },
                    "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",

                }
            }
        ];
        axios.get.mockImplementationOnce(() => Promise.resolve(ShowsBySearch));
        await expect(getShowsBySearch()).resolves.toEqual(ShowsBySearch);
    });
});