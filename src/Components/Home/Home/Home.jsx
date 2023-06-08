import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import TopInstructors from '../top6Instructor/TopInstructors';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ExtraSection></ExtraSection>
          <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;