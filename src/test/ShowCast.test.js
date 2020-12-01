import React from 'react';
import ShowCast from '../component/ShowCast';
import {shallow,mount} from 'enzyme';
let Title="Episode";
  let EpisodeData=[{
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
  }}];
let CastList={
    cast:[{  id: 1,
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
  _embedded:{
    cast:[{person:
      {name: "Mike Vogel",
      character:{ image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
        },}
     
      }
    }
    ]
  }}]
}
const SetUp=()=>{
    const component=shallow(<ShowCast Title={Title}EpisodeList={EpisodeData} castList={CastList}/>)
    return component
}
describe('Show cast component', () => {
   it ('find selector show_cast in component',()=>{
    const component=SetUp()
    const wrapper =component.find('.show_cast');
    expect(wrapper.length).toBe(1);
      });
it('should call methodName during componentDidMount', () => {
    const wrapper = mount(<ShowCast  Title={Title}EpisodeList={EpisodeData} CastList={CastList} />);
    const instance = wrapper.instance();
  });
  });

