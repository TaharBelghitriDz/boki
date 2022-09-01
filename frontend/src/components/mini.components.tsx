import {
  Box,
  ChakraProps,
  Highlight,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SingleLayout = ({
  name,
  gradiunt,
}: {
  name: string;
  gradiunt: string;
}) => {
  const [random, setRandom] = useState("-");

  useEffect(() => {
    setRandom(
      "+" +
        Math.floor(Math.random() * 100)
          .toString()
          .replace("0", "1") +
        "k book"
    );
  }, []);

  return (
    <VStack
      h="full"
      w={{ start: "80%", md: "600px" }}
      rounded="10px"
      bg="gray"
      justifyContent="space-between"
      alignItems="start"
      p="30px"
      bgGradient={gradiunt}
      color="white"
    >
      <Text fontSize="30px" fontWeight="bold">
        {name}
        {"  "}
        <Highlight
          query={random}
          styles={{ fontSize: "20px", fontWeight: "light", color: "white" }}
        >
          {random}
        </Highlight>
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Text>
    </VStack>
  );
};

export const CollectionsLayout = (props: ChakraProps) => {
  return (
    <Box maxW="1000px" overflow="hidden">
      <HStack w="3000px" h="250px" spacing="30px">
        <SingleLayout
          name="Biography"
          gradiunt="linear(to-r, #FF7C47, #FDBE79)"
        />
        <SingleLayout
          name="Business"
          gradiunt="linear(to-r, #000000, #697175)"
        />
        <SingleLayout name="Art" gradiunt="linear(to-r, #000000, #697175)" />
      </HStack>
    </Box>
  );
};

export const BooksLine = () => {
  return (
    <Box maxW="1000px" h="auto" overflow="hidden">
      <HStack w="3000px" h="auto" spacing="20px">
        <Box w="400px" h="500px" bg="gray"></Box>
        <Box w="400px" h="500px" bg="gray"></Box>
        <Box w="400px" h="500px" bg="gray"></Box>
      </HStack>
    </Box>
  );
};
