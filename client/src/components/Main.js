import React from "react";
import UseFetch from "../Hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import MainSearch from "./MainSearch";

SwiperCore.use([Autoplay]);

const MainStyled = styled.div`
  position: relative;
  top: -80px;
  z-index: 90;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(45%);
-webkit-filter: brightness(45%);
-moz-filter: brightness(45%);
  }
`;

const Main = () => {
  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;
  const days = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${SERVER_KEY}&numOfRows=10&pageNo=2&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  console.log(days);
  return (
    <MainStyled>
      <Swiper className="banner" slidesPerView={1} autoplay={{ delay: 4000 }}>
        {days?.map((day) => (
          <SwiperSlide key={day.contentId}>
            <>
              <img src={day.firstImageUrl} alt="" />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      <MainSearch />
    </MainStyled>
  );
};

export default Main;
