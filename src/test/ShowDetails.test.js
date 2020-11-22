import React from 'react';
import ShowDetails from '../component/ShowsDetails';
import {shallow} from 'enzyme';

const SetUp=(props={})=>{
    const component=shallow(<ShowDetails {...props}/>)
    return component
}
describe('Show Details component', () => {
   it ('It should match snapshot',()=>{
    const wrapper=SetUp()
    // const wrapper =component.find('.container');
    expect(wrapper).toMatchSnapshot();   
})
  });
