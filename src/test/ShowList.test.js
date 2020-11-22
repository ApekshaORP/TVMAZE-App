import React from 'react';
import {shallow} from 'enzyme';
import ShowList from '../component/ShowList';
import { render, screen } from '@testing-library/react';

const SetUp=(props={})=>{
    const component=shallow(<ShowList {...props}/>)
    return component
}
describe('Show cast component', () => {
   it ('It should render with logo',()=>{
    const component=SetUp()
    const wrapper =component.find('.title');
    expect(wrapper.length).toBe(1);
    
})
test('renders home react component', () => {
  render(<ShowList />);
  const linkElement = screen.getByText(/No Search result for/i);
  expect(linkElement).toBeInTheDocument();
});
  });


  describe("renders show list component", () => {
    let wrapper;
    let props;
    const data = [
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
    const width = 'xl';

    beforeEach(() => {
        props = { data }
        wrapper = shallow(<ShowList {...props} />)
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should render  component", () => {
        wrapper.find(".title")
    });

});