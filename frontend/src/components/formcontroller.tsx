import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";

interface FormConctollerType {
  label: string;
  type?: HTMLInputTypeAttribute;
  controller: [string, Dispatch<SetStateAction<string>>];
  isError: { msg: string; value: boolean };
}

export const FormController = ({
  label,
  type = "text",
  isError,
  controller: [value, setValue],
}: FormConctollerType) => {
  const [show, showPassword] = useState(false);

  return (
    <FormControl isInvalid={isError.value}>
      <FormLabel color="white">{label}</FormLabel>
      <InputGroup>
        <Input
          type={type === "password" ? (show ? "text" : "password") : label}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          color="gray"
          placeholder={label}
          _focus={{ color: "white" }}
          rounded="10px"
        />
        {label === "password" && (
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => showPassword(!show)}
              colorScheme="black"
            >
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {isError.value && <FormErrorMessage>{isError.msg} </FormErrorMessage>}
    </FormControl>
  );
};
