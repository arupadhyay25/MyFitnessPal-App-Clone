import { VStack, Image } from "@chakra-ui/react";
import React from "react";
import image from "../Images/Dribbble.jpeg";

const Profile = () => {
  return (
    <VStack w="full" h="full" spacing={10} alignItems="flex-start" bg="white">
      <Image mt={120} src={image}></Image>
    </VStack>
  );
};

export default Profile;
