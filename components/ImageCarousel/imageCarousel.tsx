import { Image } from "../../utils/types";
import { twMerge } from "tailwind-merge";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./styles.css";

const ImageCarousel = ({
  images,
  className,
  autoplay,
}: {
  images: Image[];
  className?: string;
  autoplay?: boolean;
}) => {
  return (
    <div className="w-full flex justify-center items-center mt-1">
      <div className={twMerge("w-full relative", className)}>
        <Swiper
          modules={
            autoplay
              ? [Autoplay, Pagination, Navigation]
              : [Pagination, Navigation]
          }
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full object-cover rounded-md"
            >
              <img
                src={image.url}
                className="w-full h-full object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
