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
import React from "react";
import { Link } from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return (
    <>
      <Container maxW="100%" p={6} pl={150} pr={150}>
        <Flex color="#0066ee">
          <Box>
            <Link to="/">
              <Heading>
                myfitnesspal<span style={{ fontSize: "15px" }}>™</span>
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <ButtonGroup>
            <HStack>
              <Link to="/login">
                <Text size="md">Login</Text>
              </Link>
            </HStack>
            <HStack>
              <Link>I</Link>
            </HStack>
            <HStack>
              <Link to="/login">
                <Text size="md">Signup</Text>
              </Link>
            </HStack>
          </ButtonGroup>
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
                <Heading size="md">About</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/food">
                <Heading size="md">Food</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/exercise">
                <Heading size="md">Exercise</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/apph">
                <Heading size="md">App</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/community">
                <Heading size="md">Community</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/blog">
                <Heading size="md">Blog</Heading>
              </Link>
            </HStack>
            <HStack>
              <Link to="/premium">
                <Heading size="md">Premium</Heading>
              </Link>
            </HStack>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
