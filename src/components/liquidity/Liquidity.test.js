import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContainerDimensions from 'react-container-dimensions';

import Liquidity from './Liquidity';

configure({
  adapter: new Adapter(),
});

describe('<Liquidity />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Liquidity />);
  });

  it('should render chart container', () => {
    expect(wrapper.find(ContainerDimensions)).toHaveLength(1);
  });

});
