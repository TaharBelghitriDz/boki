import {
  Button,
  ChakraProps,
  CloseButton,
  Divider,
  HStack,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BookDetails from "./book.details";

const Book = (
  props: ChakraProps & {
    e: string;
    i: number;
    update: () => void;
    Book: { title: string; img: string; _id: string }[];
  }
) => {
  const animation = useAnimationControls();
  const [isLoad, setLoad] = useState(false);
  const ref = useRef(null);
  const toast = useToast();
  const BookDetailView = useDisclosure();

  const fetchFun = (str: string, body: Record<string, any>) =>
    fetch("https://boki-six.vercel.app/collection/" + str, {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-type": "application/json; charset=utf-8",
      } as any,
      body: JSON.stringify(body),
    }).then((res) => res.json());

  const removeCol = () => {
    setLoad(true);
    fetchFun("action", { collectionName: props.e, action: "remove" })
      .then((res) => {
        if (res.result)
          setLoad(false),
            props.update(),
            toast({ description: "removed ", status: "success" });
        else toast({ description: "something went wrong ", status: "error" });
      })
      .catch(() =>
        toast({ description: "something went wrong ", status: "error" })
      );
  };

  const removeBook = () => {
    setLoad(true);
    fetchFun("action", {
      collectionName: props.e,
      action: "remove",
      bookName: props.e,
    })
      .then((res) => {
        if (res.result)
          setLoad(false),
            props.update(),
            toast({ description: "removed ", status: "success" });
        else toast({ description: "something went wrong ", status: "error" });
      })
      .catch(
        (err) => (
          console.log(err),
          toast({ description: "something went wrong ", status: "error" })
        )
      );
  };

  return (
    <VStack
      ref={ref}
      as={motion.div}
      animate={animation}
      boxShadow="md"
      p="20px"
      rounded="20px"
      m="10px"
      cursor="pointer"
    >
      <CloseButton size="sm" onClick={removeCol} />
      <Popover>
        <PopoverTrigger>
          <Text onClick={() => animation.start({ backgroundColor: "#F2F2F2" })}>
            {props.e}
          </Text>
        </PopoverTrigger>
        <BookDetails {...(props as any)} {...BookDetailView} />
        <PopoverContent maxH="300px" overflow="hidden" overflowY="scroll">
          {isLoad ? (
            <VStack p="30PX">
              <Spinner color="blue" />
            </VStack>
          ) : props.Book.length > 0 ? (
            props.Book.map((e: any, i: number) => (
              <VStack
                p="10px"
                key={i}
                //onClick={BookDetailView.onToggle}
              >
                <Image src={e.img} h="100px" />
                <Text textAlign="center">{e.title}</Text>
                <Button color="black" onClick={removeBook}>
                  show
                </Button>
                <Button colorScheme="blue" onClick={removeBook}>
                  remove
                </Button>
                <Divider w="40%" h="20px" />
              </VStack>
            ))
          ) : (
            <Text textAlign="center" p="10px">
              no book yet
            </Text>
          )}
        </PopoverContent>
      </Popover>
    </VStack>
  );
};

const SavedBooksModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const [colName, setColName] = useState<Record<string, any>[]>([]);

  const update = () => {
    fetch("https://boki-six.vercel.app/collection/get", {
      headers: { token: localStorage.getItem("token") } as any,
    })
      .then((res) => res.json())
      .then((res) => setColName(() => res.result));
  };

  useEffect(() => {
    if (props.isOpen) update();
  }, [props.isOpen]);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
      <ModalOverlay />
      <ModalContent w="full" rounded="20px">
        <ModalHeader>saved collections</ModalHeader>
        <ModalCloseButton />
        <HStack
          flexWrap="wrap"
          p="30px"
          alignItems="center"
          justifyContent="center"
        >
          {colName?.length > 0 &&
            colName?.map((e: any, i: number) => {
              return (
                <Book e={e.name} i={i} key={i} Book={e.book} update={update} />
              );
            })}
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default SavedBooksModal;
