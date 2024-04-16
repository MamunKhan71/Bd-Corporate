import Marquee from "react-fast-marquee";
const CompanySlider = () => {
    return (
        <div>
            <div className='bg-primary py-20 space-y-12 z-10'>
                <p className='text-center text-white font-medium'>Trusted by the world’s best</p>
                <Marquee gradient={true} gradientColor="primary" pauseOnHover={true} className='text-white text-4xl'>
                    <div className='flex gap-12 h-8'>
                        <img src="/images/Bashundhara_Group.png" className='invert brightness-0' alt="" />
                        <img src="/images/shanta.png" className='invert brightness-0' alt="" />
                        <img src="/images/shelter.png" className='invert brightness-0' alt="" />
                        <img src="/images/amin.png" className='invert brightness-0' alt="" />
                        <img src="/images/concordlogo.png" className='invert brightness-0' alt="" />
                        <img src="/images/Adler_Real_Estate.png" className='invert brightness-0' alt="" />
                        <img src="/images/white.png" className='invert brightness-0' alt="" />
                        <img src="/images/reals.png" className='invert brightness-0' alt="" />
                        <img src="/images/board.png" className='invert brightness-0' alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default CompanySlider;