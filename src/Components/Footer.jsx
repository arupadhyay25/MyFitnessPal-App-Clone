import { Container, Flex, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container maxW="100%" bg="#F6F6F8">
        <Flex
          justify="center"
          gap={3}
          color="blue"
          p={2}
        >
          <Link to="/">
            <Text fontSize="xs">Calorie Counter</Text>
          </Link>

          <Link to="/blog">
            <Text fontSize="xs">Blog</Text>
          </Link>

          <Link to="/about">
            <Text fontSize="xs">About</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Terms</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Privacy</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">ContactUs</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">API</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Jobs</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Feedback</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Community Guidelines</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Ad Choices</Text>
          </Link>

          <Link to="/">
            <Text fontSize="xs">Do Not Sell My Personal Information</Text>
          </Link>
        </Flex>
      </Container>
      <Container>
        <Flex
          justify="center"
          p=" 0px 0px 30px 0px"
        >
          <Text fontSize="xs">© 2022 MyFitnessPal, Inc.</Text>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
