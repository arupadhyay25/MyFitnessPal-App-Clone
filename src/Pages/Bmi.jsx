import { VStack, Container, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import Bmi_input from "../Components/Bmi_input";
import Speedometer from "../Components/Speedometer";
import { BmiContext } from "../Context/BmiContext/BmiContextProvider";

const Exercise = () => {
  let { Bmi } = useContext(BmiContext);
  console.log(Bmi);
  return (
    <>
      <Container maxW="100%" bg="blue.50" p={10} pl={100} pr={150}>
        <Flex h="auto" py={0}>
          <VStack
            w="50%"
            h="80vh"
            spacing={5}
            bg="white"
            alignItems="flex-start"
            p={10}
            pl={10}
          >
            <Bmi_input />
          </VStack>
          <VStack
            w="50%"
            h="80vh"
            spacing={10}
            alignItems="flex-start"
            bg="white"
            p={10}
            pl={20}
            pt={20}
          >
            <Speedometer value={Bmi} />
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Exercise;
