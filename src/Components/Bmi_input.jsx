import {
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import React, { useContext } from "react";
import { useState } from "react";
import { BmiContext } from "../Context/BmiContext/BmiContextProvider";

let initstate = {
  height: "",
  weight: "",
  age: "",
  gender: "",
};

const Bmi_input = () => {
  let [formdata, setformdata] = useState(initstate);
  let [status, setstatus] = useState("info");
  let { calculateBmi } = useContext(BmiContext);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  let onSubmit = () => {
    if (height === "" || weight === "" || age === "" || gender === "") {
      setstatus("error");
    } else {
      console.log(formdata);
      setformdata(initstate);
      calculateBmi(height, weight);
      setstatus("success");
    }
  };

  let { height, weight, age, gender } = formdata;
  return (
    <>
      <Heading
        bgGradient="linear(to-r, blue.500, blue.200)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Check Your Bmi
      </Heading>
      <Alert status={status}>
        {status === "info" ? (
          <>
            <AlertIcon />
            <AlertTitle>
              Please Enter the Credentials to calculate Bmi.
            </AlertTitle>
          </>
        ) : (
          false
        )}
        {status === "success" ? (
          <>
            <AlertIcon />
            <AlertTitle>Success.</AlertTitle>
          </>
        ) : (
          false
        )}
        {status === "error" ? (
          <>
            <AlertIcon />
            <AlertTitle>Credentials missing.</AlertTitle>
          </>
        ) : (
          false
        )}
      </Alert>
      <Grid templateColumns="repeat(2, 1fr)"  gap={2}>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Your Height (Cm)</FormLabel>
            <Input
              focusBorderColor="blue.400"
              name="height"
              type="text"
              value={height}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Your Weight (Kg)</FormLabel>
            <Input
              focusBorderColor="blue.400"
              name="weight"
              type="text"
              value={weight}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              focusBorderColor="blue.400"
              name="age"
              type="text"
              value={age}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              fontSize="sm"
              placeholder="Select Gender"
              value={gender}
              name="gender"
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button
              onClick={onSubmit}
              mt={4}
              variant="outline"
              colorScheme="blue"
              w="full"
            >
              Calculate BMI
            </Button>
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
};

export default Bmi_input;
