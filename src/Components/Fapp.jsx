import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Fapp = ({ text, stext, url }) => {
  return (
    <Box pl={2} w="full" height="auto">
      <Flex gap={2}>
        <Image p={0} w="80px" h="80px" src={url} />
        <Box lineHeight={7}>
          <Text fontSize="sm" fontWeight="semibold">
            {text}
          </Text>
          <Text fontSize="xs">{stext}</Text>
          <Button bg="grey" color="white" p={0.5} h="auto" w="80px">
            Get
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
