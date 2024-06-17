import React from 'react';
import Wrapper from '../common/Wrapper';
import ScrollBtn from '../common/ScrollBtn';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import News from '../components/News';
import Notice from '../components/Notice';

const PrPage = () => {
    return (
        <Wrapper>
            <ScrollBtn/>
            <Header/>
            <Empty/>
            <Empty/>
         <News/>
         <Empty/>
         <Notice/>
         <Empty/>
            <Contact/>
            <Empty/>
            <Footer/>
        </Wrapper>
    );
};

export default PrPage;