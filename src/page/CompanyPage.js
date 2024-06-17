import React from 'react';
import Header from '../common/Header';
import Empty from '../common/Empty';
import Company from '../components/Company';
import Organization from '../components/Organization';
import Wrapper from '../common/Wrapper';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import ScrollBtn from '../common/ScrollBtn';

const CompanyPage = () => {
    return (
        <Wrapper>
            <ScrollBtn/>
            <Header/>
            <Empty/>
            <Company/>
            <Empty/>
            <Organization/>
            <Contact/>
            <Empty/>
            <Footer/>
        </Wrapper>
    );
};

export default CompanyPage;