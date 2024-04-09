import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Testimonial() {
    return (
        <>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-24"
                >
                    <SwiperSlide>
                        <>
                            <div className='text-white bg-primary h-[50dvh] flex items-center justify-center flex-col space-y-4'>
                                <h1 className='text-center font-bold text-2xl'>Testimonials</h1>
                                <FaQuoteLeft className='text-3xl text-gray-400' />
                                <p className='w-[780px] text-center text-xl'>What a great experience! I have visited one of the workshops and
                                    attended a masterclass, and both were super useful for young
                                    designers. Highly recommended.</p>
                                <FaQuoteRight className='text-3xl text-gray-400' />
                                <p className='text-base'>Ali Tufan</p>
                                <p className='text-base'>Product Manager</p>
                            </div>
                        </>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
