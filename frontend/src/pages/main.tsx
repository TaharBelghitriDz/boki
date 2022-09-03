import { useRouter } from "next/router";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import HomeLayout from "layout/home.layout";
import {
  BooksList,
  CollectionsLayout,
  MainHeaderText,
} from "components/mini.components";
import BookDetails from "components/book.details";

const Main: NextPageWithLayout = () => {
  const router = useRouter();

  console.log("router.query");
  const token = router.query.token;
  const book = router.query.book;
  console.log("token");
  console.log(token);

  // this for clean the url from token
  if (token) router.push({ pathname: "/main" }, undefined, { shallow: true });

  return (
    <VStack alignItems="start" spacing="100px" maxW="1000px">
      <MainHeaderText />
      <VStack spacing="30px" w="full" alignItems="start">
        <Box
          fontSize={{ start: "30px", md: "50px" }}
          fontWeight="bold"
          lineHeight={{ start: "30px", md: "50px" }}
        >
          discover our <Text>new collection</Text>
        </Box>
        <Text color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </Text>
        <CollectionsLayout />
      </VStack>
      <VStack spacing="30px" w="full" alignItems="start">
        <Box
          fontSize={{ start: "30px", md: "50px" }}
          fontWeight="bold"
          lineHeight={{ start: "30px", md: "50px" }}
        >
          explore some <Text>tranding books</Text>
        </Box>
        <Text color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </Text>
        <BooksList />
      </VStack>
    </VStack>
  );
};

Main.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Main;
