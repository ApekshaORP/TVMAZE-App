import React from 'react';
import ShowDetails from '../component/ShowsDetails';
import {shallow,mount} from 'enzyme';

const responseData =  
    {
        
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/60/152357.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/60/152357.jpg"
        },
        language: "English",
        "genres": [
            "Comedy"
        ],
        rating: {
                    average: 5.8
                },
    }


    const EpisodeList={
        data:[{
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
            }}]
    }
const SetUp=(props={})=>{
    const component=shallow(<ShowDetails  {...props} />)
    return component
}
describe('Show Details component', () => {
   it("Should renders data when user makes a valid text to search field",()=>{
    const component=SetUp();
    component.setState({showDetails:responseData,EpisodeList:EpisodeList})
     component.find('.container');
})
it('should call methodName during componentDidMount', () => {
    const wrapper = mount(<ShowDetails  showDetails={responseData}EpisodeList={EpisodeList} />);
     wrapper.instance();
  });
  });
