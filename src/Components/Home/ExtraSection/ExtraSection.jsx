import React from 'react';
import Lottie from "lottie-react"
import classAnimation from '../../../assets/animation/90714-online-learning.json'

const ExtraSection = () => {
    return (
        <div className='mt-2 md:flex items-center justify-around md:px-20 dark:bg-cyan-900 dark:text-white'>
            <div>
                <Lottie className='md:w-96 md:h-96 mx-auto w-64' animationData={classAnimation} loop={true} />
            </div>

            <div className='dark:bg-cyan-900 dark:text-white'>

                <div className="collapse collapse-arrow bg-base-200 dark:bg-cyan-900">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        History of our Academy...
                    </div>
                    <div className="collapse-content">
                        <p>Polyglot Academy was established in 1992 in Dhaka, Bangladesh, with a mission to provide high-quality language education and promote cultural exchange. Starting as a small language center, it quickly gained a reputation for its innovative teaching methods and personalized approach. Over the years, the academy expanded its language offerings, relocated to a larger premises, and became a leading institution in Dhaka. Today, it offers a wide range of language courses, proficiency exams, and cultural programs, empowering students to become confident global communicators.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 dark:bg-cyan-900">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        The Courses we provide..
                    </div>
                    <div className="collapse-content">
                        <p>We offer a wide range of language courses, including English, Italian, German, Arabic, Korean, and Japanese.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 dark:bg-cyan-900">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Our purpose and future plan
                    </div>
                    <div className="collapse-content">
                        <p>Our purpose at Polyglot Academy is to provide high-quality language education, fostering a passion for learning and cultural understanding. Our future plans include expanding language offerings, incorporating innovative teaching methods, enhancing immersion experiences, and becoming a global leader in language education.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;