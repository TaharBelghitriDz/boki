import { Box, Divider } from "@chakra-ui/react";
import Navbar from "components/navbar";
import { ReactElement } from "react";

const HomeLayout = ({ children }: { children: ReactElement }) => (
  <Box ml="5vw" w="90vw" pos="relative">
    <Navbar />
    <Box pt="75px">{children}</Box>
  </Box>
);

export default HomeLayout;
