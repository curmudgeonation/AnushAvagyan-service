import React from 'react';
import { shallow, mount, render } from 'enzyme';
var moment = require('moment');


import App from '../client/src/components/App';
import Host from '../client/src/components/Host';
import Description from '../client/src/components/Description';
import Profile from '../client/src/components/Profile';
import Reviews from '../client/src/components/Reviews';
import styledComponents from '../client/src/components/styledComponents';

const sampleData = require('../database/sampleData.js');

describe('App component', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).exists()).toBe(true);
    expect(shallow(<App />).contains(<div className="main"></div>)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.main').length).toBe(1);
  });

});

// describe('Host component', function() {
//   const wrapper = shallow(<Host host={sampleData} />);

//   it('should render without throwing an error', function() {
//     expect(wrapper.exists()).toBe(true);
//     expect(wrapper.find('.avatar').length).toBe(1);
//     expect(wrapper.find('.title').length).toBe(1);
//   });
//   it('should render Superhost icon if the host is a Superhost', function() {
//     expect(wrapper.find('.image').length).toBe(1);
//     expect(wrapper.find('.icon').length).toBe(1);

//   });
//   it('should not render Superhost icon if the host is not a Superhost', function() {
//     sampleData.superhost = false;
//     const wrapper = shallow(<Host host={sampleData} />);
//     expect(wrapper.find('.image').length).toBe(1);
//     expect(wrapper.find('.icon').length).toBe(0);
//     sampleData.superhost = true;

//   });
//   it('should render the name of the host', function() {

//     expect(wrapper.find('.name').text()).toEqual('Hosted by ' + sampleData.name);
//   });

//   it('should render the joined at date in the correct format', function() {

//     expect(wrapper.find('.joined').text()).toEqual('Joined in ' + moment(sampleData.joined_at).format("MMMM YYYY"));
//   });


//});
