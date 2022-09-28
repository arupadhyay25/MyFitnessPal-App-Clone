import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Input,
  Text,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Dairy from "../Images/diary.svg";
import Barcode from "../Images/barcode.svg";
import Shoe from "../Images/shoeblue.svg";
import Img3 from "../Images/home_last.JPG";
import Home_grid from "../Components/Home_grid1";
import Home_grid2 from "../Components/Home_grid2";
import Grid1 from "../Images/breakfast-300-calories.webp";
import Grid2 from "../Images/cheat-days.webp";
import Grid3 from "../Images/getting-moving.webp";
import SimpleSlider from "../Components/Slider";
import { Search2Icon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <>
      <div id="bg">
        <div id="c1">
          <div id="bg1">
            <Container ml="150px">
              <Heading fontSize="60px">
                <br />
                Fitness starts with what you eat.
              </Heading>
              <Text maxW={350}>
                <br />
                Take control of your goals. Track calories, break down
                ingredients, and log activities with MyFitnessPal.
              </Text>
              <br />
              <Button bg="blue" color="white" w={350}>
                START FOR FREE
              </Button>
              <Text maxW={350}>
                <br />
                Already have an account ? &nbsp;
                <Link to="/login">
                  <span style={{ color: "blue" }}>Login</span>
                </Link>{" "}
              </Text>
            </Container>
          </div>
          <div id="spacer" style={{ height: "630px", width: "3%" }}></div>
        </div>
        <div id="spacer" style={{ height: "80px" }}>
          <Heading fontSize="40px" ml={20}>
            Search over 11 million foods in our database.
          </Heading>
        </div>
        <div id="bg2">
          <Container ml="100px">
            <Text maxW={450}>
              <br />
              What's in your food? Learn about calorie count, nutrition
              information and serving size.
            </Text>
            <br />
            <InputGroup mt={5}>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="black" />}
              />
              <Input
                bg="white"
                placeholder="Get the nutrition for any food,like an apple"
              />
            </InputGroup>
          </Container>
        </div>
      </div>
      <Box textAlign="center">
        <br />
        <Heading size="2xl">The Tools for Your Goals</Heading>
        <Text fontSize="sm">
          <br />
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health?
          <br /> We give you the right features to hit your goals.
        </Text>
        <br />
      </Box>
      <Box>
        <Flex w="70%" m="auto" gap={2} justifyContent="center">
          <Home_grid2
            image={Dairy}
            title="Learn. Track. Improve."
            text="Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals."
          />
          <Home_grid2
            image={Barcode}
            title="Logging Simplified."
            text="Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking."
          />
          <Home_grid2
            image={Shoe}
            title="Stay Motivated"
            text="Join the World’s Largest Fitness Community for advice, tips, and support 24/7."
          />
        </Flex>
      </Box>
      <Box>
        <br />
        <Center>
          <Button bg="blue" color="white" w={300}>
            START YOUR JOURNEY TODAY
          </Button>
        </Center>
        <br />
        <br />
      </Box>
      <Box textAlign="center">
        <br />
        <Heading size="2xl">Victory Stories</Heading>
        <Text fontSize="sm">
          <br />
          When you reach your goals, our whole community celebrates with you.
          That’s over 200 million members sharing in your victory—using <br />
          it to inspire their own journey.
        </Text>
        <br />
        <SimpleSlider />
      </Box>
      <Box textAlign="center">
        <br />
        <Heading size="2xl">Recipes & Inspiration</Heading>
        <Text fontSize="sm">
          <br />
          Get nutritionist-approved recipes and motivational workout tips from
          MyFitnessPal <br />
          experts.
        </Text>
        <br />
        <Center>
          <Flex w="60%" gap={7}>
            <Home_grid
              image={Grid1}
              title="15 Make-Ahead Breakfasts Under 300 Calories"
            />
            <Home_grid image={Grid2} title="The Problem With Cheat Days" />
            <Home_grid
              image={Grid3}
              title="Essential Guide to Getting Moving"
            />
          </Flex>
        </Center>
      </Box>
      <Box textAlign="center">
        <br />
        <Heading size="2xl">
          Connect with over <br />
          50 Apps.
        </Heading>
        <Text fontSize="sm">
          <br />
          Easily link your MyFitnessPal account with apps that support your
          healthier <br />
          lifestyle. It’s not just about calories. It’s about feeling better,
          <br /> looking better, and living better.
        </Text>
        <br />
        <Center>
          <Image src={Img3} w="600px" alt="../Images/home_last.JPG" />
        </Center>
      </Box>
    </>
  );
};

export default Home;
