import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "./icons";
import { CollectionsLayout } from "./mini.components";

const HomeComponent = () => {
  return (
    <VStack spacing="150px">
      <MainPage />
      <SecondPage />
      <TherdPage />
    </VStack>
  );
};

const MainPage = () => (
  <VStack spacing="0px">
    <Text
      fontSize="40px"
      p="30px"
      fontWeight="light"
      fontFamily="aboreto"
      w="950px"
      textAlign="center"
      color="red.500"
    >
      “you can get lost in any library, no matter the size. but the more lost
      you are, the more things you’ll find.”
    </Text>
    <Link
      fontSize="s"
      href="https://www.amazon.com/Lydia-Green-Mulberry-Millie-Florence/dp/1732878900"
    >
      Millie Florence, Lydia Green Of Mulberry Glen
    </Link>
    <Divider color="transparent" h="80px" />
    <HStack
      cursor="pointer"
      bg="black"
      h="50px"
      justifyContent="center"
      spacing="20px"
      p="20px"
      rounded="10px"
    >
      <SearchIcon size={25} />
      <Text color="white">Find your next book now</Text>
    </HStack>
    <Divider color="transparent" h="50px" />
    <Image src="/animatedReader.gif" h="350px" w="1000px" />
  </VStack>
);

const SecondPage = () => (
  <VStack spacing="45px" w="full" alignItems="start">
    <Text
      color="red.500"
      w="500px"
      fontSize="100px"
      lineHeight="80px"
      fontWeight="bold"
    >
      Discover our collections
    </Text>
    <Text w="800px" color="gray" fontWeight="bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <HStack h="700px" w="1200px" spacing="100px">
      <VStack
        h="full"
        w="700px"
        bg="#000"
        pos="relative"
        px="100px"
        py="30px"
        alignItems="start"
        justifyContent="space-between"
      >
        <Image
          src="/topthreepic.png"
          h="full"
          w="full"
          pos="absolute"
          top="0"
          left="0"
        />
        <Box
          fontSize="50px"
          color="white"
          zIndex={3}
          fontWeight="bold"
          lineHeight="50px"
        >
          <Text color="red.100">top</Text>
          <Text>three</Text>
          <Text>collections</Text>
        </Box>
        <HStack spacing="30px" h="200px" zIndex={3} w="full">
          <Box w="200px" bg="green" h="full" rounded="5px" />
          <Box w="200px" bg="green" h="full" rounded="5px" />
          <Box w="200px" bg="green" h="full" rounded="5px" />
        </HStack>
        <Text zIndex={3} w="350px" color="white" fontWeight="bold" fontSize="s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </VStack>
      <VStack alignItems="start" justifyContent="space-between" h="full">
        <Text color="yellow" fontWeight="bold" fontSize="l">
          other collections
        </Text>
        <CollectionsLayout />
        <CollectionsLayout />
        <CollectionsLayout />
      </VStack>
    </HStack>
  </VStack>
);

const TherdPage = () => (
  <VStack spacing="45px" w="full" alignItems="start">
    <Text
      color="red.500"
      w="400px"
      fontSize="100px"
      lineHeight="80px"
      fontWeight="bold"
    >
      top rated books
    </Text>
    <Text w="800px" color="gray" fontWeight="bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <HStack spacing="100px" h="full">
      <Box pos="relative" w="500px" h="650px">
        <Image
          pos="absolute"
          w="full"
          h="full"
          src="/topratedbook1.png"
          zIndex={-600}
        />
        <Text
          p="50px"
          fontSize="50px"
          color="white"
          fontWeight="bold"
          lineHeight="50px"
        >
          some book name
        </Text>
        <Text color="gray" p="50px" pt="0" fontWeight="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </Box>
      <VStack justifyContent="space-between" h="633px" top="0">
        <VStack
          pos="relative"
          w="750px"
          h="300px"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Text
            fontSize="50px"
            color="white"
            fontWeight="bold"
            lineHeight="50px"
            pl="30px"
          >
            some book name
          </Text>
          <Text color="gray" pl="30px" fontWeight="bold" w="450px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Image
            pos="absolute"
            top={0}
            w="full"
            h="full"
            src="/topratedbook2.png"
            zIndex={-600}
          />
        </VStack>
        <VStack
          pos="relative"
          w="750px"
          h="300px"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Text
            fontSize="50px"
            color="white"
            fontWeight="bold"
            lineHeight="50px"
            pl="30px"
          >
            some book name
          </Text>
          <Text color="gray" pl="30px" fontWeight="bold" w="450px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Image
            pos="absolute"
            top={0}
            w="full"
            h="full"
            src="/topratedbook2.png"
            zIndex={-600}
          />
        </VStack>
      </VStack>
    </HStack>
  </VStack>
);

export default HomeComponent;
