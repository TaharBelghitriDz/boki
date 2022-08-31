import {
  Box,
  ChakraProps,
  HStack,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = (props?: ChakraProps) => {
  const router = useRouter();
  const [onTop, setOnTop] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) setOnTop(true);
    else setOnTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack w="inherit" justifyContent="center" alignItems="center" h="75px">
      <HStack
        {...props}
        top="25px"
        h="75px"
        pos="fixed"
        w="inherit"
        maxW="1100px"
        justifyContent="space-between"
        alignItems="flex-end"
        bg={onTop ? "rgb(250,250,250,60%)" : ""}
        p="20px"
        px="50px"
        rounded="20px"
        zIndex={100}
        boxShadow={onTop ? "lg" : ""}
        backdropFilter={onTop ? "blur(20px)" : ""}
      >
        <Image src="/logo.png" h="50px" />
        <HStack spacing="25px" fontSize="18px">
          <Input w="150px" colorScheme="blue" />
          <Box cursor="pointer" onClick={() => router.push("/login")}>
            home
          </Box>
          <Box cursor="pointer">collections</Box>
          <Box cursor="pointer">login & signup</Box>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Navbar;
