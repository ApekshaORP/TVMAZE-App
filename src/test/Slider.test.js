import React from 'react';
import {shallow} from 'enzyme';
import Slider from '../component/Slider';
import { render, screen } from '@testing-library/react';

const SetUp=(props={})=>{
    const component=shallow(<Slider {...props}/>)
    return component
}

describe("renders show list component", () => {
    let wrapper;
    let props;
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

    const width = 'xl';

    // beforeEach(() => {
    //     props = { responseData }
    //     wrapper = shallow(<Slider responseData={responseData}{...props} />)
    // });
    // afterEach(() => {
    //     jest.clearAllMocks();
    // });
    it("should render  component", () => {
        // console.log("wrapper",wrapper.debug())

        // // wrapper.find("isDisabled")
    });
    it ('should render slider component',()=>{
        // const wrapper=SetUp()
        // const wrapper =component.find('.container');
        // expect(wrapper).toMatchSnapshot();
        
    })
});

// const SetUp=()=>{
//     const component=shallow(<Slider />)
//     return component
// }
//  describe('Show cast component', () => {
//    it ('It should render with logo',()=>{
//     const component=SetUp()
//     const wrapper =component.find('.isDisabled');
//     expect(wrapper.length).toBe(1);
    
// })


// });

// test('renders home react component', () => {
//     render(<Slider />);
//     const linkElement = screen.getByText(/Rating: /i);
//     expect(linkElement).toBeInTheDocument();
//   });