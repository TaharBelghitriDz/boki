import {
  Box,
  Highlight,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const redirectTo = (str: string) => window.open(str);

  return (
    <Stack
      flexDirection={{ start: "column", md: "row" }}
      bg="#000000"
      pos="relative"
      top="100px"
      w="full"
      color="white"
      fontWeight="bold"
      py="30px"
      px="5%"
      spacing="20px"
    >
      <VStack
        alignItems="start"
        justifyContent="end"
        w="auto"
        px={{ start: "20px", md: "50px" }}
      >
        <HStack alignItems="baseline">
          <Text fontSize="50px" as={motion.span} color="gray">
            boki
          </Text>
          <Link
            fontSize="20px"
            href="https://github.com/TaharBelghitriDz"
            isExternal
          >
            by tahar belghitri
          </Link>
        </HStack>

        <HStack as={motion.div} rounded="10px" color="gray" pb="30px">
          <Image src="/github-icon.svg" />
          <Link isExternal href="https://github.com/TaharBelghitriDz/boki">
            source code
          </Link>
        </HStack>
        {/* social media link here */}

        <Text textAlign="start">
          <Highlight
            query={["nextjs, chakraui", "express, mongodb"]}
            styles={{ color: "gray" }}
          >
            built with nextjs, chakraui and on backend express, mongodb
          </Highlight>
        </Text>
      </VStack>
      <VStack alignItems="start">
        {" "}
        <HStack
          as={motion.div}
          whileHover={{
            backgroundColor: "#232323",
            transition: { duration: 0.2 },
          }}
          cursor="pointer"
          px="20px"
          py="10px"
          rounded="10px"
          onClick={() =>
            redirectTo(
              "https://mail.google.com/mail/u/0/?compose=new#inbox?compose=GTvVlcSHxGsTHRnplxVDXNvhcGFpZXRVNFKXbWRBGkdXFHdsmfqLvGKRzWkhpzRtsJtXgNrhwcvSM"
            )
          }
        >
          <Image src="/gmailicon.svg" />
          <Text>gmail.com/gitnawi</Text>
        </HStack>
        <HStack
          as={motion.div}
          whileHover={{
            backgroundColor: "#232323",
            transition: { duration: 0.2 },
          }}
          cursor="pointer"
          px="20px"
          py="10px"
          rounded="10px"
          onClick={() => redirectTo("https://github.com/TaharBelghitriDz")}
        >
          <Image src="/github-icon.svg" />
          <Text>github.com/TaharBelghitriDz</Text>
        </HStack>
        <HStack
          as={motion.div}
          whileHover={{
            backgroundColor: "#232323",
            transition: { duration: 0.2 },
          }}
          cursor="pointer"
          px="20px"
          py="10px"
          rounded="10px"
          onClick={() => redirectTo("https://web.facebook.com/tahar.belghitri")}
        >
          <Image src="/facebookicon.svg" />
          <Text>facebook.com/tahar.belghitri</Text>
        </HStack>
        <HStack
          as={motion.div}
          whileHover={{
            backgroundColor: "#232323",
            transition: { duration: 0.2 },
          }}
          cursor="pointer"
          px="20px"
          py="10px"
          rounded="10px"
          onClick={() =>
            redirectTo("https://www.instagram.com/tahar_belghitri/")
          }
        >
          <Image src="/instagramicon.svg" />
          <Text>instagram.com/tahar_belghitri</Text>
        </HStack>
        <HStack
          as={motion.div}
          whileHover={{
            backgroundColor: "#232323",
            transition: { duration: 0.2 },
          }}
          cursor="pointer"
          px="20px"
          py="10px"
          rounded="10px"
          onClick={() =>
            redirectTo("https://fr.linkedin.com/in/taha-belghiti-27690732")
          }
        >
          <Image src="/linkedinicon.svg" />
          <Text>linkedin.com/in/taha-belghiti</Text>
        </HStack>
      </VStack>
      <Text pos="absolute" bottom="10px" right="30px">
        © 2022 tahar belghitri
      </Text>
    </Stack>
  );
};
export default Footer;
