import React from 'react';
import './Style.css'
import pic1 from '../../../assets/teacher.jpeg'
import pic2 from '../../../assets/teacher2.jpg'
import pic3 from '../../../assets/knowledge.jpg'

const BannerCard = () => {
    return (
        <div className='my-20 mx-14 grid md:grid-cols-3 gap-4 h-[200px]'>
            <div className='card mt-4 mx-auto'>
                <div className='imgBox'>
                    <img src={pic1} alt="" />
                </div>
                <div className='content'>
                    <h2 className='text-lg font-semibold'>Best care</h2>
                    <p className='font-extralight text-xs'> personalized attention, student support services, inclusive environment, and continuous improvement are some of the key factors that contribute to our commitment to providing the best care at our language academy.</p>
                </div>
            </div>
            <div className='card mt-4 mx-auto'>
                <div className='imgBox'>
                    <img src={pic2} alt="" />
                </div>
                <div className='content'>
                    <h2 className='text-lg font-semibold'>Best Teachers</h2>
                    <p className='font-extralight text-xs'>Our language academy is proud to have the best teachers in the industry. Our instructors are highly experienced, qualified, and dedicated to helping students achieve their language learning goals.</p>
                </div>
            </div>
            <div className='card mt-4 mx-auto'>
                <div className='imgBox'>
                    <img src={pic3} alt="" />
                </div>
                <div className='content'>
                    <h2 className='text-lg font-semibold'>Knowledge Zone</h2>
                    <p className='font-extralight text-xs'>The Knowledge Zone is a comprehensive platform designed to provide access to a wide range of educational resources and information. It serves as a centralized hub for individuals seeking knowledge, learning materials, and insights on various topics.</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;