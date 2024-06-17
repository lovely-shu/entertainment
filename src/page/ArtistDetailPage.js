import React from 'react';
import Wrapper from '../common/Wrapper';
import ScrollBtn from '../common/ScrollBtn';
import Header from '../common/Header';
import Empty from '../common/Empty';
import ArtistDetail from '../components/ArtistDetail';
import Footer from '../common/Footer';

const ArtistDetailPage = () => {
    return (
        <Wrapper>
                <ScrollBtn/>
                <Header/>
                <Empty/>
                <Empty/>
                <ArtistDetail/>
                <Empty/>
                <Footer/>
            </Wrapper>
    );
};

export default ArtistDetailPage;