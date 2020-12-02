import Home from '../component/Home';
import { shallow } from "enzyme";
jest.mock('../services/ApiCall');
const responseData =
     [
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

const SetUp=()=>{
    const component=shallow(<Home/>);
    return component;
}
describe('Home component', () => {
  it ('Home should render without error',async()=>{
    const component=SetUp();
    component.setState({showList:responseData});
    const wrapper =component.find('.homeSlider');
    expect(wrapper.length).toBe(1);
 });
 it ('Should set state in component',async()=>{
    const component=SetUp();
    component.setState({showList:responseData});
 });
 it ('should call methodName during componentDidMount',async()=>{
    const component=SetUp();
    await component.instance().componentDidMount();
 });
})
  