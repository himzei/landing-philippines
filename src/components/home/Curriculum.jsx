import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import CurriculumItem from "../CurriculumItem";
import Curri1 from "../../assets/jpg/curri1.jpg";
import Curri2 from "../../assets/jpg/curri2.jpg";
import Curri3 from "../../assets/jpg/curri3.jpg";
import Curri4 from "../../assets/jpg/curri4.jpg";

export default function Curriculum() {
  return (
    <HStack
      w="full"
      justifyContent={"center"}
      py="32"
      bgAttachment={"fixed"}
      position="relative"
      bgImage={
        "url('https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')"
      }
    >
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        bgGradient={"linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))"}
      />
      <VStack w="full" alignItems="center" px={4} spacing="16" zIndex={9}>
        <VStack alignItems="center" spacing="0" w="full">
          <Text color="white" fontSize={20} px="4" align="center">
            부모동반 어학연수 커리큘럼을 알려드립니다.
          </Text>
          <HStack fontSize={{ sm: "36", lg: "48" }}>
            <Text as="span" fontWeight={900} color="white">
              커리큘럼
            </Text>
          </HStack>
        </VStack>
        <Grid
          w="4xl"
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          rowGap="10"
        >
          <CurriculumItem
            title="1대1 수업"
            content1="- W!SE Method®에 따라 레벨에 맞춰 전과목 연결강의"
            content2="- 일6시간 원어민 1대1수업 (문법-듣기-읽기-쓰기-말하기)"
            content3="- 전 강좌 유기적 연결로 이해도와 활용력을 최대화 합니다."
            times="4~7 시간"
            imageUrl={Curri1}
          />
          <CurriculumItem
            title="문법 원장 특강"
            content1="- 학년별 또는 실력별로 문법 또는 독해 그룹수업 진행"
            content2="- 토익 만점, 명문 고교, 명문대 다수 배출"
            content3="- 영문법을 재밌게 체계적으로 배우고, 시험대비법을 익힘"
            times="0~2 시간"
            imageUrl={Curri2}
          />
          <CurriculumItem
            title="선택 ​그룹 수업"
            content1="- 경력이 다양한 교사들과 6명 소그룹으로 재미있게"
            content2="- 디지털 아트/영상편집/베이킹 Learn to Learn 수업"
            content3="- 수능/디베이트/한국내신/텝스/작문 강의도 진행"
            times="추가신청"
            imageUrl={Curri3}
          />
          <CurriculumItem
            title="선택 ​수학 수업"
            content1="- 전문 수학강사가 선행학습 지도"
            content2="- 학년 별 소그룹 수업 진행"
            content3="- 35-50만원으로 일대일 수업 진행가능"
            times="추가신청"
            imageUrl={Curri4}
          />
        </Grid>
      </VStack>
    </HStack>
  );
}
