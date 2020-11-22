import React from 'react';
import ShowCard from '../component/ShowsCard';
import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';

const SetUp=(props={})=>{
    const component=shallow(<ShowCard {...props}/>)
    return component
}
describe('Show Card component', () => {
   it ('It should render with logo',()=>{
    const component=SetUp()
    // const wrapper =component.find('.show_overview');
    // expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();

    
})
  });


//   test('renders home react component', () => {
//     render(<ShowCard />);
//     const linkElement = screen.getByText(/Overview/i);
//     expect(linkElement).toBeInTheDocument();
//   });