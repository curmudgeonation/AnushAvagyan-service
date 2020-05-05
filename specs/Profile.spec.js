import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Profile from '../client/src/components/Profile';
import styledComponents from '../client/src/components/styledComponents';
var moment = require('moment');

const sampleData = require('../database/sampleData.js');

describe('Host component', function() {
  let wrapper = shallow(<Profile url={sampleData.avatarUrl} name={sampleData.name} date={sampleData.joined_at} superhost={sampleData.superhost}/>);

  it('should render all elements correctly without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.photo').length).toBe(1);
    expect(wrapper.find('.host-name').length).toBe(1);
    expect(wrapper.find('.date-joined').length).toBe(1);

  });

  it('should render Superhost icon if the host is a Superhost', function() {
    expect(wrapper.find('.photo').length).toBe(1);
    expect(wrapper.find('.icon').length).toBe(1);

  });

  it('should not render Superhost icon if the host is not a Superhost', function() {
    sampleData.superhost = false;
    wrapper = shallow(<Profile url={sampleData.avatarUrl} name={sampleData.name} date={sampleData.joined_at} superhost={sampleData.superhost}/>);
    expect(wrapper.find('.photo').length).toBe(1);
    expect(wrapper.find('.icon').length).toBe(0);
    sampleData.superhost = true;
  });

  it('should render the name of the host', function() {
    expect(wrapper.find('.host-name').text()).toEqual('Hosted by ' + sampleData.name);
  });

  it('should render the joined at date in the correct format', function() {
    expect(wrapper.find('.date-joined').text()).toEqual('Joined in ' + moment(sampleData.joined_at).format("MMMM YYYY"));
  });


});
