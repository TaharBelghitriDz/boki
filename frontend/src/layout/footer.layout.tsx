import {
  Box,
  Highlight,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const redirectTo = (str: string) => router.push(str);

  return (
    <VStack
      bg="#000000"
      pos="relative"
      top="100px"
      w="full"
      color="white"
      fontWeight="bold"
      py="30px"
      spacing="20px"
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

      <HStack as={motion.div} px="20px" py="10px" rounded="10px" color="yellow">
        <Image src="/github-icon.svg" />
        <Link isExternal href="https://github.com/TaharBelghitriDz/boki">
          source code
        </Link>
      </HStack>
      {/* social media link here */}

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

      <Text textAlign="center">
        <Highlight
          query={["nextjs, chakraui", "express, mongodb"]}
          styles={{ color: "yellow" }}
        >
          built with nextjs, chakraui and on backend express, mongodb
        </Highlight>
      </Text>
      <Text>© 2022 tahar belghitri</Text>
    </VStack>
  );
};
export default Footer;
