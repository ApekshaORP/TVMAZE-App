import { render, screen } from '@testing-library/react';
import Home from '../component/Home';
import { shallow, mount } from "enzyme";

const SetUp=(props={})=>{
    const component=shallow(<Home/>)
    return component
}
describe('Home component', () => {
jest.mock('../services/ApiCall')
// test('renders home react component', () => {
//   render(<Home />);
//   const linkElement = screen.getByText(/Showing Search result for/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it(" fetches data from Api",done=>{
//   const wraper =SetUp();
//  wraper.update();
//  setTimeout(()=>{
//   expect(wraper.find('.Slider').length).toEqual(1);
//   done();
//  },5000);
 
// });
})
  it ('It should render without',()=>{
   const component=SetUp()
   const wrapper =component.find('.main_home');
   expect(wrapper.length).toBe(1);
   

})