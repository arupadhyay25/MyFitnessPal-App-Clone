import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const Community = () => {
  return (
    <SimpleGrid w="60%" columns={[1, null, 3]} spacing="40px">
      <VStack bg="tomato" height="80px"></VStack>
      <VStack bg="tomato" height="80px"></VStack>
      <VStack bg="tomato" height="80px"></VStack>
      <VStack bg="tomato" height="80px"></VStack>
      <VStack bg="tomato" height="80px"></VStack>
    </SimpleGrid>
  );
};

export default Community;
