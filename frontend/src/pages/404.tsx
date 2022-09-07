import { Button, Image, Link, Text, VStack } from "@chakra-ui/react";
import HomeLayout from "layout/home.layout";
import { ReactElement } from "react";

export const PageNoTfound = () => (
  <VStack spacing="0px">
    <VStack spacing="10px">
      <Text fontSize="100px" lineHeight="80px" fontWeight="bold">
        404
      </Text>
      <Text fontSize="30px" fontWeight="bold" color="gray" textAlign="center">
        page not found
      </Text>
      <Text fontSize="30px" fontWeight="bold" color="gray" textAlign="center">
        something went wrong
      </Text>
      <Link href="/" _hover={{}}>
        <Button colorScheme="blue" rounded="10px">
          go to home page
        </Button>
      </Link>
    </VStack>
    <Image src="/notfound.gif" />
  </VStack>
);

PageNoTfound.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default PageNoTfound;
