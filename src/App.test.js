import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Statistic from "./views/home/components/Statistic";
import Navbar from './views/shared-components/Navbar';
import EventContainer from './views/home/components/EventContainer';
import HomeHead from './views/home/components/HomeHead';
import FacebookContainer from './views/shared-components/FacebookContainer';
import Footer from './views/shared-components/Footer';
import Announcement from './views/home/components/Announcement';
import UrgentAnnouncement from './views/home/components/UrgentAnnouncement';
import Home from './views/home/Home'

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
it('renders without crashing', () => {
    shallow(<Announcement/>);
});
it('renders without crashing', () => {
    shallow(<UrgentAnnouncement/>);
});
it('renders without crashing', () => {
    shallow(<Home/>);
});