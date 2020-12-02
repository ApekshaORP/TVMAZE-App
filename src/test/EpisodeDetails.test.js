import EpisodeDetails from '../component/EpisodeDetails';
import { shallow } from "enzyme";
jest.mock('../services/ApiCall');
const responseData =  
    {  image: {
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
const SetUp=()=>{
    const component=shallow(<EpisodeDetails showDetails={responseData}/>);
    return component;
}
describe('Home component', () => {
 it ('should call methodName during componentDidMount',async()=>{
    const component=SetUp();
    await component.instance().componentDidMount();
 });
})
  