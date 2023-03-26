import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ButtonSlide({
  text,
  linking,
  buttonFontSize = "14",
  bgColor = "transparent",
  textColor = "red.500",
  borderColor = "red.300",
}) {
  return (
    <Link to={linking}>
      <Button
        bg={bgColor}
        width="100%"
        border="1px"
        _hover={{ borderColor: "transparent" }}
        borderColor={borderColor}
        rounded="sm"
        px="6"
        py="2"
        role={"group"}
        position="relative"
        cursor={"pointer"}
        boxShadow="sm"
      >
        <Box
          position="absolute"
          w="0"
          h="full"
          top="0"
          left="0"
          bg="red.500"
          transition="0.1s"
          _groupHover={{ width: "100%" }}
        />
        <Text
          w="full"
          align="center"
          color={textColor}
          fontSize={buttonFontSize}
          zIndex={9}
          transition="0.1s"
          _groupHover={{ color: "white" }}
          fontWeight={600}
        >
          {text}
        </Text>
      </Button>
    </Link>
  );
}
