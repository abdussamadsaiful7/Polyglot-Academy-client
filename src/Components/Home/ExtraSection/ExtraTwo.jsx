import React from 'react';
import { FaBookOpen, FaDungeon, FaShieldAlt } from "react-icons/fa";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const ExtraTwo = () => {
    return (
        <div className='dark:bg-cyan-900 py-4'>
            <div className=' extraTwo md:mx-20'>
                <div className='mx-6 md:mx-10 py-10 '>
                    <Zoom>
                        <h1 className='text-center text-2xl my-4 font-bold uppercase '>Standard education is our motto.........</h1>
                    </Zoom>

                    <div className='grid md:grid-cols-3 gap-6'>

                        <div className='shadow-lg shadow-sky-400'>
                            <p className='ml-36 text-6xl mb-2 text-yellow-600'> <FaDungeon /></p>
                            <h1 className='text-lg font-extrabold text-center'>OUR MISSION</h1>
                            <div className="divider"></div>
                            <Fade cascade damping={0.4}>
                                <p className='text-gray-500 p-2'>Our mission in foreign language education is to empower individuals with the skills and confidence to communicate effectively in different languages. We strive to provide high-quality language learning programs that promote cultural understanding, foster personal growth, and enhance global communication.
                                    We aim to create an immersive and engaging learning environment where students can develop their language.  </p>
                            </Fade>
                        </div>

                        <div className='shadow-lg shadow-sky-400'>
                            <p className='ml-36 text-6xl mb-2 text-yellow-600'><FaBookOpen /></p>
                            <h1 className='text-lg font-extrabold text-center'>WHAT WE DO</h1>
                            <div className="divider"></div>
                            <Fade>
                                <p className='text-gray-500 p-2'>We provide comprehensive foreign language education programs that empower individuals to communicate effectively in different languages. Our curriculum, taught by dedicated instructors, focuses on practical language skills and cultural understanding. We offer a supportive learning environment and aim to promote diversity, inclusivity, and global citizenship through language learning.</p>
                            </Fade>

                        </div>
                        <div className='shadow-lg shadow-sky-400'>

                            <p className='ml-36 text-6xl mb-2 text-yellow-600'><FaShieldAlt /></p>

                            <h1 className='text-lg font-extrabold text-center'>WHY CHOOSE US</h1>
                            <div className="divider"></div>
                            <Fade>
                                <p className='text-gray-500 p-2'>Expert Instructors: Our experienced and knowledgeable instructors are passionate about teaching foreign languages and are dedicated to helping you achieve your language learning goals.

                                    Comprehensive Curriculum: We offer a comprehensive curriculum that covers all aspects of language learning, including speaking, listening, reading, and writing. Our structured programs ensure a well-rounded language education.
                                </p>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;

