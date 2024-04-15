import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { ContentContext } from '../provider/ContextProvider';

export default function Testimonial() {
    const { testimonial } = useContext(ContentContext)
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
                    className="mySwiper my-12 lg:my-24"
                >
                    {
                        testimonial.map(test => <>
                            <SwiperSlide>
                                <div className='text-white bg-primary lg:h-[60dvh] py-12 lg:py-0 flex items-center justify-center flex-col space-y-4'>
                                    <h1 className='text-center font-bold text-2xl'>Testimonial</h1>
                                    <FaQuoteLeft className='text-3xl text-gray-400' />
                                    <p className='lg:w-[780px] text-center text-lg lg:text-xl'>{test.description}</p>
                                    <FaQuoteRight className='text-3xl text-gray-400' />
                                    <p className='text-base'>{test.author}</p>
                                    <p className='text-base'>{test.position}</p>
                                </div>
                            </SwiperSlide>
                        </>)
                    }
                </Swiper>
            </div>
        </>
    );
}
