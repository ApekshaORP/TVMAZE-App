import Episode from '../component/Episode';
import { shallow } from "enzyme";
jest.mock('../services/ApiCall');
const SetUp=()=>{
    const component=shallow(<Episode/>);
    return component;
}
describe('Home component', () => {
 it ('should call methodName during componentDidMount',async()=>{
    const component=SetUp();
    await component.instance().componentDidMount();
 });
})
  