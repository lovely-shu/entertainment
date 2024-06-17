import React from 'react';
import Wrapper from '../common/Wrapper';
import ScrollBtn from '../common/ScrollBtn';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import Notice from '../components/Notice';

const NoticePage = () => {
    return (
        <Wrapper>
            <ScrollBtn/>
            <Header/>
            <Empty/>
            <Empty/>
         <Notice/>
         <Empty/>
            <Contact/>
            <Empty/>
            <Footer/>
        </Wrapper>
    );
};

export default NoticePage;