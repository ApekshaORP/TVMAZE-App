import React from 'react';
import Navbar from '../component/NavBar';
import { render, screen } from '@testing-library/react';
import axios from "axios";
import { shallow } from "enzyme";
jest.mock('axios');
const genresInfoData = ["Drama", "Science-Fiction", "Family"];
const showsInfoData = [
    {
        id: 1,
        image: { medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" },
        genres: ["Drama", "Science-Fiction"],
        rating: {
            "average": 3
        }
    },
    {
        id: 2,
        image: { medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" },
        genres: ["Drama", "Science-Fiction", "comedy"],
        rating: {
            "average": 3
        }
    }
];
const responseData =  [
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
    }];
const SetUp=(props={})=>{
    const component=shallow(<Navbar generList={showsInfoData}  {...props}/>)
    return component
}
describe('Nav bar component', () => {
   it ('Should render when simulate events',()=>{
    const component=SetUp()
    const wrapper =component.find('.logo_img');
    let event={preventDefault:jest.fn(),target:{value:{}},key:"Enter"}
    component.setState({generList:genresInfoData})
    component.instance().search(event);
    component.instance().clickMenu();
    component.find("#inputSearch").simulate("keyPress",event);
    component.find('.logo_img').simulate('click');
    expect(wrapper.length).toBe(1); 
})
it('Search icon click event', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
  const component=SetUp()
  component.find(".search_icon").simulate('click');
  let wrapper= component.find(".search_icon")
  expect(wrapper.length).toBe(1);
});

it('find text SHOWS in nav bar', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/SHOWS/i);
    expect(linkElement).toBeInTheDocument();
  });
  });




  

