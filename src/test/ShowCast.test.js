import React from 'react';
import ShowCast from '../component/ShowCast';
import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';

const SetUp=()=>{
    const component=shallow(<ShowCast />)
    return component
}
describe('Show cast component', () => {
   it ('It should render with logo',()=>{
    const component=SetUp()
    const wrapper =component.find('.show_cast');
    // component.find('.logo').simulate('click');
    expect(wrapper.length).toBe(1);
    
})
  });

