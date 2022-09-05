import {
  Avatar,
  Box,
  ChakraProps,
  CloseButton,
  Collapse,
  Divider,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import SearchModal from "components/search.modal";
import { motion, TargetAndTransition } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchIcon } from "../icons";

const Navbar = (props?: ChakraProps) => {
  const router = useRouter();
  const [onTop, setOnTop] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const searchModal = useDisclosure();
  const userDetailsMobile = useDisclosure();
  const [isUser, setIsUser] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) setOnTop(true);
    else setOnTop(false);
  };

  const whileHoverAnimation: TargetAndTransition = {
    backgroundColor: "#e8e7e6",
    transition: { duration: 0.2 },
  };

  useEffect(() => {
    if (localStorage.getItem("token")) setIsUser(true);
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
          <SearchModal {...searchModal} />
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
            <Box
              as={motion.div}
              px="20px"
              py="10px"
              rounded="10px"
              whileHover={whileHoverAnimation}
              cursor="pointer"
              onClick={() => router.push("/")}
            >
              home
            </Box>

            <HStack
              bg="black"
              spacing="10px"
              rounded="10px"
              px="20px"
              py="10px"
              cursor="pointer"
              onClick={searchModal.onOpen}
            >
              <SearchIcon size={25} />
              <Text color="white">search</Text>
            </HStack>

            <Box
              cursor="pointer"
              as={motion.div}
              px="20px"
              py="10px"
              rounded="10px"
              whileHover={whileHoverAnimation}
              onClick={() => router.push("/main")}
            >
              collections
            </Box>

            {isUser ? (
              <Popover placement="bottom-end">
                <PopoverTrigger>
                  <Image
                    as={motion.img}
                    src="/user-icon.svg"
                    bg="#FFFFFF"
                    p="10px"
                    rounded="full"
                    cursor="pointer"
                    border="2px"
                    borderColor="#FFFFFF"
                    whileHover={{
                      borderColor: "#000000",
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent w="auto" border="none">
                  <PopoverArrow />
                  <PopoverCloseButton />

                  <PopoverBody pt="30px">
                    <VStack
                      color="black"
                      h="auto"
                      bg="rgb(250,250,250,100%)"
                      rounded="10px"
                      w="200px"
                      py="20px"
                      spacing="15px"
                    >
                      <Text cursor="pointer">saved</Text>
                      <Divider color="gray" w="20%" />
                      <Text cursor="pointer">signout</Text>
                      <Divider color="gray" w="20%" />
                      <Text cursor="pointer">other details</Text>
                      <Divider color="gray" w="20%" />
                      <Text cursor="pointer">other details</Text>
                      <Divider color="gray" w="20%" />
                      <Text cursor="pointer">other details</Text>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Box
                as={motion.div}
                px="20px"
                py="10px"
                rounded="10px"
                whileHover={whileHoverAnimation}
                cursor="pointer"
                whiteSpace="nowrap"
                onClick={() => router.push("/login")}
              >
                login & signup
              </Box>
            )}
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
              {isUser && (
                <Image
                  as={motion.img}
                  src="/user-icon.svg"
                  bg="#FFFFFF"
                  p="10px"
                  rounded="full"
                  cursor="pointer"
                  border="2px"
                  borderColor="#FFFFFF"
                  whileHover={{
                    borderColor: "#000000",
                  }}
                  onClick={userDetailsMobile.onToggle}
                />
              )}
              <Collapse in={userDetailsMobile.isOpen} animateOpacity>
                <VStack
                  color="black"
                  h="auto"
                  bg="rgb(250,250,250,100%)"
                  rounded="10px"
                  w="200px"
                  py="20px"
                  spacing="15px"
                >
                  <Text cursor="pointer">saved</Text>
                  <Divider color="gray" w="20%" />
                  <Text cursor="pointer">signout</Text>
                  <Divider color="gray" w="20%" />
                  <Text cursor="pointer">other details</Text>
                  <Divider color="gray" w="20%" />
                  <Text cursor="pointer">other details</Text>
                  <Divider color="gray" w="20%" />
                  <Text cursor="pointer">other details</Text>
                </VStack>
              </Collapse>
              <Box
                as={motion.div}
                whileHover={whileHoverAnimation}
                px="20px"
                py="10px"
                rounded="10px"
                cursor="pointer"
                onClick={() => router.push("/")}
              >
                home
              </Box>

              <HStack
                bg="black"
                spacing="10px"
                rounded="10px"
                p="10px"
                px="30px"
                cursor="pointer"
                onClick={searchModal.onOpen}
              >
                <SearchIcon size={25} />
                <Text color="white">search</Text>
              </HStack>

              <Box
                cursor="pointer"
                as={motion.div}
                px="20px"
                py="10px"
                rounded="10px"
                whileHover={whileHoverAnimation}
                onClick={() => router.push("/main")}
              >
                collections
              </Box>
              {!isUser && (
                <Box
                  as={motion.div}
                  px="20px"
                  py="10px"
                  rounded="10px"
                  whileHover={whileHoverAnimation}
                  cursor="pointer"
                  whiteSpace="nowrap"
                  onClick={() => router.push("/login")}
                >
                  login & signup
                </Box>
              )}
            </VStack>
          </Collapse>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default Navbar;
