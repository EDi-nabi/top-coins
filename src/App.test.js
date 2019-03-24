import React from 'react';
import { Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import Navigation from './components/common/navigation/Navigation';
import Spinner from './components/common/spinner/Spinner';

configure({
  adapter: new Adapter(),
});

describe('<App />', () => {
  let wrapper;
  let coinsLoad;

  beforeEach(() => {
    coinsLoad = jest.fn(() => {});
  });

  it('should call coinsLoad(), when loaded is false', () => {
    wrapper = shallow(<App coins={ [] } loaded={ false } coinsLoad={ coinsLoad }/>);
    expect(coinsLoad.mock.calls.length).toBe(1);
  });

  it('should not call coinsLoad(), when loaded is true', () => {
    wrapper = shallow(<App coins={ [] } loaded={ true } coinsLoad={ coinsLoad }/>);
    expect(coinsLoad.mock.calls.length).toBe(0);
  });

  it('should render <Spinner />\'s when loaded is false', () => {
    wrapper = shallow(<App coins={ [] } loaded={ false } coinsLoad={ coinsLoad }/>);
    expect(wrapper.find(Spinner)).toHaveLength(3);
  });

  it('should render <Route />\'s when loaded is true', () => {
    wrapper = shallow(<App coins={ [] } loaded={ true } coinsLoad={ coinsLoad }/>);
    expect(wrapper.find(Route)).toHaveLength(3);
  });

  it('should always render <Navigation />', () => {
    wrapper = shallow(<App coins={ [] } loaded={ false } coinsLoad={ coinsLoad }/>);
    expect(wrapper.find(Navigation)).toHaveLength(1);
    wrapper.setProps({ loaded: true });
    wrapper.update();
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

});
