import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  let { state } = useContext(AuthContext);
  console.log(state.isAuth === true ? "true" : "false");
  return (
    <>
      <Container maxW="100%" p={4} pl={150} pr={150}>
        <Flex color="#0066ee" align="center">
          <Box>
            <Link to="/">
              <Heading size="lg" style={{ display: "flex" }}>
                myfitnesspal<Text style={{ fontSize: "15px" }}>™</Text>
              </Heading>
            </Link>
          </Box>
          <Spacer />
          {state.isAuth ? (
            <h1>Hi Abhishek !!!</h1>
          ) : (
            <ButtonGroup>
              <HStack>
                <Link to="/login">
                  <Text size="sm">Login</Text>
                </Link>
              </HStack>
              <HStack>
                <Link>I</Link>
              </HStack>
              <HStack>
                <Link to="/login">
                  <Text size="sm">Signup</Text>
                </Link>
              </HStack>
            </ButtonGroup>
          )}
        </Flex>
      </Container>
      <Container
        maxW="100%"
        p={3}
        pl={150}
        pr={150}
        bg="#0066ee"
        color="#ffffff"
      >
        <Flex>
          <ButtonGroup gap={7}>
            <HStack>
              <Link to="/about">
                <Heading size="sm">About</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/food">
                <Heading size="sm">Food</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/bmi">
                <Heading size="sm">BMI</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/apph">
                <Heading size="sm">App</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/community">
                <Heading size="sm">Community</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/blog">
                <Heading size="sm">Blog</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/premium">
                <Heading size="sm">Premium</Heading>
              </Link>
            </HStack>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
