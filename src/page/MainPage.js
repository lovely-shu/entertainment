import React from 'react';
import Main from '../components/Main';
import Empty from '../common/Empty';
import MainArtist from '../components/MainArtist';
import Header from '../common/Header';
import Wrapper from '../common/Wrapper';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import ScrollBtn from '../common/ScrollBtn';

const MainPage = () => {
    return (
        <Wrapper>
            <ScrollBtn/>
            <Header/>
            <Empty/>
            <Empty/>
            <Main/>
            <Empty/>
            <MainArtist/>
            <Contact/>
            <Empty/>
            <Footer/>
        </Wrapper>
    );
};

export default MainPage;