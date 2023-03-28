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

export default function Portfolio() {
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

  return (
    <VStack w="full" alignItems={"center"} py="32">
      <VStack
        w={{ sm: "sm", md: "3xl", lg: "7xl" }}
        alignItems={"flex-start"}
        spacing="8"
      >
        <PortfolioItem
          imgUrl={Accomo}
          title="숙소특징"
          period="2023.1.30~2023.2.1"
          company="주식회사 네이버"
          contents="주식회사 날라에서 의뢰해주신 물류대행 업체 소개 원페이지 사이트입니다. 본 페이지의 최종 목표는 물류대행 서비스 문의입니다. 원페이지 사이트는 간결하면서도 깔끔하게 의도하는 바를 고객에게 분명히 전달할 수 있어야 합니다. 스크롤을 따라 움직이는 트럭 인터랙션 효과가 특징입니다."
        />
        <Box w="full" h="1px" bg="gray.100" />
        <PortfolioItem
          imgUrl={Foods}
          title="랜딩페이지 제작서비스"
          period="2023.1.30~2023.2.1"
          company="주식회사 네이버"
          contents="안전도어 시공사 우즈에어 안전도어 업체소개 반응형 홈페이지입니다. 메인페이지 포함 총 17페이지로 구성되었으며, 회사소개, 연혁, 제품소개, 게시판, 고객문의 등 다양한 기능들이 포함되어 있습니다."
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
      </VStack>
    </VStack>
  );
}
