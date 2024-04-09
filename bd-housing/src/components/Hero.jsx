import { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import Slider from './Slider';
import CompanySlider from './CompanySlider';

const Hero = () => {
    return (
        <div className='w-full h-full'>
            <Slider/>
        </div>
    );
};

export default Hero;