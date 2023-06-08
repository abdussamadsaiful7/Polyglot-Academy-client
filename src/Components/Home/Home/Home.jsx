import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import TopInstructors from '../top6Instructor/TopInstructors';
import TopClass from '../TopClasses/TopClass';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ExtraSection></ExtraSection>
          <TopClass></TopClass>
          <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;