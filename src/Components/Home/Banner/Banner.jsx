import React from 'react';
import italian1 from '../../../assets/italian1.jpg'
import germany2 from '../../../assets/germany2.jpg'
import turkey3 from '../../../assets/turkey3.jpg'
import english4 from '../../../assets/english4.jpg'
import korean5 from '../../../assets/korean5.jpg'
import arabic6 from '../../../assets/arabic6.jpg'

const Banner = () => {
    return (

        <div className="carousel w-full h-[600px] dark:bg-cyan-900">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={italian1} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white dark:text-red-400'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn  btn-square btn-outline btn-error mr-5">❮</a>
                    <a href="#slide2" className="btn  btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={germany2} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore  the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide1" className="btn  btn-square btn-outline btn-error  mr-5">❮</a>
                    <a href="#slide3" className="btn  btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={turkey3} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-between bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide2" className="btn  btn-square btn-outline btn-error  mr-5">❮</a>
                    <a href="#slide4" className="btn  btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={english4} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-between bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide3" className="btn  btn-square btn-outline btn-error  mr-5">❮</a>
                    <a href="#slide5" className="btn  btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={korean5} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore  the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-between bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide4" className="btn  btn-square btn-outline btn-error  mr-5">❮</a>
                    <a href="#slide6" className="btn  btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={arabic6} className="w-full" />
                <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                    <div className='text-white'>
                        <h2 className='text-6xl pb-8 font-semibold'>Explore  the Power   <br />  of Languages here...</h2>
                        <p className='pb-8'>There are many variations of language courses of  available, and<br /> The majority have completed their courses along with their assignments and they are satisfied</p>
                        <div>
                            <button className="btn btn-outline  btn-error text-white">Latest Course</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-between bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide5" className="btn btn-square btn-outline btn-error mr-5">❮</a>
                    <a href="#slide1" className="btn btn-square btn-outline btn-error">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;