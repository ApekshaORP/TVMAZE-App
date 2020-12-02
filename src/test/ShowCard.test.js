import React from 'react';
import ShowCard from '../component/ShowsCard';
import {shallow} from 'enzyme';
const SetUp=()=>{
  const responseData = {
                id: 275,
                url: "http://www.tvmaze.com/shows/275/ali-g-rezurection",
                name: "Ali G: Rezurection",
                type: "Scripted",
                language: "English",
                genres: [
                    "Comedy"
                ],
                rating: {
                    average: 5.8
                },
                image: {
                    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/60/152357.jpg",
                    original: "http://static.tvmaze.com/uploads/images/original_untouched/60/152357.jpg"
                },

};
    const component=shallow(<ShowCard image={responseData.image}rating={responseData.rating}name={responseData.name}/>);
    return component;
}
describe('Show Card component', () => {
   it ('Find selector show_overview in component',()=>{
    const component=SetUp();
     const wrapper =component.find('.show_overview');
    expect(wrapper.length).toBe(1); 
})
  });

