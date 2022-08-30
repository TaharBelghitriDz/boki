import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import LoginComponent from "components/login.component";
import HomeLayout from "layout/home.layout";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  // const loadHello = async () => {};
  // await fetch("http://localhost:8080/api/auth")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log("heree");
  //     console.log(res);
  //   });

  console.log("hi");

  return (
    <HStack w="auto" h="inherit" minH="90vh" mb="30px">
      <LoginComponent
        w={{ start: "full", md: "50%" }}
        p="50px"
        bg="black"
        alignItems="start"
        spacing="30px"
        rounded="10px"
        maxW="500px"
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        w={{ start: "full", md: "50%" }}
        h="full"
        display={{ start: "none", md: "block" }}
      >
        <Image src="/readersnow.gif" />
      </Stack>
    </HStack>
  );
};

Login.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Login;
