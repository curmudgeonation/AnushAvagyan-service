import React from 'react';
import { shallow, mount, render } from 'enzyme';
var moment = require('moment');

import Host from '../client/src/components/Host';
import styledComponents from '../client/src/components/styledComponents';

const sampleData = require('../database/sampleData.js');

describe('Host component', function() {
  let wrapper = shallow(<Host host={sampleData} />);

  it('should render all elements correctly without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('Profile').length).toBe(1);
    expect(wrapper.find('Stats').length).toBe(1);
    expect(wrapper.find('Description').length).toBeTruthy();
    expect(wrapper.find('.lang').length).toBe(1);
    expect(wrapper.find('.lang').text()).toEqual('Language: ' + sampleData.languages);
    expect(wrapper.find('.resp-rate').length).toBe(1);
    expect(wrapper.find('.resp-rate').text()).toEqual('Response rate: ' + sampleData.responseRate + '%');
    expect(wrapper.find('.resp-time').length).toBe(1);
    expect(wrapper.find('.resp-time').text()).toEqual('Response time: ' + sampleData.responseTime);
    expect(wrapper.find('.contact-button').length).toBe(1);
    expect(wrapper.find('.payment-warning').text()).toEqual('To protect your payment, never transfer money or communicate outside of the Airbnb website or app. ');
    expect(wrapper.find('.payment-wrg-icon').length).toBe(1);
  });

  it('should not render during stay bold headline if the host does not have one', function() {
    let desc = sampleData.duringStay;
    expect(wrapper.find('.during-stay-hdln').text()).toEqual('During your stay');
    sampleData.duringStay = null;
    wrapper = shallow(<Host host={sampleData} />);
    expect(wrapper.find('.during-stay-hdln').length).toBe(0);
    sampleData.duringStay = desc;
  });

  it('should render Superhost paragraph if the host is a Superhost', function() {
    expect(wrapper.find('.superhost-true').length).toBe(1);
    expect(wrapper.find('.superhost-true').text()).toEqual(sampleData.name + ' is a SuperhostSuperhosts are experienced, highly rated hosts who are committed to providing great stays for guests.');
  });

  it('should not render Superhost p if the host is not a Superhost', function() {
    sampleData.superhost = false;
    wrapper = shallow(<Host host={sampleData} />);
    expect(wrapper.find('.superhost-true').length).toBe(0);
    sampleData.superhost = true;

    });



});
