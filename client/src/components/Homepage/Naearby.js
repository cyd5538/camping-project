import { useState, useEffect } from "react";
import useGeoLocation from "../../Hooks/useGeoLocation";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import ImageReady from "../../assets/imageready.jpg";
import Spinner from "../../reCylce/spinner";
import {Link} from 'react-router-dom';


const NearbyStyle = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  .sub_title {
    font-size: 1.3rem;
    color: purple;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 30px;
  }

  img {
    width: 250px;
    height: 200px;
    transition: all 0.3s ease-in;
  }
  img:hover {
    transform: scale(1.1);
  }
  .data_img{
    position: relative;
    div{
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      color:black;
      width: 100%;
      background-color : rgba(200,255,255,0.7);
    }
  }
  .d

  .data_text {  
    display: flex;
    div:first-child {
      margin-bottom: 10px;
    }
    div:last-child {
      font-weight: bold;
    }
  }
  .spin{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  @media screen and (max-width:1000px) {
    img{
      width: 200px;
      height: 180px;
    }
  }
  @media screen and (max-width:800px) {
    img{
      width: 150px;
      height: 130px;
    }
  }
  @media screen and (max-width:600px) {
    img{
      width: 100px;
      height: 70px;
    }
  }


`;

const Naearby = () => {
  const [datas, setDatas] = useState([]);
  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;

  const location = useGeoLocation();
  const y = location.coordinates.lng;
  const x = location.coordinates.lat;
  const url = `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/locationBasedList?serviceKey=${SERVER_KEY}&pageNo=1&numOfRows=10&MobileOS=ETC&MobileApp=AppTest&mapX=${y}&mapY=${x}&radius=20000&_type=json`;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setDatas(response.data.response.body.items.item);
      console.log(datas);
    };
    getData();
  }, [x,y]);

  SwiperCore.use([Autoplay, Navigation]);

  return (
    <NearbyStyle>
      <div className="sub_title">가까운 곳을 원한다면 !</div>
      <h2>내 근처 캠핑장! ⭐20Km 이내⭐</h2>
      <Swiper
        className="banner"
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        navigation
      >
        {datas.length < 1 ? (
          <Spinner />
        ) : (
          <>
            {" "}
            {datas?.map((data) => (
              
              <SwiperSlide key={data.contentId} className="card">
                <>
                <Link to={`/${data.contentId}`}>
                  <div className="data_img">
                    <img
                      src={
                        data.firstImageUrl === ""
                          ? ImageReady
                          : data.firstImageUrl
                      }
                      alt={data.facltNm}
                    />
                    <div>{data.facltNm}</div>
                  </div>
                  </Link>
                </>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </NearbyStyle>
  );
};

export default Naearby;
