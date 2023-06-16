import React from 'react';
import pic from '../../../assets/banner220.jpg'
import pic2 from '../../../assets/student.png'
import { Slide } from "react-awesome-reveal";

const ExtraSectionThree = () => {
    return (
        <div className='dark:bg-cyan-900 py-2 mt-4 dark:text-white'>
            <div className='relative my-10 md:mx-14 '>
                <img className='h-64 w-full' src={pic} alt="" />
                <div className='flex items-center justify-center mt-6 gap-6'>
                    <div className='w-1/2 mr-40'>
                        <Slide>
                            <h1 className='text-xl font-extrabold'>OUR ACADEMY</h1>
                            <h1>Our language academy is a premier institution dedicated to providing high-quality language education and training. We offer a wide range of language courses tailored to meet the needs of learners at different proficiency levels. With experienced instructors and a supportive learning environment, we strive to help our students develop strong language skills and achieve their language learning goals.</h1>
                        </Slide>
                    </div>
                    <img className='absolute right-5 w-96 h-64 bottom-0' src={pic2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionThree;