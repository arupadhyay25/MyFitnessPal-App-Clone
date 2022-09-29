import { CheckIcon } from "@chakra-ui/icons";
import {
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Image1 from "../Images/p_img1.JPG";
import Image2 from "../Images/p_img2.jpg";
import Image3 from "../Images/p_img3.jpg";

let data = [
  {
    title: "Nutrition Tracking",
    text: "Log your food from our extensive database.",
    free: true,
    premium: true,
  },
  {
    title: "Customizable Carbs, Protein & Fat Goals",
    text: "Track your macros by gram or percentage.",
    free: false,
    premium: true,
  },
  {
    title: "Guided Fitness & Nutrition Plans",
    text: "Get coaching and content to achieve your goals.",
    free: false,
    premium: true,
  },
  {
    title: "Custom Home Screen Dashboard",
    text: "Reach goals faster by seeing what’s important to you.",
    free: false,
    premium: true,
  },
  {
    title: "Food Analysis & Insights",
    text: "Follow your progress through your data.",
    free: true,
    premium: true,
  },
  {
    title: "Meals & Recipes",
    text: "Learn how to eat with your goals in mind.",
    free: true,
    premium: true,
  },
  {
    title: "Ad-Free Experience",
    text: "Focus on your fitness and nutrition without ads.",
    free: false,
    premium: true,
  },
  {
    title: "Subtract Exercise Calories",
    text: "Adjust your day’s calorie goal automatically.",
    free: false,
    premium: true,
  },
  {
    title: "Quick-Add Carbs, Fat & Protein",
    text: "Log your meals quickly and easily.",
    free: false,
    premium: true,
  },
  {
    title: "File Export",
    text: "Download CSV files of all your progress.",
    free: false,
    premium: true,
  },
];

const Premium = () => {
  return (
    <div>
      <Image src={Image1} alt="nsdgdf" />
      <Image src={Image2} alt="sdgd" />
      <Box w="60%" m="auto">
        <TableContainer>
          <Table variant="striped">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Free</Th>
                <Th>Premium</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((elem)=>(
                <Tr>
                <Td p={5} pl="20px">
                  <b>{elem.title}</b><br/>{elem.text}
                </Td>
                <Td>
                  {elem.free?<CheckIcon
                    w={6}
                    h={6}
                    color="white"
                    bg="blue"
                    borderRadius="50%"
                    p={1}
                  />:false}
                </Td>
                <Td>
                  <CheckIcon
                    w={6}
                    h={6}
                    color="white"
                    bg="blue"
                    borderRadius="50%"
                    p={1}
                  />
                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Image src={Image3} alt="nsdhfdghgdf" />
    </div>
  );
};

export default Premium;
