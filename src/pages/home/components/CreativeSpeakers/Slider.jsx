import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import SpeakersData from '../../../../design-system/components/creativeSpeakers/SpeakersData';
import CreativeSpeakers from '../../../../design-system/components/creativeSpeakers/CreativeSpeakers';

export default function Slider() {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={4}
    autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
  >
    {SpeakersData.map(item=>{
return(
        <SwiperSlide key={item.id}>
            <CreativeSpeakers  {...item} />
        </SwiperSlide>
    )
    })}
    
  </Swiper>
  )
}
