import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { filterResult } from "utils/filter";

const BookResult = ({ img, title }: { img: string; title: string }) => {
  return (
    <HStack alignItems="start" justifyContent="start" w="full">
      <Image src={img} h="100px" />
      <Text lineHeight="20px">{title}</Text>
    </HStack>
  );
};

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [input, setInput] = useState("");
  const [comp, setComp] = useState<JSX.Element>();

  const searchFun = () => {
    fetch("http://localhost:8080/search/" + input)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        setComp(
          filterResult(res).map((e: any, i: number) => (
            <BookResult {...e} key={i} />
          ))
        );
      })
      .catch((err) => setComp(undefined));
  };

  useEffect(() => {
    const search = setTimeout(() => searchFun(), 500);
    return () => clearTimeout(search);
  }, [input]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay bg="rgb(0,0,0,50%)" backdropFilter="blur(5px)" />
      <ModalContent rounded="10px" bg="rgb(250,250,250,70%)">
        <VStack p="30px" spacing="30px">
          <Input
            value={input}
            onChange={({ target: { value } }) => setInput(value)}
            border="3px"
            bg="whiteAlpha.700"
            borderColor="green"
            size="md"
            fontSize="l"
          />
          <VStack
            py="30px"
            px="30px"
            rounded="10px"
            bg="whiteAlpha.700"
            spacing="30px"
            w="full"
            maxH="300px"
            overflow="hidden"
            overflowY="scroll"
          >
            {comp || <Box>loading...</Box>}
          </VStack>
        </VStack>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default SearchModal;
