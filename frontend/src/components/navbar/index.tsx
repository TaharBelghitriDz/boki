import {
  Box,
  ChakraProps,
  CloseButton,
  Collapse,
  HStack,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchIcon } from "../icons";

const Navbar = (props?: ChakraProps) => {
  const router = useRouter();
  const [onTop, setOnTop] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) setOnTop(true);
    else setOnTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setOnTop(true);
  }, [isOpen, onTop]);

  return (
    <Stack
      w="inherit"
      justifyContent="center"
      alignItems="center"
      bg="green"
      mt="75px"
    >
      <VStack
        {...props}
        top={{ start: "0", xl: "25px" }}
        pos="fixed"
        w="full"
        left={{ start: "0", xl: "auto" }}
        maxW={{ start: "auto", xl: "1020px" }}
        alignItems="center"
        bg={onTop ? "rgb(250,250,250,60%)" : ""}
        p="20px"
        px="50px"
        rounded={{ start: "0", xl: "10px" }}
        zIndex={100}
        boxShadow={onTop ? "lg" : ""}
        backdropFilter={onTop ? "blur(20px)" : ""}
        spacing="0px"
      >
        <HStack w="full" justifyContent="space-between">
          <Box fontSize="40px" fontWeight="light">
            boki
          </Box>
          {isOpen ? (
            <CloseButton
              display={{ start: "block", md: "none" }}
              size="md"
              _hover={{ bg: "transparent" }}
              onClick={onToggle}
            />
          ) : (
            <Box
              display={{ start: "block", md: "none" }}
              bgImage="url('/menu-icon.svg')"
              bgRepeat="no-repeat"
              w="30px"
              h="30px"
              cursor="pointer"
              onClick={onToggle}
            />
          )}

          <HStack
            spacing="25px"
            fontSize="18px"
            display={{ start: "none", md: "flex" }}
            h="50px"
          >
            <Box cursor="pointer" onClick={() => router.push("/")}>
              home
            </Box>

            <HStack
              bg="black"
              spacing="10px"
              rounded="10px"
              p="10px"
              cursor="pointer"
            >
              <SearchIcon size={25} />
              <Text color="white">search</Text>
            </HStack>

            <Box cursor="pointer">collections</Box>
            <Box
              cursor="pointer"
              width="120px"
              onClick={() => router.push("/login")}
            >
              login & signup
            </Box>
          </HStack>
        </HStack>
        <VStack h="auto" w="full" display={{ start: "block", md: "none" }}>
          <Collapse in={isOpen} animateOpacity>
            <VStack
              p="20px"
              color="black"
              mt="4"
              rounded="md"
              shadow="md"
              w="full"
              spacing="20px"
            >
              <Box cursor="pointer" onClick={() => router.push("/")}>
                home
              </Box>

              <HStack
                bg="black"
                spacing="10px"
                rounded="10px"
                p="10px"
                px="30px"
                cursor="pointer"
              >
                <SearchIcon size={25} />
                <Text color="white">search</Text>
              </HStack>

              <Box cursor="pointer">collections</Box>
              <Box
                cursor="pointer"
                width="120px"
                onClick={() => router.push("/login")}
              >
                login & signup
              </Box>
            </VStack>
          </Collapse>
        </VStack>
      </VStack>
    </Stack>
  );
};

/*
    <Stack w="inherit" justifyContent="center" alignItems="center" h="75px">


{...props}
        top={{ start: "0", xl: "25px" }}
        h="auto"
        pos="fixed"
        w="full"
        left={{ start: "0", xl: "auto" }}
        maxW={{ start: "auto", xl: "1020px" }}
        alignItems="center"
        bg={onTop ? "rgb(250,250,250,60%)" : ""}
        p="20px"
        px="50px"
        rounded={{ start: "0", xl: "10px" }}
        zIndex={100}
        boxShadow={onTop ? "lg" : ""}
        backdropFilter={onTop ? "blur(20px)" : ""}

<Box fontSize="40px" fontWeight="light" bg="green">
            boki
          </Box>

          <Box
            display={{ start: "block", md: "none" }}
            bgImage="url('/menu-icon.svg')"
            bgRepeat="no-repeat"
            w="30px"
            h="30px"
            cursor="pointer"
            onClick={onToggle}
            bg="green"
          />

          <HStack
            spacing="25px"
            fontSize="18px"
            display={{ start: "none", md: "flex" }}
            h="50px"
          >
            <Box cursor="pointer" onClick={() => router.push("/")}>
              home
            </Box>

            <HStack
              bg="black"
              spacing="10px"
              rounded="10px"
              p="10px"
              cursor="pointer"
            >
              <SearchIcon size={25} />
              <Text color="white">search</Text>
            </HStack>

            <Box cursor="pointer">collections</Box>
            <Box
              cursor="pointer"
              width="120px"
              onClick={() => router.push("/login")}
            >
              login & signup
            </Box>
          </HStack>
*/
export default Navbar;
