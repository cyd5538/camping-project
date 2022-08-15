import React, {useState, useEffect} from "react";
import UseFetch from "../Hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import MainSearch from "./MainSearch";
import axios from "axios";
import MainSearchResult from "./MainSearchResult";

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
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState('');


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;
  const days = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${SERVER_KEY}&numOfRows=10&pageNo=2&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  useEffect(() => {
    const getSearchData = async () => {
      const response = await axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList?serviceKey=${SERVER_KEY}&pageNo=1&numOfRows=10&MobileOS=ETC&MobileApp=AppTest&keyword=${search}&_type=json`)
      setSearchData(response.data.response.body.items.item);
      
    }
    getSearchData()
    
  }, [search])

 console.log(searchData)

  return (
    <MainStyled>
      <Swiper className="banner" slidesPerView={1} autoplay={{ delay: 4000 }}>
        {days?.map((day) => (
          <SwiperSlide key={day.contentId}>
            <>
              <img src={day.firstImageUrl} alt="sss" />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      <MainSearch search={search} handleChange={handleChange}/>
      <MainSearchResult searchData={searchData}/>
    </MainStyled>
  );
};

export default Main;
