import {
  VStack,
  Container,
  Flex,
  SimpleGrid,
  Center,
  Box,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Bmi_input from "../Components/Bmi_input";
import Speedometer from "../Components/Speedometer";
import { BmiContext } from "../Context/BmiContext/BmiContextProvider";

const Exercise = () => {
  let { Bmi } = useContext(BmiContext);
  console.log(Bmi);
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      w="70%"
      gap={10}
      m="auto"
      justifyContent="center"
      p={10}
    >
      <VStack>
        <Bmi_input />
      </VStack>
      <VStack>
        <Speedometer value={Bmi} />
      </VStack>
    </SimpleGrid>
  );
};

export default Exercise;
