import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import ButtonSlide from "./ButtonSlide";

export default function CurriculumItem({
  imageUrl,
  title,
  content1,
  content2,
  content3,
  times,
}) {
  return (
    <Box w="400px" cursor="pointer" mx="auto">
      <VStack w="full" role="group" spacing="0">
        <Box
          w="400px"
          h="225px"
          position="relative"
          transition="0.4s"
          overflow={"hidden"}
        >
          <Image
            w="full"
            h="full"
            objectFit={"cover"}
            transition="0.4s"
            _groupHover={{ transform: "scale(1.1)" }}
            src={imageUrl}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bgGradient="linear(to-r, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"
          />
        </Box>
        <VStack
          w="400px"
          bg="gray.100"
          px="4"
          py="6"
          alignItems={"flex-start"}
          spacing="4"
        >
          <HStack justifyContent="space-between" w="full">
            <Text
              fontWeight={600}
              fontSize="28"
              _groupHover={{ color: "red.500" }}
            >
              {title}
            </Text>
            <Text fontSize="20">{times}</Text>
          </HStack>
          <VStack spacing={0} w="full" alignItems="flex-start">
            <Text>{content1}</Text>
            <Text>{content2}</Text>
            <Text>{content3}</Text>
          </VStack>
          <ButtonSlide text="자세히보기" />
        </VStack>
      </VStack>
    </Box>
  );
}
