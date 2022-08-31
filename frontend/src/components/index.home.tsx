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
      fontSize={{ start: "22px", md: "40px" }}
      p="30px"
      fontWeight="light"
      fontFamily="aboreto"
      w={{ start: "full", lg: "950px" }}
      textAlign="center"
      color="red.500"
    >
      “you can get lost in any library, no matter the size. but the more lost
      you are, the more things you’ll find.”
    </Text>
    <Link
      textAlign="center"
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
    <Image src="/animatedReader.gif" w="1000px" />
  </VStack>
);

const SecondPage = () => (
  <VStack spacing="45px" w="full" alignItems="start">
    <Text
      color="red.500"
      w={{ start: "250px", md: "500px" }}
      fontSize={{ start: "50px", md: "100px" }}
      lineHeight={{ start: "50px", md: "80px" }}
      fontWeight="bold"
    >
      Discover our collections
    </Text>
    <Text w="full" maxW="800px" color="gray" fontWeight="bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <HStack
      h={{ start: "full", xl: "700px" }}
      w="full"
      maxW="1200px"
      spacing={{ start: "0", xl: "100px" }}
      flexDirection={{ start: "column", xl: "row" }}
      alignItems="start"
    >
      <VStack
        h="full"
        w="full"
        maxW="700px"
        bg="#000"
        spacing="50px"
        pos="relative"
        px={{ start: "30px", xl: "100px" }}
        py="30px"
        alignItems="start"
        justifyContent="space-between"
      >
        <Image
          src="/topthreepic.png"
          h="auto"
          w="full"
          pos="absolute"
          bottom="0"
          left="0"
          maxH="500px"
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
        <HStack spacing="3%" zIndex={3} w="full">
          <Image
            cursor="pointer"
            src="/bookcover.jpg"
            w="30%"
            bg="green"
            h="auto"
            rounded="5px"
          />
          <Image
            cursor="pointer"
            src="/bookcover.jpg"
            w="30%"
            bg="green"
            h="auto"
            rounded="5px"
          />
          <Image
            cursor="pointer"
            src="/bookcover.jpg"
            w="30%"
            bg="green"
            h="auto"
            rounded="5px"
          />
        </HStack>
        <Text
          zIndex={3}
          w="full"
          maxW="400px"
          color="white"
          fontWeight="bold"
          fontSize="s"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </VStack>
      <VStack
        alignItems="start"
        justifyContent="space-between"
        w="full"
        h="auto"
        pt={{ start: "100px", xl: "0px" }}
        maxW="700px"
      >
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
      w={{ start: "250px", md: "400px" }}
      fontSize={{ start: "50px", md: "100px" }}
      lineHeight={{ start: "50px", md: "80px" }}
      fontWeight="bold"
    >
      top rated books
    </Text>
    <Text w="full" maxW="800px" color="gray" fontWeight="bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <HStack
      spacing={{ start: "0", xl: "100px" }}
      h="full"
      flexDirection={{ start: "column", xl: "row" }}
      w="ful"
    >
      <Box pos="relative" w={{ start: "full", xl: "700px" }} h="650px">
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
      <VStack
        justifyContent="space-between"
        h="633px"
        top="0"
        w={{ start: "full", xl: "auto" }}
        alignItems="start"
        pt={{ start: "100px", xl: "0px" }}
      >
        <VStack
          pos="relative"
          w="full"
          h="300px"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Text
            fontSize={{ start: "30px", md: "50px" }}
            color="white"
            fontWeight="bold"
            lineHeight={{ start: "30px", md: "50px" }}
            pl="30px"
            maxW="200px"
          >
            some book name
          </Text>
          <Text
            color="gray"
            pl="30px"
            fontWeight="light"
            w="80%"
            display={{ start: "none", md: "block" }}
          >
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
          w="full"
          h="300px"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Text
            fontSize={{ start: "30px", md: "50px" }}
            color="white"
            fontWeight="bold"
            lineHeight={{ start: "30px", md: "50px" }}
            pl="30px"
            maxW="200px"
          >
            some book name
          </Text>
          <Text
            color="gray"
            pl="30px"
            fontWeight="light"
            w="80%"
            display={{ start: "none", md: "block" }}
          >
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
