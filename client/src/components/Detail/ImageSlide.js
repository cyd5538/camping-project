import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlidestyled = styled.div`
  width: 90%;

  margin: 30px auto;
  img {
    width: 100%;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
  }
  .loader {
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ImageSlide = (img) => {
  return (
    <ImageSlidestyled>
      {img === undefined ? (
        <div>NO data</div>
      ) : (
        <>
          {" "}
          <Swiper
            className="banner"
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            navigation
            pagination={{ clickable: true }}
          >
            {img.img?.map((img) => (
              <SwiperSlide key={img.serialnum}>
                <>
                  <img src={img.imageUrl} alt="sss" />
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </ImageSlidestyled>
  );
};

export default ImageSlide;
