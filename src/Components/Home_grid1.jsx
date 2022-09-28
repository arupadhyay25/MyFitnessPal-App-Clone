import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Home_grid = ({ image, title }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="left"
      boxShadow="2xl"
      rounded="md"
      bg="white"
    >
      <Image src={image} alt={title} />

      <Box p={2}>
        <Box mt="1" fontWeight="semibold" lineHeight="tight">
          {title}
        </Box>
        <br />
        <Box mt="1" lineHeight="tight" color="blue">
          <a href="#">MyFitnessPal Blog</a>
        </Box>
        <br />
      </Box>
    </Box>
  );
};

export default Home_grid;
