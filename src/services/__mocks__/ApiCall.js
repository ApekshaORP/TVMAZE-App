const fakeData={
    id: 1,
    url: "http://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: [
    "Drama",
    "Science-Fiction",
    "Thriller"
    ],
    status: "Ended",
    rating: {
    "average": 6.5
    },
    image: {
    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
   
    }
    export const getShows = async ()=>{
        const response =await new Promise(resolve=>{
            resolve(fakeData)
        })
        return response;
      }