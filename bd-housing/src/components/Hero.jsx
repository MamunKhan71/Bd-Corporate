import { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                return prevSlide === 3 ? 1 : prevSlide + 1;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.click();
        }
    }, [currentSlide]);

    return (
        <>
            <div className=" w-full h-[calc(750px-90px)]">
                <div className='carousel absolute top-0 h-[750px] -z-10'>
                    <div id="item1" className="carousel-item w-full">
                        <img src="/images/header3.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="/images/header2.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="/images/header.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="hidden">
                <a ref={slideRef} href={`#item${currentSlide}`} className="btn btn-xs">{currentSlide}</a>
            </div>

            <div className='bg-primary py-20 space-y-12 z-10'>
                <p className='text-center text-white font-medium'>Trusted by the world’s best</p>
                <Marquee gradient={true} gradientColor="primary" pauseOnHover={true} className='text-white text-4xl'>
                    <div className='flex gap-12 h-8'>
                        <img src="/images/Bashundhara_Group.png" className='invert brightness-0' alt="" />
                        <img src="/images/shanta.png" className='invert brightness-0' alt="" />
                        <img src="/images/shelter.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/amin.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/concordlogo.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/Adler_Real_Estate.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/white.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/reals.png" className='invert brightness-0' alt="" />
                        <img src="/public/images/board.png" className='invert brightness-0' alt="" />
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default Hero;