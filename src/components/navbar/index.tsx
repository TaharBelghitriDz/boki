import { Box, HStack, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      h="75px"
      pos="fixed"
      w="inherit"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Image src="/logo.jpg" bg="gray" />
      <HStack spacing="25px" fontSize="18px">
        <Box cursor="pointer">home</Box>
        <Box cursor="pointer">collections</Box>
        <Box cursor="pointer">login & signup</Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
