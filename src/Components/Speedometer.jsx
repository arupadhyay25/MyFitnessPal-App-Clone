import ReactSpeedometer from "react-d3-speedometer";
import {
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
  Center,
  Container,
} from "@chakra-ui/react";

function Speedometer({ value }) {
  let fvalue = value;
  if (value > 40) {
    fvalue = 40;
  } else if (value < 16) {
    fvalue = 16;
  }
  return (
    <>
      <Box>
        <ReactSpeedometer
          segments={4}
          value={fvalue}
          minValue={16}
          maxValue={40}
          segmentColors={["#21A6F3", "#40BC64", "#FC5448", "#9420DB"]}
          needleColor="black"
          currentValueText="Your BMI ${value}"
          height={200}
          customSegmentLabels={[
            {
              text: "Normal",
              position: "OUTSIDE",
              color: "#555",
            },
            {
              text: "Overwieght",
              position: "OUTSIDE",
              color: "#555",
            },
            {
              text: "Obese",
              position: "OUTSIDE",
              color: "#555",
            },
            {
              text: "Morbidly",
              position: "OUTSIDE",
              color: "#555",
            },
          ]}
        />
        <TableContainer>
          <Table
            variant="simple"
            colorScheme="teal"
            size="sm"
            color="black"
            fontWeight="semibold"
          >
            <TableCaption>BMI Chart</TableCaption>
            <Thead bg="grey">
              <Tr>
                <Th color="white">BMI</Th>
                <Th color="white">Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td bg="#21A6F3">Below 18.4</Td>
                <Td>Normal</Td>
              </Tr>
              <Tr>
                <Td bg="#40BC64">18.5-24.9</Td>
                <Td>Overweight</Td>
              </Tr>
              <Tr>
                <Td bg="#FC5448">25.0-39.9</Td>
                <Td>Obese</Td>
              </Tr>
              <Tr>
                <Td bg="#9420DB">Above 40.0</Td>
                <Td>Morbidly</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Speedometer;
