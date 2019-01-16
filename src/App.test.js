import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
it('renders without crashing', () => {
    shallow(<App />);
});

import Statistic from "./component/Statistic";
it('renders without crashing', () => {
  shallow(<Statistic />);
});

import Navbar from './component/Navbar';
it('renders without crashing', () => {
  shallow(<Navbar />);
});

import EventContainer from './component/EventContainer';
it('renders without crashing', () => {
  shallow(<EventContainer/>);
});

import HomeHead from './component/HomeHead';
it('renders without crashing', () => {
    shallow(<HomeHead/>);
});

import FacebookContainer from './component/FacebookContainer';
it('renders without crashing', () => {
    shallow(<FacebookContainer/>);
});

import Footer from './component/Footer';
it('renders without crashing', () => {
    shallow(<Footer/>);
});
