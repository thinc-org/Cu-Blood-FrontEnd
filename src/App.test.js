import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Statistic from "./component/Statistic";
import Navbar from './component/Navbar';
import EventContainer from './component/EventContainer';
import HomeHead from './component/HomeHead';
import FacebookContainer from './component/FacebookContainer';
import Footer from './component/Footer';

it('renders without crashing', () => {
    shallow(<App />);
});
it('renders without crashing', () => {
  shallow(<Statistic />);
});
it('renders without crashing', () => {
  shallow(<Navbar />);
});
it('renders without crashing', () => {
  shallow(<EventContainer/>);
});
it('renders without crashing', () => {
    shallow(<HomeHead/>);
});
it('renders without crashing', () => {
    shallow(<FacebookContainer/>);
});
it('renders without crashing', () => {
    shallow(<Footer/>);
});
