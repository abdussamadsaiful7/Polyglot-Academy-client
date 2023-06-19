import React from 'react';
import { FaStar } from "react-icons/fa";
import google from '../../../assets/google.png'
import turs from '../../../assets/turspilot.png'
import g2 from '../../../assets/g2.png'
import site from '../../../assets/site.png'

const ExtraFour = () => {
    return (
        <div className=' md:mx-14 mx-32 py-10'>
            <div className='grid md:grid-cols-4 shadow-xl md:divide-x'>
                <div className='mx-auto p-10'>
                    <div className='flex'>
                        <img className='w-10 h-10 mr-2' src={google} alt="icon" />
                        <div className='flex items-center'>
                            <p className='text-3xl mr-1'>4.5</p>
                            <p className='text-yellow-500'><FaStar /></p>
                        </div>
                    </div>
                    <p>Google Reviews</p>
                </div>             
                <div className='mx-auto p-10'>
                    <div className='flex'>
                        <img className='w-10 h-10 mr-2' src={turs} alt="icon" />
                        <div className='flex items-center'>
                            <p className='text-3xl mr-1'>4.7</p>
                            <p className='text-yellow-500'><FaStar /></p>
                        </div>
                    </div>
                    <p>Trustpilot Reviews</p>
                </div>

                <div className='mx-auto p-10'>
                    <div className='flex'>
                        <img className='w-10 h-10 mr-2' src={g2} alt="icon" />
                        <div className='flex items-center'>
                            <p className='text-3xl mr-1'>4.4</p>
                            <p className='text-yellow-500'><FaStar /></p>
                        </div>
                    </div>
                    <p>G2 Reviews</p>
                </div>

                

                <div className='mx-auto p-10'>
                    <div className='flex'>
                        <img className='w-10 h-10 mr-2' src={site} alt="icon" />
                        <div className='flex items-center'>
                            <p className='text-3xl mr-1'>4.5</p>
                            <p className='text-yellow-500'><FaStar /></p>
                        </div>
                    </div>
                    <p>Sitejabber Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraFour;