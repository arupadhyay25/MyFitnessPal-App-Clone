import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  Input,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import About_img1 from "../Images/About_img1.JPG";
import About_img2 from "../Images/About_img2.JPG";

const About = () => {
  return (
    <>
      <Box w="100%" p={50} pr="110px" pl="110px">
        <Heading size="md">
          Lose Weight with MyFitnessPal.com — for FREE!
        </Heading>
        <br />
        <Flex gap={10}>
          <VStack w="130%" h="40vh">
            <Text textAlign="justify">
              Losing weight isn't easy - we know. But with a membership to
              MyFitnessPal.com, you'll get the tools you need to successfully
              take weight off - and keep it off. And best of all, you can signup
              for free, no strings attached. So put away your credit card -
              you'll never have to pay a cent. <br /> <br /> Study after study
              has confirmed the benefits of keeping track of the food you eat
              and the activity you do. It's simple - the more consistently you
              track your food intake, the more likely you are to lose weight.
              That's why every successful weight management program suggests
              that you keep a food diary and/or an activity log. But recording
              everything you eat without the right tools can be tedious at best,
              or simply impossible at worst. <br /> <br /> At MyFitnessPal.com,
              we focus on making sure you can log your meals as quickly and
              easily as possible. Because the easier we make it for you, the
              more likely you are to stay on track, and the more likely you are
              to succeed in your weight loss goals.
            </Text>
          </VStack>
          <VStack w="70%" h="40vh" align="left" marginTop="-50px" p="0px 10px">
            <Text mb={2}>Member Login</Text>
            <Button p={5} bg="rgb(24,119,242)" color="white" _hover="none">
              Continue From Facebook
            </Button>
            <Text align="center">or</Text>
            <label>Username</label>
            <Input
              borderRadius="none"
              variant="none"
              h="6"
              type="text"
              outlineColor="grey"
            />
            <label>Password</label>
            <Input
              borderRadius="none"
              variant="none"
              h="6"
              type="text"
              outlineColor="grey"
            />
            <br />
            <Checkbox defaultChecked>Remember me next time</Checkbox>
            <Button h="8" p={3} bg="grey" color="white" _hover="none">
              Login
            </Button>
            <br />
            <Text as="ins" fontSize="xs">
              Forgot password or username?
            </Text>
            <Text as="ins" fontSize="xs">
              Not a member yet? Sign up now!
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Box w="100%" h="50vh" p={50} pr="110px" pl="110px">
        <Heading size="md">How does it work?</Heading>
        <br />
        <Flex gap={10}>
          <Image src={About_img1} />
          <VStack w="35%">
            <Text textAlign="justify">
              The reason our system is so easy to use is because it learns from
              you! All of us tend to eat the same foods over time.
              MyFitnessPal.com remembers what you've eaten and done most often
              in the past, and makes it easy for you to add those foods again to
              your log. So the more you track your meals, the easier it becomes!
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Box w="100%" h="62vh" p={50} pr="110px" pl="110px" textAlign="justify">
        <Heading size="md">With a FREE membership you get:</Heading>
        <br />
        <Flex gap={10}>
          <VStack w="61%" fontSize="sm">
            <Flex align="center">
              <CheckIcon color="green" mr={3} w={4} h={4} />

              <Text>
                <b>The easiest to use food diary on the web</b> - Track what you
                eat with just a few clicks from anywhere with an internet
                connection - at home or at work
              </Text>
            </Flex>
            <Flex w="full">
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text>
                <b>A searchable food database of over 300,000,000 items</b> -
                and it's growing every day!
              </Text>
            </Flex>
            <Flex align="center">
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text>
                <b>Your own personal food database</b> - add your own foods and
                recipes at any time and access them from anywhere with an
                internet connections from anywhere with an internet connection -
                at home or at work
              </Text>
            </Flex>
            <Flex align="center">
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text>
                <b>Free mobile apps for iPhone and Android </b>- so you can log
                your meals and exercise even when you are on the go
              </Text>
            </Flex>
            <Flex>
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text>
                <b>Support and motivation from people just like you</b> - Our
                discussion forums let you learn from others, share your own
                tips, receive and give encouragement, and make friends.
              </Text>
            </Flex>
            <Flex w="full" align="center">
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text>
                <b> A personalized diet profile</b> - customized to your unique
                weight loss goals
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            </Flex>
            <Flex align="center">
              <CheckIcon color="green" mr={3} w={4} h={4} />
              <Text defaultChecked>
                <b>Flexibility </b>- our system can support any diet like
                Atkins, the South Beach Diet, the Zone, and more. No matter what
                diet you're on, we can help.
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Box>
      <Box w="100%" h="50vh" p={50} pr="110px" pl="110px">
        <Heading size="md">How does it work?</Heading>
        <br />
        <Flex gap={10}>
          <Image src={About_img2} w={36} />
          <VStack fontSize="sm" w="38%">
            <Text textAlign="justify">
              All the tools you need for healthy, sustainable weight loss are
              right at your fingertips - and you'll never have to pay a cent! So
              what are you waiting for? Stop wasting money on other dieting
              programs. Join today and get on the path to healthier living!
            </Text>
            <br />
            <Button p={5} bg="rgb(86,172,86)" color="white" _hover="none">
              Jon for free !!!!
            </Button>
          </VStack>
        </Flex>
      </Box>
      <br />
      <br />
      <br />
    </>
  );
};
export default About;
