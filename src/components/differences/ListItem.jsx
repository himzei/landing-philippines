import { HStack, Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ListItem({ boldText, normalText }) {
  return (
    <HStack w="full" bg="white" px="16" py="4" rounded="xl" boxShadow="xl">
      <BsCheckCircleFill color="red" />
      <Text as="span" fontWeight={600} color="red.500">
        {boldText}
      </Text>
      <Text as="span">{normalText}</Text>
    </HStack>
  );
}
