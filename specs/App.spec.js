import React from 'react';
import { shallow, mount, render } from 'enzyme';
var moment = require('moment');


import App from '../client/src/components/App';
import Host from '../client/src/components/Host';


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
