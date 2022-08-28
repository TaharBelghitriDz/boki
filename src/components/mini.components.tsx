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
      as={motion.div}
      onHoverStart={() => onToggle()}
      onHoverEnd={() => onToggle()}
      w="360px"
      h="170px"
      justifyContent="space-between"
      spacing="50px"
      pos="relative"
    >
      <VStack
        alignItems="start"
        w="200px"
        h="full"
        fontWeight="bold"
        justifyContent="space-between"
      >
        <Text fontSize="l" fontWeight="bold">
          Romance
        </Text>
        <Text color="gray" lineHeight="18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
      </VStack>
      <Box h="full" w="150px" bg="green" rounded="5px" />
      <Box pos="absolute" right="-25px">
        <ScaleFade in={isOpen}>
          <Image src="/arrow.png" cursor="pointer" />
        </ScaleFade>
      </Box>
    </HStack>
  );
};
