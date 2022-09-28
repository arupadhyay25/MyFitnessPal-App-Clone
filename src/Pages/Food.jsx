import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Food_img1 from "../Images/Food_img1.JPG";
import Home_grid from "../Components/Home_grid1";
import Grid1 from "../Images/breakfast-300-calories.webp";
import Grid2 from "../Images/cheat-days.webp";
import Grid3 from "../Images/getting-moving.webp";

const Food = () => {
  return (
    <>
      <Box w="60%" ml="11%">
        <InputGroup mt={5}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="black" />}
          />
          <Input type="text" placeholder="Seach for Food " />
        </InputGroup>
        <Image src={Food_img1} />
      </Box>
      <Box w="60%" ml="11%" mb={10}>
        <Heading size="xl" mb={10}>
          Recipes & Inspiration
        </Heading>
        <Flex w="80%" gap={7}>
          <Home_grid
            image={Grid1}
            title="15 Make-Ahead Breakfasts Under 300 Calories"
          />
          <Home_grid
            image={Grid3}
            title="Essential Guide to Getting Moving on myfitnesspal"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Food;
