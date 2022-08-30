import { Box, ChakraProps, HStack, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = (props?: ChakraProps) => {
  const router = useRouter();
  return (
    <HStack
      {...props}
      h="75px"
      pos="fixed"
      w="inherit"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Image src="/logo.jpg" bg="gray" />
      <HStack spacing="25px" fontSize="18px">
        <Box cursor="pointer" onClick={() => router.push("/login")}>
          home
        </Box>
        <Box cursor="pointer">collections</Box>
        <Box cursor="pointer">login & signup</Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
