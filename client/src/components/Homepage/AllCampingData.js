import React, { useState } from "react";
import UseFetch from "../../Hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Spinner from "../../reCylce/spinner";
import { Link } from "react-router-dom";

const AllCampingStyle = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  margin-top: 150px;

  h2 {
    margin-bottom: 50px;
  }
  .allcamp {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .allcamp_card {
    width: 350px;
    height: 350px;
  }
  img {
    width: 330px;
  }
  .pagenation {
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const AllCampingData = () => {
  let [page, setPage] = useState(1);
  const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;

  const days = UseFetch(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${SERVER_KEY}&numOfRows=9&pageNo=${page}&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  function handlePagination(event) {
    setPage(event.currentTarget.textContent);
  }

  return (
    <AllCampingStyle>
      <h2>모든 캠핑장 알아보기 🖐</h2>
      {days.length < 1 ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className="allcamp">
            {days.map((day) => (
              <div className="allcamp_card" key={day.contentId}>
                <Link to={`/${day.contentId}`}>
                  <img src={day.firstImageUrl} alt="" />
                </Link>
                <div>{day.facltNm}</div>
                <div>{day.induty}</div>
                <div>{day.lineIntro}</div>
              </div>
            ))}
          </div>
          <div className="pagenation">
            <Stack spacing={2}>
              <Pagination
                count={3430 / 10}
                color="primary"
                onChange={handlePagination}
              />
            </Stack>
          </div>
        </>
      )}
    </AllCampingStyle>
  );
};

export default AllCampingData;

//3429
