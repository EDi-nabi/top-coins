import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Overview } from './Overview';
import mockCoins from '../../tests/mock_coins';

configure({
  adapter: new Adapter(),
});

describe('<Overview />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Overview coins={ mockCoins() } amount="10" />);
  });

  it('should render <table>', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  it('should render appropriate number of table rows', () => {
    expect(wrapper.find('tr')).toHaveLength(11);
    wrapper.setProps({ amount: 50 });
    wrapper.update();
    expect(wrapper.find('tr')).toHaveLength(51);
    wrapper.setProps({ amount: 100 });
    wrapper.update();
    expect(wrapper.find('tr')).toHaveLength(101);
  });

});
