import React, { useEffect, useState } from "react";
import styled from 'styled-components';
const { kakao } = window;

const MapStyle = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

const DetailMap = (data) => {
  const [map, setMap] = useState(null);

  const datas = data.data[0]
  useEffect(() => {
    const getMap = async () => {
        if(datas !== undefined){
            const container = document.getElementById("map");
            const options = { center: new kakao.maps.LatLng(datas.mapY,datas.mapX) };
            const kakaoMap = new kakao.maps.Map(container, options);
            setMap(kakaoMap);
        }
    }
    getMap()
  }, [datas]);

  return (
    <MapStyle>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <div id="map" style={{ width: "80%", height: "400px" }}></div>{" "}
      </div>
    </MapStyle>
  );
};

export default DetailMap;
