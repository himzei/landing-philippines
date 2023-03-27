import { Box, Image, Text, VStack } from "@chakra-ui/react";
import TypeIt from "typeit-react";
import ButtonSlide from "../ButtonSlide";

export default function MainSlide() {
  return (
    <Box w="full" h="100vh" position="relative">
      <Image
        w="full"
        h="100vh"
        objectFit={"cover"}
        objectPosition="center"
        src="https://images.unsplash.com/photo-1627448449276-8c139d0790a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        // bg="rgba(255, 255, 255, 0.7)"
        bgGradient={
          "linear(to-br, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))"
        }
      />
      <VStack
        position={"absolute"}
        top="45%"
        left="50%"
        transform={"translate(-50%, -50%)"}
        w={{
          sm: "sm",
          md: "3xl",
          lg: "5xl",
          xl: "7xl",
        }}
        margin="0 auto"
        alignItems={"flex-start"}
        spacing="4"
        // display={"flex"}
        // justifyContent="flex-start"
      >
        <VStack spacing={0} w="full" alignItems={"flex-start"} px="8">
          <Text
            w="full"
            fontSize={{
              sm: "30px",
              lg: "60px",
            }}
            fontWeight={900}
          >
            <TypeIt
              getBeforeInit={(instance) => {
                instance.type("필리핀 부모동반 어학연수").pause(500);
                // .delete(2)
                // .pause(500)
                // .type("출입 통제 키오스크")
                // .pause(500)
                // .pause(500);

                // Remember to return it!
                return instance;
              }}
            />
          </Text>
          <Text
            transform={"translateY(-20px)"}
            fontWeight={900}
            fontSize={{
              sm: "30px",
              lg: "60px",
            }}
            color="red.500"
          >
            아이원 유학과 함께!
          </Text>
        </VStack>
        <VStack
          alignItems="flex-start"
          py="4"
          px="4"
          w="full"
          spacing={2}
          fontSize={{ sm: "16", lg: "24" }}
          fontWeight={600}
          color="gray.600"
        >
          <Text bg="rgba(255, 217, 102, 0.7)" px="4" rounded="xl" x>
            집중적인 학습으로 단기간에 영어실력을 향상하면서 자녀와 부모가 함께
          </Text>
          <Text bg="rgba(255, 217, 102, 0.7)" px="4" rounded="xl" x>
            해외살이 경험을 하며 가족 간에 친목과 유대,
          </Text>
          <Text bg="rgba(255, 217, 102, 0.7)" px="4" rounded="xl" x>
            정서적 안전성을 높여 학생과 학부모들에게 인기를 얻고 있습니다.
          </Text>
        </VStack>
        <Box />
        <Box px="8">
          <ButtonSlide
            bgColor="rgba(0,0,0)"
            textColor="white"
            text="빠른견적문의"
            borderColor="none"
          />
        </Box>
      </VStack>
    </Box>
  );
}
