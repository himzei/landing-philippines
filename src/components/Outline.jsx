import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import OutlineList from "./OutlineList";

export default function Outline() {
  return (
    <VStack w="full" alignItems="center" py="32">
      <VStack w={{ sm: "sm", lg: "7xl" }} spacing="8">
        <HStack fontSize={{ sm: "30", lg: "48" }}>
          <Text as="span">부모동반 어학연수</Text>
          <Text as="span" color="red.500" fontWeight={900}>
            개요
          </Text>
        </HStack>
        <VStack w="full">
          <Grid
            color="white"
            bg="black"
            w="full"
            align="center"
            py="4"
            templateColumns={{ sm: "none", md: "1fr 3fr 1fr" }}
            fontSize="20"
            fontWeight={600}
          >
            <GridItem>
              <Text>구분</Text>
            </GridItem>
            <GridItem>
              <Text>내용</Text>
            </GridItem>
            <GridItem>
              <Text>비고</Text>
            </GridItem>
          </Grid>
          <OutlineList
            title="연수기간"
            content="2023년 4월 22일부터 자유롭게 입국 [최소 4주]"
            etc="-"
          />
          <OutlineList
            title="연수장소"
            content="아이비어학원 메트로마닐라 최대도시 Quezon City"
            etc="-"
          />
          <OutlineList
            title="숙박시설"
            content="The Residence at Commonwealth 리조트 풍의 신축 콘도 "
            etc="-"
          />
          <OutlineList
            title="등록기간"
            content="직영콘도 소진 시까지 (예년 5월 중 여름시즌 마감)"
            etc="-"
          />
          <OutlineList
            title="참가비용"
            content="1인 4주당 : 110~220만원"
            etc="가족 : 70~90만원"
          />
          <OutlineList
            title="포함내역"
            content="숙소/식사[중-석식]/청소/수업(2-8타임)/교재/전기/수도/인터넷 "
            etc="-"
          />
          <OutlineList
            title="불포함내역"
            content="항공권, 출입국서류, 비자연장, SSP, iCARD(8주+)"
            etc="-"
          />
          <OutlineList
            title="할인혜택"
            content="재방문자 5%, 조기등록 2.5% , 조기재등록 (호캉스 1회)"
            etc="-"
          />
          <OutlineList
            title="진행순서"
            content="상담> 예약 [100만원/학생] > 서류 > 완불 > 연수"
            etc="-"
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
