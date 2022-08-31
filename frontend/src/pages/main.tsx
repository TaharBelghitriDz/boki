import { useRouter } from "next/router";
import { Box, Button } from "@chakra-ui/react";

export default function Main() {
  const router = useRouter();

  console.log("router.query");
  const token = router.query.token;
  console.log("token");
  console.log(token);

  // this for clean the url from token
  if (token) router.push({ pathname: "/main" }, undefined, { shallow: true });

  return (
    <Box p="30px">
      <Button colorScheme="red" rounded="20px" boxShadow="green">
        click me
      </Button>
    </Box>
  );
}
