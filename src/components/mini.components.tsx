import {
  Box,
  HStack,
  Image,
  ScaleFade,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const CollectionsLayout = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <HStack
      overflow="vi"
      as={motion.div}
      onHoverStart={() => onToggle()}
      onHoverEnd={() => onToggle()}
      w="full"
      h="220px"
      justifyContent="space-between"
      pos="relative"
      pt="50px"
    >
      <VStack
        alignItems="start"
        w={{ start: "70%", xl: "300px" }}
        h="full"
        fontWeight="bold"
        justifyContent={{ startsWith: "none", xl: "space-between" }}
      >
        <Text fontSize="l" fontWeight="bold">
          Romance
        </Text>
        <Text color="gray" lineHeight="18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
      </VStack>
      <Image src="/bookcover.jpg" h="full" w="auto" bg="green" rounded="5px" />
      <Box pos="absolute" right="-0">
        <ScaleFade in={isOpen}>
          <Image src="/arrow.png" cursor="pointer" />
        </ScaleFade>
      </Box>
    </HStack>
  );
};
