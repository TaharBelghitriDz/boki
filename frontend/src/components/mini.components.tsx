import {
  Box,
  ChakraProps,
  Divider,
  Highlight,
  HStack,
  Image,
  Link,
  Modal,
  ModalOverlay,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useFetch from "utils/fetch";
import BookDetails from "./book.details";
import { SaveModal } from "./save.modal";

const SingleLayout = ({
  name,
  gradiunt,
}: {
  name: string;
  gradiunt: string;
}) => {
  const router = useRouter();
  const [random, setRandom] = useState("-");

  useEffect(() => {
    setRandom(
      "+" +
        Math.floor(Math.random() * 100)
          .toString()
          .replace("0", "1") +
        "k book"
    );
  }, []);

  return (
    <VStack
      w={{ start: "full", xl: "300px" }}
      rounded="10px"
      bg="gray"
      justifyContent="space-between"
      alignItems="start"
      p="30px"
      bgGradient={gradiunt}
      color="white"
      cursor="pointer"
      flex="0 0 auto"
      onClick={() => router.push("/collection?name=" + name)}
    >
      <Text fontSize={{ start: "25px", os: "30px" }} fontWeight="bold">
        {name}

        <Highlight
          query={random}
          styles={{
            fontSize: "20px",
            fontWeight: "light",
            color: "white",
          }}
        >
          {random}
        </Highlight>
      </Text>
      <Text w="full" pt={{ start: "30px", os: "auto" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Text>
    </VStack>
  );
};

//flex="0 0 auto"
export const CollectionsLayout = (props: ChakraProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Stack
      ref={ref}
      w="full"
      alignItems="start"
      display="flex"
      flexDirection={{ start: "column", xl: "row" }}
    >
      <Box />
      <SingleLayout
        name="Biography"
        gradiunt="linear(to-r, #DE3C4B, #FF9F1C)"
      />
      <Divider color="transparent" w="30px" h="30px" />
      <SingleLayout name="Business" gradiunt="linear(to-r, #5E7279, #E8E8E8)" />
      <Divider color="transparent" w="30px" h="30px" />

      <SingleLayout name="Art" gradiunt="linear(to-r, #000000, #697175)" />
    </Stack>
  );
};

export const BooksLine = () => {
  return (
    <Box w="full" h="auto" overflow="hidden">
      <HStack w="3000px" h="auto" spacing="20px">
        <Box w="400px" h="500px" bg="gray"></Box>
        <Box w="400px" h="500px" bg="gray"></Box>
        <Box w="400px" h="500px" bg="gray"></Box>
      </HStack>
    </Box>
  );
};

export const MainHeaderText = (props: ChakraProps) => {
  const router = useRouter();
  return (
    <Box {...props} pos="relative">
      <Image src="/girl-reader.png" display={{ start: "none", md: "block" }} />
      <Image
        rounded="10px"
        src="/littlegirlreader-phone.jpeg"
        display={{ start: "block", md: "none" }}
        h={{ start: "500px", os: "auto" }}
        objectFit="cover"
      />

      <VStack
        alignItems="start"
        p={{ start: "10px", md: "10px", lg: "30px" }}
        pos="absolute"
        top={{ start: "auto", md: "10px", lg: "20px" }}
        left="20px"
        bottom={{ start: "20px", md: "auto" }}
        h={{ start: "auto", md: "29vw", lg: "27vw" }}
        maxH="300px"
        w={{ start: "calc(100% - 40px)", md: "500px", lg: "500px" }}
        rounded="10px"
        bg="rgb(250,250,250,10%)"
        backdropFilter="blur(20px)"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ start: "25px", md: "30px" }}
          color="#F3E6D6"
          fontWeight="bold"
          lineHeight="30px"
          w="full"
        >
          a book is a gift you can open again and again
        </Text>
        <Text color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
        <HStack
          as={motion.span}
          whileHover={{ marginLeft: "10px" }}
          onClick={() => router.push("/")}
          cursor="pointer"
          alignItems="baseline"
        >
          <Image src="/Arrow 2.png" />
          <Text color="#FBBC05" w="150px" lineHeight="20px">
            take a look in our new collections
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export const SaveBook = (props: {
  download?: string;
  title: string;
  img: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      display="flex"
      h="auto"
      flexDir={{ start: "column", md: "row" }}
      w="full"
      spacing="0"
      justifyContent="space-between"
      alignItems="center"
      maxW="300px"
    >
      <HStack
        as={motion.div}
        whileHover={{ backgroundColor: "#000000" }}
        alignItems="center"
        w="auto"
        h="full"
        p="10px"
        bg={{ start: "black", md: "rgb(0,0,0,50%)" }}
        backdropFilter="blur(20px)"
        color="white"
        fontWeight="bold"
        rounded="5px"
        mb={{ start: "10px", md: "0" }}
        cursor="pointer"
      >
        <Image src="/download-icon.svg" />
        <Link href={props.download} _hover={{}} isExternal>
          dowload
        </Link>
      </HStack>
      <Divider color="transparent" w={{ start: "0", md: "10px" }} />
      <HStack
        as={motion.div}
        whileHover={{ backgroundColor: "#000000" }}
        alignItems="center"
        w="auto"
        p="10px"
        h="full"
        bg={{ start: "black", md: "rgb(0,0,0,50%)" }}
        backdropFilter="blur(20px)"
        color="white"
        fontWeight="bold"
        rounded="5px"
        cursor="pointer"
        onClick={isOpen ? onClose : onOpen}
      >
        <Image src="/save-icon.svg" />
        <Text>save</Text>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <SaveModal
          {...{ img: props.img, title: props.title, onClose: onClose }}
        />
      </Modal>
    </Stack>
  );
};

export const BookComponent = (
  props: ChakraProps & {
    title: string;
    author: string;
    img: string;
    download: string;
    subtitle: string;
  }
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      as={motion.div}
      {...props}
      h="auto"
      w={{ start: "full", os: "45%", md: "45%", lg: "430px" }}
      p="10px"
      flexDir={{ start: "column", lg: "row" }}
      mb="30px"
      rounded="10px"
      backgroundImage={"url('" + props.img + "')"}
      fontWeight="bold"
      whileHover={{ backgroundColor: "#000000", backgroundImage: "" }}
      pos="relative"
      justifyContent="space-between"
    >
      <BookDetails isOpen={isOpen} onClose={onClose} {...props} />
      <Box
        left="0"
        top="0"
        bg="rgb(250,250,250,10%)"
        w="full"
        h="full"
        backdropFilter="blur(20px)"
        pos="absolute"
        rounded="10px"
        onClick={onOpen}
      />
      <Image
        src={props.img}
        w={{ start: "full", md: "full", lg: "150px" }}
        maxH={{ start: "300px" }}
        rounded="5px"
        zIndex={2}
        onClick={onOpen}
      />
      <Divider color="transparent" h="30px" />
      <VStack
        alignItems="start"
        spacing="20px"
        rounded="5px"
        cursor="pointer"
        justifyContent="space-between"
      >
        <VStack
          spacing="10px"
          color="white"
          alignItems="start"
          bg="rgb(0,0,0,50%)"
          backdropFilter="blur(20px)"
          p="10px"
          rounded="5px"
          w={{ start: "full", lg: "230px" }}
        >
          <Text onClick={onOpen}>{props.title}</Text>
          <Text color="#D9D9D9" onClick={onOpen}>
            {props.author}
          </Text>
          <HStack spacing="10px" alignItems="initial">
            <Image src="/start-icon.svg" h="20px" />
            <Text>5.3</Text>
          </HStack>
        </VStack>
        <SaveBook {...props} />
      </VStack>
    </Stack>
  );
};

export const BooksList = (props: { title?: string }) => {
  const fetch = useFetch(props.title);

  return (
    <Box
      maxW="1000px"
      w="full"
      h="auto"
      display="flex"
      flexWrap="wrap"
      flexDir="row"
      justifyContent="space-between"
    >
      {fetch &&
        fetch
          .slice(0, 4)
          .map((e: any, i: number) => (
            <BookComponent
              key={i}
              {...e}
              display={
                i > 1 ? { start: "none", md: "flex" } : { start: "flex" }
              }
            />
          ))}
    </Box>
  );
};
