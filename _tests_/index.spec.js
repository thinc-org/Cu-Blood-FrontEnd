import React from 'react'
import { shallow } from 'enzyme'
import IndexPage from '../pages/index'

import Statistic from "@/home/local-components/Statistic";
import Navbar from '@/shared-components/Navbar';
// import EventContainer from '@/home/local-components/EventContainer';
import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import Home from '@/home/Home'

it('renders without crashing', () => {
    shallow(<IndexPage />);
});
it('renders without crashing', () => {
  shallow(<Statistic />);
});
it('renders without crashing', () => {
  shallow(<Navbar />);
});
// it('renders without crashing', () => {
//   shallow(<EventContainer/>);
// });
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