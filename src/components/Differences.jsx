import { Box, Image, Text, VStack } from "@chakra-ui/react";
import ListItem from "./differences/ListItem";

export default function Differences() {
  return (
    <>
      <VStack
        w="full"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Box w="full" h="full" position="absolute" top="0" left="0">
          <Image
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="center"
            opacity="0.5"
            src="https://images.unsplash.com/photo-1678272523210-e6e4e519427b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80"
          />
        </Box>
        <VStack
          w={{ sm: "sm", md: "lg", lg: "xl" }}
          py="32"
          spacing="16"
          zIndex={99}
        >
          <VStack spacing="0">
            <Text fontSize={{ sm: "16", md: "20" }}>
              꼼꼼하게 보는 필리핀 부모동반 바른연수
            </Text>
            <Text fontWeight={900} fontSize={{ sm: "36", md: "48" }}>
              이런점이 달라요!
            </Text>
          </VStack>
          <VStack w="full" fontSize="20" spacing="4">
            <ListItem
              boldText="부모님 수업, 안하셔도 됩니다."
              normalText="아이들은 영어에 집중, 부모님은 자녀들에게 집중"
            />
            <ListItem
              boldText="전기세, 물세가 포함입니다."
              normalText="(1인 5천 페소) 눈치 보지말고 시원하게 지내세요~"
            />
            <ListItem
              boldText="학생들 기숙사 시설이 아닙니다."
              normalText="독채에서 홈away홈! 안정감 있게 해외 몇 달 살기."
            />
            <ListItem
              boldText="시끌벅적 관광지나 외딴 시골이 아닙니다."
              normalText="최고명문학교들이 모인 Real 교육중심지!"
            />
            <ListItem
              boldText="학원과 숙소 앞에 백화점/스벅 똮!"
              normalText="슬리퍼 신고 쇼핑몰, 스타벅스, 외식, 골프연습까지 "
            />
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
