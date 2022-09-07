import { Box, Image, Link, Text, VStack } from "@chakra-ui/react";
import { BookComponent, BooksList } from "components/mini.components";
import HomeLayout from "layout/home.layout";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { fetchFun } from "utils/fetch";
import { filterResult } from "utils/filter";
import { NextPageWithLayout } from "./_app";

const Collection: NextPageWithLayout = ({ res }: any) => {
  if (!res)
    return (
      <VStack>
        <VStack>
          <Text fontSize="30px" fontWeight="bold">
            nothing found
          </Text>
          <Link href="/main" color="blue">
            go back to home page
          </Link>
        </VStack>
        <Image src="/notfound.gif" />
      </VStack>
    );

  return (
    <VStack spacing="30px" w="full" alignItems="start">
      <Box
        fontSize={{ start: "30px", md: "50px" }}
        fontWeight="bold"
        lineHeight={{ start: "30px", md: "50px" }}
      >
        {res.name}
      </Box>
      <Text color="gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </Text>
      <Box
        maxW="1000px"
        w="full"
        h="auto"
        display="flex"
        flexWrap="wrap"
        flexDir="row"
        justifyContent="space-between"
      >
        {res.data.map((e: any, i: number) => (
          <BookComponent
            key={i}
            {...e}
            display={i > 4 ? { start: "none", md: "flex" } : { start: "flex" }}
          />
        ))}
      </Box>
      <VStack spacing="30px" w="full" alignItems="start">
        <Box
          fontSize={{ start: "30px", md: "50px" }}
          fontWeight="bold"
          lineHeight={{ start: "30px", md: "50px" }}
        >
          you may <Text> also like </Text>
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

Collection.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps: GetServerSideProps = async (cntx) => {
  if (!cntx.query.name) return { props: { res: "" } };

  const res = await fetchFun(cntx.query.name as string)
    .then((res) => ({ data: filterResult(res), name: cntx.query.name }))
    .catch((err) => (console.log(err), null));

  return { props: { res } };
};

export default Collection;
