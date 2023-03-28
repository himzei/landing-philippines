import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function PortfolioThree({ title, imgUrl }) {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <VStack w="full" alignItems="flex-start">
      <Text fontWeight="600" fontSize={{ sm: "16", lg: "24" }} px="4">
        {title}
      </Text>
      <Box w={"full"}>
        <Slider {...settings}>
          {imgUrl?.map((item, index) => (
            <Box
              key={index}
              w="360px"
              h="240px"
              rounded="lg"
              overflow="hidden"
              px="4"
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
    </VStack>
  );
}
