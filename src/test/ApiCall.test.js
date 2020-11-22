import {getShows} from '../services/ApiCall';
import axios from "axios";
jest.mock('axios');

it(' API call test', async () => {
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
            },
            {
                "score": 15.833251,
                "show": {
                    "id": 44163,
                    "url": "http://www.tvmaze.com/shows/44163/bangkok-g-story",
                    "name": "Bangkok G Story",
                    "type": "Scripted",

                    "genres": [
                        "Drama",
                        "Comedy"
                    ],

                    "rating": {
                        "average": null
                    },

                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/213/533970.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/213/533970.jpg"
                    }
                }
            }]

    };
    axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
    await expect(getShows()).resolves.toEqual(responseData);
});