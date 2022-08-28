import { Box, Button, Text, VStack } from "@chakra-ui/react";
import HomeComponent from "components/index.home";
import HomeLayout from "layout/home.layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => <HomeComponent />;

Home.getLayout = function (page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
