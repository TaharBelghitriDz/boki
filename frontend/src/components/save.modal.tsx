import {
  Button,
  Divider,
  Input,
  ModalContent,
  Select,
  Spinner,
  VStack,
  useOutsideClick,
  useToast,
  Text,
  Link,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const SaveModal = (props: {
  title: string;
  img: string;
  onClose: () => void;
}) => {
  const [col, setCol] = useState<Record<string, any>>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>();
  const [newCol, setNewColInput] = useState<boolean>(false);
  const [newColValue, setNewColInputValue] = useState<string>("");
  const ref = useRef(null);
  const toast = useToast();

  useOutsideClick({
    ref,
    handler: () => {
      props.onClose();
    },
  });

  const fetchFun = (str: string, body: Record<string, any>) =>
    fetch("http://localhost:8080/collection/" + str, {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-type": "application/json; charset=utf-8",
      } as any,
      body: JSON.stringify(body),
    }).then((res) => res.json());

  const addNewCol = () => {
    setLoading(true);
    setNewColInputValue("");
    fetchFun("/action", {
      action: "create",
      collectionName: newColValue,
    }).then((res) => {
      setLoading(false);
      if (res.result)
        setCol((e: any) => ({
          result: [...e.result, { name: newColValue }],
        })),
          setNewColInput(false),
          toast({
            isClosable: true,
            description: "new collection created",
            status: "success",
            colorScheme: "blue",
          });
      else
        toast({
          isClosable: true,
          description: "something wrong happend",
          status: "error",
        });
    });
  };

  const pushToCol = () => {
    setLoading(true);
    fetchFun("/action", {
      action: "create",
      collectionName: value,
      bookName: props.title,
      img: props.img,
    }).then((res) => {
      setLoading(false);

      if (res.result)
        props.onClose(),
          toast({
            isClosable: true,
            description: "saved to collection",
            status: "success",
          });
      else
        toast({
          isClosable: true,
          description: "something wrong happend",
          status: "error",
        });
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/collection/get", {
      headers: { token: localStorage.getItem("token") },
    } as any)
      .then((res) => res.json())
      .then((res) => setCol(() => res))
      .catch((err) => console.log(err));
  }, []);

  console.log(col);

  if (!localStorage.getItem("token"))
    return (
      <ModalContent p="30px" rounded="15px">
        <VStack>
          <Text textAlign="center">use your acount ot save the books</Text>
          <Link href="/login" color="blue">
            login & signup now
          </Link>
        </VStack>
      </ModalContent>
    );

  return (
    <ModalContent p="30px">
      {!col || isLoading ? (
        <Spinner />
      ) : (
        <VStack spacing="20px" color="black" ref={ref}>
          {!newCol ? (
            <Select
              value={value}
              onChange={({ target: { value } }) => setValue(value)}
              border="none"
              rounded="10px"
              autoFocus
              bg="#F0F0F0"
            >
              <option>favorit</option>
              {col.result.map((e: any, i: number) => (
                <option key={i} style={{ margin: "20px" }}>
                  {e.name}
                </option>
              ))}
            </Select>
          ) : (
            <Input
              placeholder="name your collection"
              autoFocus
              value={newColValue}
              onChange={({ target: { value } }) => setNewColInputValue(value)}
            />
          )}
          <Divider color="transparent" />
          <Button
            colorScheme="green"
            rounded="10px"
            onClick={() => setNewColInput(!newCol)}
          >
            {newCol ? "select other collection" : "create new collection"}
          </Button>
          <Button
            rounded="10px"
            colorScheme="blue"
            onClick={() => {
              !newCol ? pushToCol() : addNewCol();
            }}
          >
            done
          </Button>
        </VStack>
      )}
    </ModalContent>
  );
};
