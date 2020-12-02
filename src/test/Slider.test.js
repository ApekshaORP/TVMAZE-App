import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../component/Slider';

describe("renders slider component", () => {
    const responseData = [
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

            }
        },

        {
            "score": 15.833251,

            "rating": {
                "average": null
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/213/533970.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/213/533970.jpg"
            },
        }];

    const SetUp = (props = {}) => {
        const component = shallow(<Slider {...props} showList={responseData} />);
        return component;
    }
    it('find selector isDisabled in component', () => {
        const wrapper = SetUp();
        wrapper.find('.isDisabled');
        expect(wrapper.length).toBe(1);
    })
});