import React from 'react';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Wrapper from '../common/Wrapper';
import Footer from '../common/Footer';
import ScrollBtn from '../common/ScrollBtn';
import ArtistList from '../components/ArtistList';

const ArtistPage = () => {

    return (
 
            <Wrapper>
                <ScrollBtn/>
                <Header/>
                <Empty/>
                <Empty/>
                <ArtistList/>
                <Empty/>
                <Footer/>
            </Wrapper>
    );
};

export default ArtistPage;