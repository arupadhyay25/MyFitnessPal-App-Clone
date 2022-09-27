import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import BGimage from "../Components/BGimage.png";
import BGimage2 from "../Components/BGimage2.png";
import "../styles/Home.css";
import Dairy from "../Images/diary.svg";
import Barcode from "../Images/barcode.svg";
import Shoe from "../Images/shoeblue.svg";

const Home = () => {
  return (
    <>
      <div id="bg">
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
        <div id="bg2">
          <Container ml="150px">
            <Heading fontSize="40px" w="900px">
              Search over 11 million foods in our database.
            </Heading>
            <Text maxW={450}>
              <br />
              What's in your food? Learn about calorie count, nutrition
              information and serving size.
            </Text>
            <br />
            <Input bg="white" placeholder="Basic usage" />
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
      <Box w="full" pl={150} pr={150} margin="auto">
        <Flex gap={20} justifyContent="center" textAlign="center">
          <HStack maxW="200px" justifyContent="center">
            <Text fontSize="sm">
              <Center>
                <Image src={Dairy} alt="img1" />
              </Center>
              <br />
              <Heading size="sm">Learn. Track. Improve.</Heading>
              <br />
              Keeping a food diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </Text>
          </HStack>
          <HStack maxW="200px">
            <Text fontSize="sm">
              <Center>
                <Image src={Barcode} alt="img1" />
              </Center>
              <br />
              <Heading size="sm">Learn. Track. Improve.</Heading>
              <br />
              Keeping a food diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </Text>
          </HStack>
          <HStack maxW="200px">
            <Text fontSize="sm">
              <Center>
                <Image src={Shoe} alt="img1" />
              </Center>
              <br />
              <Heading size="sm">Learn. Track. Improve.</Heading>
              <br />
              Keeping a food diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Box>
        <br/>
        <br/>
        <br/>
        <Center>
          <Button bg="blue" color="white" w={300}>
            START YOUR JOURNEY TODAY
          </Button>
        </Center>
        <br/>
        <br/>
      </Box>
      <Box textAlign="center">
        <br />
        <Heading size="2xl">Victory Stories</Heading>
        <Text fontSize="sm">
          <br />
          When you reach your goals, our whole community celebrates with you. That’s over 200 million members sharing in your victory—using <br/>it to inspire their own journey.
        </Text>
        <br />
      </Box>
    </>
  );
};

export default Home;
