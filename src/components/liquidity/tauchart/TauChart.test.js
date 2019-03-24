import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TauChart } from './TauChart';
import mockCoins from '../../../tests/mock_coins';

configure({
  adapter: new Adapter(),
});

describe('<TauChart />', () => {
  let wrapper;

  beforeEach(() => {
    // turn off chart rendering
    jest.spyOn(TauChart.prototype, 'componentDidMount').mockImplementation(() => {});
    jest.spyOn(TauChart.prototype, 'componentDidUpdate').mockImplementation(() => {});
    jest.spyOn(TauChart.prototype, 'componentWillUnmount').mockImplementation(() => {});
    wrapper = shallow(<TauChart coins={ mockCoins() } amount="10" />);
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
