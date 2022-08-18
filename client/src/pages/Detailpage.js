import React from 'react'
import UseFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom';


const Detailpage = () => {
  const { id } = useParams();
  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;
  const days = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${SERVER_KEY}&numOfRows=3360&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  // id 값이 같은거면 필터
  let detailFilter = days.filter((a) => a.contentId === id)




  return (
    <div>
      {detailFilter[0]?.facltNm}
      {detailFilter[0]?.induty}
    </div>
  )
}

export default Detailpage