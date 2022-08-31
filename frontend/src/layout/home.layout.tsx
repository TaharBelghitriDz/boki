import { Box, Stack } from "@chakra-ui/react";
import Navbar from "components/navbar";
import { ReactElement } from "react";

const HomeLayout = ({ children }: { children: ReactElement }) => (
  <Stack ml="5vw" w="90vw" pos="relative" alignItems="center">
    <Navbar />
    <Box pt="75px" maxW="1000px" alignItems="center">
      {children}
    </Box>
  </Stack>
);

export default HomeLayout;
