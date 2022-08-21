import React from 'react'
import UseFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import ImageSlide from '../components/Detail/ImageSlide'
import styeld from 'styled-components';
import DetailText from '../components/Detail/DetailText';
import DetailMap from '../components/Detail/DetailMap';

const DetailpageStyle = styeld.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`

const Detailpage = () => {
  const { id } = useParams();
  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;

  const days = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${SERVER_KEY}&numOfRows=3360&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  const image = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList?ServiceKey=${SERVER_KEY}&MobileOS=ETC&MobileApp=AppTest&contentId=${id}&_type=json`
  );

  

  // id 값이 같은거면 필터
  let detailFilter = days.filter((a) => a.contentId === id)


  return (
    <DetailpageStyle>
      <ImageSlide img={image}/>
      <DetailText data={detailFilter}/>
      <DetailMap data={detailFilter}/>
    </DetailpageStyle>
  )
}

export default Detailpage


