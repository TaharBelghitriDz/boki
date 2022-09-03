import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SearchIcon } from "./icons";
import { BooksLine, CollectionsLayout } from "./mini.components";

const HomeComponent = () => {
  return (
    <VStack spacing="150px">
      <MainPage />
      <SecondPage />
      {/* <TherdPage /> */}
    </VStack>
  );
};

const MainPage = () => {
  const router = useRouter();

  return (
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
        onClick={() => router.push("http://localhost:3000/main")}
      >
        <SearchIcon size={25} />
        <Text color="white">Find your next book now</Text>
      </HStack>
      <Divider color="transparent" h="50px" />
      <Image src="/animatedReader.gif" w="1000px" />
    </VStack>
  );
};
const SecondPage = () => (
  <VStack spacing="30px" w="full" alignItems="start">
    <Box fontSize="50px" fontWeight="bold" lineHeight="50px">
      discover our <Text>new collection</Text>
    </Box>
    <Text color="gray">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <CollectionsLayout />
  </VStack>
);

const TherdPage = () => (
  <VStack spacing="45px" w="full" alignItems="start">
    <Box fontSize="50px" fontWeight="bold" lineHeight="50px">
      a book for <Text>every personality</Text>
    </Box>
    <Text color="gray">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis.
    </Text>
    <BooksLine />
  </VStack>
);

export default HomeComponent;
