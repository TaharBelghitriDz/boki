import {
  Box,
  ChakraProps,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchIcon } from "../icons";

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
          <InputGroup w="auto">
            <InputLeftElement
              pointerEvents="none"
              children={
                <HStack cursor="pointer">
                  <SearchIcon size={25} />
                </HStack>
              }
            />
            <Input
              w="150px"
              colorScheme="blue"
              border="none"
              bg="black"
              rounded="10px"
              focusBorderColor="transparent"
              placeholder="search"
              color="white"
            />
          </InputGroup>

          <Box cursor="pointer" onClick={() => router.push("/login")}>
            home
          </Box>
          <Box cursor="pointer">collections</Box>
          <Box cursor="pointer" width="120px">
            login & signup
          </Box>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Navbar;
