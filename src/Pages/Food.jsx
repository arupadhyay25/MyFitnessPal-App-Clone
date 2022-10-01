import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
import Food_img1 from "../Images/Food_img1.JPG";
import Home_grid from "../Components/Home_grid1";
import Grid1 from "../Images/breakfast-300-calories.webp";
import Grid3 from "../Images/getting-moving.webp";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Food_data from "../Json_data/Food_data.json";
import CircleChart from "../Components/CircleChart";

const Food = () => {
  let { Apple, soup, banana, egg } = Food_data;
  let [flag, setflag] = useState(false);
  let [data, setdata] = useState("");
  let [data2, setdata2] = useState();
  let x = data2;
  let handleChange = (e) => {
    setdata(e.target.value);
    setflag(true);
  };
  let handleClick = () => {
    if (data === "egg") {
      setdata2(egg);
    }
    if (data === "soup") {
      setdata2(soup);
    }
    if (data === "apple") {
      setdata2(Apple);
    }
    if (data === "banana") {
      setdata2(banana);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    x = data2;
  }, [data2]);
  return (
    <>
      <Box w="60%" ml="11%">
        <Flex mt={10}>
          <Input
            type="text"
            placeholder="Seach for Food "
            onChange={handleChange}
          />
          <Button onClick={handleClick}>
            <Search2Icon color="black" />
          </Button>
        </Flex>
      </Box>
      {flag === false ? (
        <Image w="70%" src={Food_img1} />
      ) : data2 === undefined ? (
        <Stack w="60%" ml="11%" mt="50px">
          <Skeleton height="100px" />
          <Skeleton height="100px" />
          <Skeleton height="100px" />
        </Stack>
      ) : (
        <Stack w="60%" ml="11%" mt="50px">
          {x.map((elem, i) => (
            <div key={elem.name + i}>
              <Flex justifyContent="space-between" align="center">
                <Box height="auto" lineHeight="25px">
                  <Heading size="sm" color="#0066EE">
                    {elem.name} <CheckCircleIcon size="10px" color="green" />
                  </Heading>
                  <Text fontSize="sm">{elem.category}</Text>
                  <Text fontSize="sm">{`Calories : ${elem.Calories} Fat : ${elem.Fat}g Carbs : ${elem.Carbs}g Protein : ${elem.Protein}g`}</Text>
                </Box>
                <CircleChart
                  carbs={elem.Carbs}
                  fat={elem.Fat}
                  protein={elem.Protein}
                />
              </Flex>
              <hr />
            </div>
          ))}
        </Stack>
      )}

      <Box w="60%" mt={20} ml="11%" mb={10}>
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
