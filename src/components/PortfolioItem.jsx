import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ButtonSlide from "./ButtonSlide";
import Slider from "react-slick";

export default function PortfolioItem({
  imgUrl,
  title,
  period,
  company,
  contents,
}) {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  };
  return (
    <Box w={"full"}>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", lg: "3fr 4fr" }}
        rowGap="0"
      >
        <GridItem align="center">
          <Box w={{ sm: "360px", md: "400px" }} h="260px">
            <Slider {...settings}>
              {imgUrl?.map((item, index) => (
                <Box
                  key={index}
                  w={{ sm: "360px", lg: "400px" }}
                  h="265px"
                  rounded="lg"
                  overflow="hidden"
                >
                  <Image
                    w="full"
                    objectFit="cover"
                    objectPosition="center center"
                    src={item}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </GridItem>

        <GridItem>
          <VStack
            h="full"
            alignItems={"flex-start"}
            justifyContent="space-between"
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontWeight={600} fontSize="24" px="3">
                {title}
              </Text>
              <HStack
                fontSize="14"
                bg="gray.100"
                px="4"
                py="2"
                w="full"
                justifyContent={"space-between"}
              >
                <Text>{period}</Text>
                <Text>{company}</Text>
              </HStack>
              <Box px="4">
                {contents.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </Box>
            </VStack>
            <HStack>
              <ButtonSlide text="바로가기" />
              <ButtonSlide text="상세보기" />
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
