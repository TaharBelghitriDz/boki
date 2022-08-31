import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import LoginComponent from "components/login.component";
import HomeLayout from "layout/home.layout";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  console.log("hi");

  return (
    <Stack justifyContent="center" alignItems="center">
      <HStack
        w="auto"
        h="inherit"
        minH="90vh"
        mb="30px"
        alignItems="center"
        spacing={{ start: "0px", md: "10%" }}
      >
        <LoginComponent
          w={{ start: "full", md: "50%" }}
          p="50px"
          bg="black"
          alignItems="start"
          spacing="30px"
          rounded="20px"
          maxW="500px"
        />
        <Stack
          justifyContent="center"
          alignItems="center"
          w={{ start: "full", md: "50%" }}
          h="full"
          maxW="500px"
          display={{ start: "none", md: "block" }}
        >
          <Image src="/readersnow.gif" />
        </Stack>
      </HStack>
    </Stack>
  );
};

Login.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Login;
