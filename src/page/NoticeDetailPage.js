import React from 'react';
import Wrapper from '../common/Wrapper';
import ScrollBtn from '../common/ScrollBtn';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Footer from '../common/Footer';
import NoticePost from '../components/NoticePost';
import Contact from '../common/Contact';

const NoticeDetailPage = () => {
    return (
        <Wrapper>
        <ScrollBtn/>
        <Header/>
        <Empty/>
        <Empty/>
        <NoticePost/>
        <Empty/>
        <Contact/>
        <Empty/>
        <Footer/>
    </Wrapper>
    );
};

export default NoticeDetailPage;