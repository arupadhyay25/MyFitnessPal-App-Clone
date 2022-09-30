import {
  Box,
  Heading,
  Table,
  Tr,
  Td,
  TableContainer,
  Tbody,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Slider from "../Components/Appslider ";
import { Fapp } from "../Components/Fapp";
import Aapp_data from "../Components/Apph_data.json";

const Apph = () => {
  return (
    <>
      <Box w="100%" padding="20px 10px">
        <Slider />
      </Box>
      <Box w="85%" m="auto">
        <Flex gap={10}>
          <Box w="full">
            <Box w="100%">
              <Heading color="#035184" size="md" mb={3}>
                Featured Apps
              </Heading>
              <hr />
              <br />
              <Box w="100%" h="auto">
                <SimpleGrid columns={3} spacing="20px">
                  {Aapp_data.Fapp_data.map((elem) => (
                    <Fapp text={elem.text} stext={elem.stext} url={elem.url} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
            <br />
            <br />
            <Box w="100%">
              <Heading color="#035184" size="md" mb={3}>
                App Marketplace
              </Heading>
              <hr />
              <br />
              <Box w="100%" h="auto">
                <SimpleGrid columns={3} spacing="20px">
                  {Aapp_data.Mapp_data.map((elem) => (
                    <Fapp text={elem.text} stext={elem.stext} url={elem.url} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
          <Box w="20%">
            <Heading color="#035184" size="md">
              Categories
            </Heading>
            <br />
            <TableContainer>
              <Table variant="simple" w="auto" size="sm" color="blue">
                <Tbody>
                  <Tr>
                    <Td>All</Td>
                  </Tr>
                  <Tr>
                    <Td>Activity Trackers</Td>
                  </Tr>
                  <Tr>
                    <Td>step Trackers</Td>
                  </Tr>
                  <Tr>
                    <Td>Scales</Td>
                  </Tr>
                  <Tr>
                    <Td>Lifestyle</Td>
                  </Tr>
                  <Tr>
                    <Td>Wearables</Td>
                  </Tr>
                  <Tr>
                    <Td>Fitness Apps</Td>
                  </Tr>
                  <Tr>
                    <Td>Exercise Equioments</Td>
                  </Tr>
                  <Tr>
                    <Td>fertility</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Apph;
