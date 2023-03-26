import { Grid, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import One from "../../assets/svg/1.svg";
import Two from "../../assets/svg/2.svg";
import Three from "../../assets/svg/3.svg";
import Four from "../../assets/svg/4.svg";
import ModalPopUp from "../ModadPopUp";
import ServiceItem from "../ServiceItem";

export const categoryList = [
  "최고의 강사가 모이는 곳",
  "압도적인 교육의 질에 집중",
  "일대일 수업 최적화 과정",
  "신뢰로 커가는 사제의 인연",
];

export default function Service() {
  const { isOpen } = useDisclosure();
  return (
    <>
      <HStack w="full" bg="gray.100" py="32" justifyContent={"center"}>
        <VStack w="7xl" alignItems={"flex-start"} px={4} spacing="16">
          <VStack
            alignItems={{ sm: "center", lg: "flex-start" }}
            spacing="0"
            w="full"
          >
            <Text fontSize={20}>4가지 강점이 있어요</Text>
            <HStack fontSize="48">
              <Text as="span">부모동반 어학연수</Text>
              <Text as="span" fontWeight={900} color="red.500">
                강점
              </Text>
            </HStack>
          </VStack>
          <Grid
            templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap="6"
            w="full"
          >
            <ServiceItem
              title="입지"
              text={categoryList[0]}
              SvgIcon={One}
              modalButton={isOpen}
            />
            <ServiceItem
              title="투자"
              text={categoryList[1]}
              SvgIcon={Two}
              modalButton={isOpen}
            />
            <ServiceItem
              title="교재"
              text={categoryList[2]}
              SvgIcon={Three}
              modalButton={isOpen}
            />
            <ServiceItem
              title="관계"
              text={categoryList[3]}
              SvgIcon={Four}
              modalButton={isOpen}
            />
          </Grid>
        </VStack>
      </HStack>
      <ModalPopUp isOpen={false} />
    </>
  );
}
