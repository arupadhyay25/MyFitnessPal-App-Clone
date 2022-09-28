import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home_grid = ({ image, title,text }) => {
  return (
    <Box
      textAlign="center"
    >
      <Center>
        <Image src={image} alt={title} />
      </Center>

      <Box p={2}>
        <Box mt="1" fontWeight="semibold" lineHeight="tight">
          {title}
        </Box>
        <Box mt="1" lineHeight="tight">
          <Text w={210}>
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home_grid;
