import React from 'react';
import Wrapper from '../common/Wrapper';
import ScrollBtn from '../common/ScrollBtn';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Footer from '../common/Footer';
import NewsPost from '../components/NewsPost';

const NewsDetailPage = () => {
    return (
        <Wrapper>
        <ScrollBtn/>
        <Header/>
        <Empty/>
        <Empty/>
        <NewsPost/>
        <Empty/>
        <Footer/>
    </Wrapper>
    );
};

export default NewsDetailPage;