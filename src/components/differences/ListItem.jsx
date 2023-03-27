import { Grid, Text } from "@chakra-ui/react";

export default function ListItem({ boldText, normalText }) {
  return (
    <Grid
      w="full"
      bg="white"
      px="16"
      py="4"
      rounded="xl"
      boxShadow="xl"
      flexWrap={"wrap"}
      borderLeft="2px"
      borderColor="red.500"
    >
      <Text as="span" fontWeight={600} color="red.500">
        {boldText}
      </Text>
      <Text as="span">{normalText}</Text>
    </Grid>
  );
}
