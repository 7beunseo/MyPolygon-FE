import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { Footer } from "../../components/Footer";
import MyFigureChart from "../Main/PolygonChart";
import WeekCalendar from "../../components/Calendar";
import Cookies from "js-cookie";
import { goBack } from "../../components/backNavigation";

export function Mypage() {
  const [previousPolygon, setPreviousPolygon] = useState(null);
  const [nextPolygon, setNextPolygon] = useState(null);
  const [chartDate, setChartDate] = useState(null); // 추가된 부분

  const [userInfo, setUserInfo] = useState({
    id: null,
    nickname: "",
    phone_number: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/auth/user-info",
          {
            withCredentials: true,
          }
        );
        setUserInfo(response.data.user);
        console.log(response.data.elements);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    // Axios를 사용한 API 호출
    const fetchData = async () => {
      try {
        const polygonId = Cookies.get("polygon_id");
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${polygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
        setChartDate(response.data.polygon.date);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [date, setDate] = useState(new Date());
  const [polygonData, setPolygonData] = useState(null);

  // ArrowRightBoldOutline 클릭 핸들러
  const handlePreviousClick = async () => {
    try {
      if (!data.previousPolygon) {
        alert("가장 마지막 기록입니다");
      } else {
        const previousPolygonId = data.previousPolygon.id;
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${previousPolygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
      }
    } catch (error) {
      console.error("Error fetching previous polygon data:", error);
    }
  };

  // ArrowRightBoldOutline_0001 클릭 핸들러
  const handleNextClick = async () => {
    try {
      if (!data.nextPolygon) {
        alert("가장 최근 기록입니다");
      } else {
        const nextPolygonId = data.nextPolygon.id;
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${nextPolygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
      }
    } catch (error) {
      console.error("Error fetching next polygon data:", error);
    }
  };

  function getFormattedDate(chartDate) {
    const dateObj = new Date(chartDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
    const day = dateObj.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }

  return (
    <RootWrapperNaN>
      <Rectangle22 />
      <Frame48>
        <NaN_0002>나의 기록</NaN_0002>
        <HeaderLogout />
        <HeaderMypage />
      </Frame48>
      <Container>
        <Group49>
          <Group48>
            <NaN_0008>
              <Ellipse11 />
            </NaN_0008>
            <_21433051 />
          </Group48>
        </Group49>
        <Group13>
          <Rectangle23 />
          <NaN_0009>아이디</NaN_0009>
        </Group13>
        <Group15>
          <Rectangle22_0001 />
          <NaN_0010>전화번호</NaN_0010>
        </Group15>
        <Group57>
          <Group69>
            <Rectangle23_0001 />
            <NaN_0011>{userInfo?.nickname}</NaN_0011>
          </Group69>
        </Group57>
        <Group59>
          <Group69>
            <Rectangle23_0001 />
            <NaN_0011>{userInfo?.phone_number}</NaN_0011>
          </Group69>
        </Group59>
      </Container>
      <MyHistory>My History</MyHistory>
      <ArrowRightBoldOutline
        onClick={handleNextClick}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a34c2a-d9be-4af0-94c3-ab0d0330e5d3"
        alt="icon"
      />
      <ArrowRightBoldOutline_0001
        onClick={handlePreviousClick}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afeaba53-4030-4b02-804d-db8d554076e5"
        alt="icon"
      />
      <Top>
        <MyFigureChart data={polygonData} />
        <DatePosition>{`📅 ${getFormattedDate(chartDate)} 📅`}</DatePosition>
      </Top>
      <Footer />
    </RootWrapperNaN>
  );
}
const DatePosition = styled.div`
  position: absolute;
  top: 500px;
  width: 200px;
  left: 80px;
`;
const Top = styled.div`
  position: absolute; // position을 absolute로 설정
  top: 140px; // 기존에 설정된 위치
  margin-top: 20px; // top 속성 대신 margin-top 속성을 사용하여 추가적인 간격 조정
`;
const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;
const Container = styled.div`
  top: 1000px;
`;
const Rectangle22 = styled.div`
  width: 287px;
  height: 187px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 38px;
  top: 96px;
  backdrop-filter: blur(4px);
`;

const Frame48 = styled.div`
  width: 360px;
  height: 54px;
  overflow: hidden;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Group = styled.div`
  width: 14px;
  height: 15px;
  position: absolute;
  left: 292px;
  top: 21px;
`;

const Vector = styled.svg`
  width: 14px;
  height: 15px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0;
`;

const Vector_0001 = styled.svg`
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 1px;
`;

const Vector_0002 = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 17px;
`;

const IconsBasicUser = styled.img`
  width: 19px;
  height: 18px;
  object-fit: cover;
  position: absolute;
  left: 323px;
  top: 19px;
`;

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 110px;
  position: absolute;
  left: 132px;
  top: 16px;
`;

const Frame50 = styled.div`
  width: 360px;
  height: 52px;
  overflow: hidden;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 0px;
  top: 748px;
`;

const Frame1 = styled.div`
  width: 360px;
  height: 52px;
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Group54 = styled.div`
  width: 41px;
  height: 30px;
  position: absolute;
  left: 297px;
  top: 16px;
`;

const IconsBasicProject = styled.img`
  object-fit: cover;
  position: absolute;
  left: 10px;
  top: 0px;
  right: 10px;
  bottom: 11px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 55px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const Group53 = styled.div`
  width: 36px;
  height: 32px;
  position: absolute;
  left: 233px;
  top: 14px;
`;

const IconsBasicChat = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 8px;
  top: 0px;
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 50px;
  position: absolute;
  left: 0px;
  top: 22px;
`;

const Group52 = styled.div`
  width: 20px;
  height: 28px;
  position: absolute;
  left: 170px;
  top: 18px;
`;

const IconlyRegularTwoToneHome = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 11px;
`;

const Home = styled.div`
  width: 16px;
  height: 14px;
  position: absolute;
  left: 2px;
  top: 1px;
`;

const Home_0001 = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 14px;
  position: absolute;
  left: 3px;
  top: 18px;
`;

const Group51 = styled.div`
  width: 36px;
  height: 30px;
  position: absolute;
  left: 92px;
  top: 16px;
`;

const IconsBasicStar = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 8px;
  top: 0px;
`;

const NaN_0006 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 50px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const Group50 = styled.div`
  width: 37px;
  height: 30px;
  position: absolute;
  left: 21px;
  top: 16px;
`;

const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 51px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const IconsBasicTime = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 9px;
  top: 0px;
`;

const Group49 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 139px;
  top: 112px;
`;

const Group48 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0008 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Ellipse11 = styled.div`
  width: 78px;
  height: 78px;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 78px / 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const _21433051 = styled.div`
  width: 49px;
  height: 53px;
  background: url(https://s3-alpha-sig.figma.com/img/04d4/6d60/a4548bb8cf4a5d935bfc6e39cb437ce0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9xB9RDSnXx12yrLpPrpwIEj3gpy03AWk2OC5UW0pJw3o3L6ZT0YL45N6foEB-shUHuSUNwo1q2PI6sqOMvO46HgG-ILNlg6-2kbrhkqQFEUHeeF-6M6OoPGrwgIsTUwcY4Jg6kv8aPJdYTcan6REZmi9rTdwm2Qs0GBYPK-8v4pHgBY~Zge0NGyO~kJBj6vuXwrx7KQ283ia6VwfibWaPkMsqqJphkV7iSszesUPIi6zHce9driC~v~fSOV-f6hj8msW1ILXIq3kjETeJ2Oc11MZ~a9s3jB9k14OuK4182QLyH9tmc1fe8wZZNMKnHUi4c8oRWsIRMr8Gg8yd99Kg__);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 15px;
  top: 10px;
`;

const Group13 = styled.div`
  width: 61px;
  height: 21px;
  position: absolute;
  left: 78px;
  top: 206px;
`;

const Rectangle23 = styled.div`
  width: 61px;
  height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(235, 186, 113);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0009 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 48px;
  min-height: 17px;
  position: absolute;
  left: 7px;
  top: 2px;
  height: 17px;
`;

const Group15 = styled.div`
  width: 63px;
  height: 21px;
  position: absolute;
  left: 76px;
  top: 244px;
`;

const Rectangle22_0001 = styled.div`
  width: 61px;
  height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(133, 187, 226);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 1px;
  top: 0px;
`;

const NaN_0010 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 63px;
  min-height: 17px;
  position: absolute;
  left: 0px;
  top: 2px;
  height: 17px;
`;

const Group57 = styled.div`
  width: 151px;
  height: 22px;
  position: absolute;
  left: 142px;
  top: 206px;
`;

const Group69 = styled.div`
  width: 151px;
  height: 22px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Rectangle23_0001 = styled.div`
  width: 140px;
  height: 20px;
  background: rgb(231, 245, 244);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 11px;
  top: 1px;
`;

const NaN_0011 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: center;
  width: 89px;
  min-height: 22px;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 22px;
`;

const Group59 = styled.div`
  width: 151px;
  height: 22px;
  position: absolute;
  left: 142px;
  top: 244px;
`;

const Frame7 = styled.div`
  width: 330px;
  height: 330px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 15px;
  top: 351px;
`;

const Frame5 = styled.div`
  width: 310px;
  height: 308px;
  overflow: hidden;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 8px;
  top: 12px;
`;

const Group_0001 = styled.div`
  width: 266px;
  height: 231px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 30px;
  top: 38px;
`;

const Vector_0003 = styled.svg`
  width: 266px;
  height: 231px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0;
`;

const Vector_0004 = styled.svg`
  width: 266px;
  height: 228px;
  position: absolute;
  left: -0px;
  top: 3px;
  right: 0px;
  bottom: 0px;
`;

const MyHistory = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 121px;
  position: absolute;
  left: 110px;
  top: 323px;
`;

const ArrowRightBoldOutline = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  position: absolute;
  left: 244px;
  top: 320px;
`;

const ArrowRightBoldOutline_0001 = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  position: absolute;
  top: 320px;
  right: 540px;
`;
