import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import TopInstructors from '../top6Instructor/TopInstructors';
import TopClass from '../TopClasses/TopClass';
import ExtraTwo from '../ExtraSection/ExtraTwo';
import ExtraSectionThree from '../ExtraSection/ExtraSectionThree';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ExtraSection></ExtraSection>
          <ExtraSectionThree></ExtraSectionThree>
          <TopClass></TopClass>
          <ExtraTwo></ExtraTwo>
          <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;