import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='w-full h-full absolute top-0 -z-10'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[90dvh]"
            >
                <SwiperSlide><img className='h-full w-full object-cover' src="images/header3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="images/header2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="images/header.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
