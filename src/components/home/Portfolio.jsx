import { Box, VStack } from "@chakra-ui/react";
import PortfolioItem from "../PortfolioItem";

import Accomo1 from "../../assets/jpg/accomo/1.jpg";
import Accomo2 from "../../assets/jpg/accomo/2.jpg";
import Accomo3 from "../../assets/jpg/accomo/3.jpg";
import Accomo4 from "../../assets/jpg/accomo/4.jpg";
import Accomo5 from "../../assets/jpg/accomo/5.jpg";
import Accomo6 from "../../assets/jpg/accomo/6.jpg";
import Accomo7 from "../../assets/jpg/accomo/7.jpg";

import Foods1 from "../../assets/jpg/foods/1.jpg";
import Foods2 from "../../assets/jpg/foods/2.jpg";
import Foods3 from "../../assets/jpg/foods/3.jpg";
import Foods4 from "../../assets/jpg/foods/4.jpg";
import Foods5 from "../../assets/jpg/foods/5.jpg";
import Foods6 from "../../assets/jpg/foods/6.jpg";
import Foods7 from "../../assets/jpg/foods/7.jpg";
import Foods8 from "../../assets/jpg/foods/8.jpg";
import Foods9 from "../../assets/jpg/foods/9.jpg";
import Foods10 from "../../assets/jpg/foods/10.jpg";
import Foods11 from "../../assets/jpg/foods/11.jpg";
import Foods12 from "../../assets/jpg/foods/12.jpg";
import Foods13 from "../../assets/jpg/foods/13.jpg";
import Foods14 from "../../assets/jpg/foods/14.jpg";
import Foods15 from "../../assets/jpg/foods/15.jpg";
import Foods16 from "../../assets/jpg/foods/16.jpg";
import Foods17 from "../../assets/jpg/foods/17.jpg";
import Foods18 from "../../assets/jpg/foods/18.jpg";
import Foods19 from "../../assets/jpg/foods/19.jpg";
import Foods20 from "../../assets/jpg/foods/20.jpg";
import Foods21 from "../../assets/jpg/foods/21.jpg";
import PortfolioThree from "../PortfoloiThree";

import Trip01_1 from "../../assets/jpg/trip/01/1.jpg";
import Trip01_2 from "../../assets/jpg/trip/01/2.jpg";
import Trip01_3 from "../../assets/jpg/trip/01/3.jpg";
import Trip01_4 from "../../assets/jpg/trip/01/4.jpg";

import Trip02_1 from "../../assets/jpg/trip/02/1.jpg";
import Trip02_2 from "../../assets/jpg/trip/02/2.jpg";
import Trip02_3 from "../../assets/jpg/trip/02/3.jpg";
import Trip02_4 from "../../assets/jpg/trip/02/4.jpg";

import Trip03_1 from "../../assets/jpg/trip/03/1.jpg";
import Trip03_2 from "../../assets/jpg/trip/03/2.jpg";
import Trip03_3 from "../../assets/jpg/trip/03/3.jpg";
import Trip03_4 from "../../assets/jpg/trip/03/4.jpg";

import Trip04_1 from "../../assets/jpg/trip/04/1.jpg";
import Trip04_2 from "../../assets/jpg/trip/04/2.jpg";
import Trip04_3 from "../../assets/jpg/trip/04/3.jpg";
import Trip04_4 from "../../assets/jpg/trip/04/4.jpg";

export default function Portfolio() {
  const Trip04 = [Trip04_1, Trip04_2, Trip04_3, Trip04_4];
  const Trip03 = [Trip03_1, Trip03_2, Trip03_3, Trip03_4];
  const Trip02 = [Trip02_1, Trip02_2, Trip02_3, Trip02_4];
  const Trip01 = [Trip01_1, Trip01_2, Trip01_3, Trip01_4];
  const Accomo = [
    Accomo1,
    Accomo2,
    Accomo3,
    Accomo4,
    Accomo5,
    Accomo6,
    Accomo7,
  ];
  const Foods = [
    Foods1,
    Foods2,
    Foods3,
    Foods4,
    Foods5,
    Foods6,
    Foods7,
    Foods8,
    Foods9,
    Foods10,
    Foods11,
    Foods12,
    Foods13,
    Foods14,
    Foods15,
    Foods16,
    Foods17,
    Foods18,
    Foods19,
    Foods20,
    Foods21,
  ];

  const Contents = {
    foods: [
      "싱싱안심 원장 가족이 먹는 식사 그대로, 매일 새로 조리한 음식이 제공됩니다.",
      "입맛보장 한국에서 한식당 주방장 경력 15년의 원장 어머니가 직접 식사를 책임집니다.",
      "고기고기 모든 끼니에 (돼지고기=소고기>닭고기>생선,아침=두부/계란)이 꼭 포함됩니다.",
      "우리집밥 친정 어머니가 해주던 집밥, 아이가 좋아하는 반찬을 해외에서 집처럼 즐기세요. ",
    ],
    accomos: [
      "모두 가깝습니다. 도보로 학원2-5분, 골프연습장3-6분, 쇼핑몰4-8분, 은행 2-5분",
      "속이 시원합니다. 온수기/에어컨 자유로운 사용 [팡팡 쓰고 외출할 때만 꺼주세요]",
      "맘이 편안합니다. 남녀외국 학생들로 어수선한 학원 기숙사 아닌, 안정감 있는 주거단지",
      "안전 그리고 안전. 슬럼없는 지역에 메인게이트-로비까지 출입 허가자만 통과가능",
    ],
  };

  return (
    <VStack w="full" alignItems={"center"} py="32">
      <VStack
        w={{ sm: "sm", md: "3xl", lg: "7xl" }}
        alignItems={"flex-start"}
        spacing="8"
      >
        <PortfolioItem
          imgUrl={Accomo}
          title="숙소정보"
          period="필리핀 마닐라"
          company="-"
          contents={Contents.accomos}
        />
        <Box w="full" h="1px" bg="gray.100" />
        <PortfolioItem
          imgUrl={Foods}
          title="식사정보"
          period="필리핀 마닐라"
          company="-"
          contents={Contents.foods}
        />
        <Box w="full" h="1px" bg="gray.100" />
        <PortfolioThree
          imgUrl={Trip01}
          title="Enchanted Kingdom 필리핀 최대 실내 놀이공원"
        />
        <PortfolioThree
          imgUrl={Trip02}
          title="Dream Play 세계적인 영화사 드림웍스가 운영하는 체험형 어린이 테마파크"
        />
        <PortfolioThree
          imgUrl={Trip03}
          title="Matabungkay Beach Hotel 색다른 해상땟목/스노클링/체험다이빙 가능"
        />
        <PortfolioThree
          imgUrl={Trip04}
          title="88 Hot Spring Resort '88 온천'  한국인운영 필리핀최대 노천온천  "
        />
      </VStack>
    </VStack>
  );
}
