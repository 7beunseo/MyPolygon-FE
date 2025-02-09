import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as S from "./PolygonSelectStyle";

import { goBack } from "../../components/backNavigation";

export function PolygonSelect() {
  return (
    <RootWrapperNaN>
      <Group17>
        <Rectangle22 />
        <Group7>
          <Frame5>
            <Polygon1 xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgb(217, 217, 217)"
                d="M55 0L102.631 82.5L7.3686 82.5L55 0Z"
              />
            </Polygon1>
          </Frame5>
        </Group7>
        <Group8>
          <Frame5>
            <Star25 xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgb(217, 217, 217)"
                d="M50 0L73.8053 17.2348L97.5528 34.5491L88.5178 62.5152L79.3893 90.4509L50 90.5L20.6107 90.4509L11.4822 62.5152L2.44717 34.5491L26.1947 17.2348L50 0Z"
              />
            </Star25>
          </Frame5>
        </Group8>
        <Frame5_0002>
          <Rectangle40 />
        </Frame5_0002>
        <Group10>
          <Link to="/ElementSelect">
            <Rectangle23 /> <NaN_0002>사각형</NaN_0002>
          </Link>
        </Group10>
        <Group10_0001>
          <Rectangle25 />{" "}
          <Link to="/ElementSelect">
            <NaN_0003>오각형</NaN_0003>
          </Link>
        </Group10_0001>
        <Group11>
          <Rectangle23_0001 />{" "}
          <Link to="/ElementSelect">
            <NaN_0003>삼각형</NaN_0003>
          </Link>
        </Group11>
      </Group17>
      <Group55>
        <Rectangle38 />
        <Typography>
          <Typography_0001>
            <Typography_0002>
              원하는 다각형을
              <br />
              선택해 주세요!
            </Typography_0002>
          </Typography_0001>
        </Typography>
      </Group55>
      <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </Vector>
    </RootWrapperNaN>
  );
}

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

const Group17 = styled.div`
  width: 334px;
  height: 432px;
  position: absolute;
  left: 14px;
  top: 222px;
`;

const Rectangle22 = styled.div`
  width: 334px;
  height: 432px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  backdrop-filter: blur(4px);
`;

const Group7 = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 12px;
  top: 12px;
`;

const Frame5 = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Polygon1 = styled.svg`
  width: 110px;
  height: 110px;
  position: absolute;
  left: calc((calc((50% + 0px)) - 55px));
  top: calc((calc((50% + 13px)) - 55px));
`;

const Group8 = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 91px;
  top: 231px;
`;

const Star25 = styled.svg`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 25px;
  top: 29px;
  right: 25px;
  bottom: 21px;
`;

const Frame5_0002 = styled.div`
  overflow: hidden;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 171px;
  top: 12px;
  right: 13px;
  bottom: 270px;
`;

const Rectangle40 = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(217, 217, 217);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 35px;
  top: 35px;
`;

const Group10 = styled.div`
  width: 55px;
  height: 25px;
  position: absolute;
  left: 226px;
  top: 174px;
`;

const Rectangle23 = styled.div`
  width: 55px;
  height: 25px;
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

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 43px;
  position: absolute;
  left: 7px;
  top: 4px;
  &:hover,
  &:active {
    color: red; /* 클릭 시 색상 변경 */
  }
`;

const Group10_0001 = styled.div`
  width: 55px;
  height: 25px;
  position: absolute;
  left: 139px;
  top: 394px;
`;

const Rectangle25 = styled.div`
  width: 55px;
  height: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(133, 187, 226);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 43px;
  position: absolute;
  left: 6px;
  top: 4px;

  &:hover,
  &:active {
    color: red; /* 클릭 시 색상 변경 */
  }
`;

const Group11 = styled.div`
  width: 55px;
  height: 25px;
  position: absolute;
  left: 58px;
  top: 177px;
`;

const Rectangle23_0001 = styled.div`
  width: 55px;
  height: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(243, 228, 208);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Group55 = styled.div`
  width: 401px;
  height: 90px;
  position: absolute;
  left: -21px;
  top: 114px;
`;

const Rectangle38 = styled.div`
  width: 401px;
  height: 90px;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const Typography = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 142px;
  top: 18px;
`;

const Typography_0001 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  box-sizing: border-box;
`;

const Typography_0002 = styled.span`
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 800;
  text-align: center;
`;

const Vector = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 763px;
`;
