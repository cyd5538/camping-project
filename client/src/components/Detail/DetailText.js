import React from 'react'
import styled from 'styled-components';

const DataiTextStyle = styled.div`
    h2{
        margin-bottom: 20px;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;

    }
    p{
        font-weight: bold;
        color: purple;
        display: block;
    }
    .Btn{
        text-align: center;
        width:  110px;
        padding: 0.5rem;
        background-color: red;
        color: white;
        cursor: pointer;
        transition: all ease-in 0.3s;
    }
    .Btn:hover{
        transform: scale(1.05);
    }
`

const DetailText = (data) => {
    console.log(data.data);
    const datas = data.data[0]
  return (
    <DataiTextStyle>
      <h2>{datas?.sigunguNm} {datas?.facltNm}</h2>
      <div>{datas?.intro}</div>
      <div>
        <div><p>주소</p> {datas?.addr1}</div>
        <div><p>문의처</p> {datas?.tel}</div>
        <div><p>캠핑장 유형</p> {datas?.induty}</div>
        <div><p>운영기간</p>{datas?.operPdCl}</div>
        <div><p>홈페이지</p> {datas?.homepage}</div>
        <div className='Btn'>찜하기 🧡</div>
      </div>
    </DataiTextStyle>
  )
}

export default DetailText
