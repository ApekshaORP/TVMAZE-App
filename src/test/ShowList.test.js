import React from 'react';
import {shallow} from 'enzyme';
import ShowList from '../component/ShowList';
import { render, screen } from '@testing-library/react';

  describe("renders show list component", () => {
    const SetUp=()=>{
        const component=shallow(<ShowList />)
        return component
    }
    let wrapper;
    const data= [
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

    beforeEach(() => {
        wrapper = shallow(<ShowList />)
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it ('find selector title in component',()=>{
        const component=SetUp()
        const wrapper =component.find('.title');
        expect(wrapper.length).toBe(1);
        
    })
    it('renders component to find "No Search result for"', () => {
      render(<ShowList />);
      const linkElement = screen.getByText(/No Search result for/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("should render component when isGener is true", () => {
        wrapper.find(".title");
        wrapper.setState({searchResult:data, isGener:true,searchValue:"girls"})
    });
    it("should render component when isGener is false", () => {
        wrapper.find(".title");
        wrapper.setState({searchResult:data, isGener:false,searchValue:"girls"})
    });
});