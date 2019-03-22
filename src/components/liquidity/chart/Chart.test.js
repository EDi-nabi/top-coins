import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Chart } from './Chart';
import mockCoins from '../../../tests/mock_coins';

configure({
  adapter: new Adapter(),
});

describe('<Chart />', () => {
  let wrapper;

  beforeEach(() => {
    // turn off chart rendering
    jest.spyOn(Chart.prototype, 'componentDidMount').mockImplementation(() => {});
    jest.spyOn(Chart.prototype, 'componentDidUpdate').mockImplementation(() => {});
    jest.spyOn(Chart.prototype, 'componentWillUnmount').mockImplementation(() => {});
    wrapper = shallow(<Chart coins={ mockCoins() } amount="10" />);
  });

  it('should return appropriate amount of data for the chart', () => {
    expect(wrapper.instance().getChartData()).toHaveLength(10);
    wrapper.setProps({ amount: 50 });
    wrapper.update();
    expect(wrapper.instance().getChartData()).toHaveLength(50);
    wrapper.setProps({ amount: 100 });
    wrapper.update();
    expect(wrapper.instance().getChartData()).toHaveLength(100);
  });

});
