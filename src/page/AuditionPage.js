import React from 'react';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Audition from '../components/Audition';
import Wrapper from '../common/Wrapper';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import ScrollBtn from '../common/ScrollBtn';

const AuditionPage = () => {
    return (
        <Wrapper>
            <ScrollBtn/>
            <Header/>
            <Empty/>
            <Audition/>
            <Contact/>
            <Empty/>
            <Footer/>
        </Wrapper>
    );
};

export default AuditionPage;