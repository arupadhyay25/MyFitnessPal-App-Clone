import { Flex, Container } from "@chakra-ui/react";
import Profile from "../Components/Profile";
import ProfileForm from "../Components/ProfileForm";

const Login = () => {
  return (
    <>
      <Container maxW="100%" bg="blue.50" p={10} pl={150} pr={150}>
        <Flex h="75vh" py={0}>
          <Profile />
          <ProfileForm />
        </Flex>
      </Container>
    </>
  );
};

export default Login;
