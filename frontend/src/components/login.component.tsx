import {
  StackProps,
  Text,
  VStack,
  Button,
  Image,
  Highlight,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormController } from "./formcontroller";

const Err = { msg: "", value: false } as const;

const Errors = {
  email: Err,
  password: Err,
  confirmPassword: Err,
} as const;

let controllersList: {
  [a: string]: [string, Dispatch<SetStateAction<string>>];
} = {};

const LoginComponent = (props: StackProps) => {
  const [isErrors, setError] = useState<typeof Errors>(Errors);
  const [place, setPlace] = useState(true);

  const controllers = Object.keys(Errors);

  const isError = isErrors as typeof Errors;

  controllers.forEach((e) => {
    controllersList[e] = useState("");
  });

  console.log(controllersList);
  useEffect(() => {
    controllersList = {};
  }, [place]);

  const loginFun = () => {};

  return (
    <VStack {...props}>
      <Text color="red.500" fontSize="50px" fontWeight="bold">
        welcome
      </Text>
      <Text color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Text>
      {place ? (
        <LoginForms isError={isError} />
      ) : (
        <SignupForms isError={isError} />
      )}
      <Button colorScheme="green" w="full">
        {place ? "login now " : "signup now"}
      </Button>
      <Text color="white" onClick={() => (setPlace(!place), loginFun())}>
        {place ? (
          <Highlight query="signup now" styles={{ color: "blue.300" }}>
            you don't have an acount ? signup now
          </Highlight>
        ) : (
          <Highlight query="login now" styles={{ color: "blue.300" }}>
            you already have an acount ? login now
          </Highlight>
        )}
      </Text>
    </VStack>
  );
};

const LoginForms = ({ isError }: { isError: typeof Errors }) => (
  <>
    <Button colorScheme="blue" w="full">
      <Image src="/Googleicon.svg" h="25px" w="auto" />
      login with google
    </Button>
    <Text w="full" textAlign="center" color="white">
      or
    </Text>
    <FormController
      label="email"
      isError={isError.email}
      controller={useState("")}
    />
    <FormController
      label="password"
      type="password"
      isError={isError.password}
      controller={controllersList["password"]}
    />
  </>
);
const SignupForms = ({ isError }: { isError: typeof Errors }) => (
  <>
    <Button colorScheme="blue" w="full">
      <Image src="/Googleicon.svg" h="25px" w="auto" />
      signup with google
    </Button>
    <Text w="full" textAlign="center" color="white">
      or
    </Text>
    <FormController
      label="email"
      isError={isError.email}
      controller={useState("")}
    />
    <FormController
      label="password"
      type="password"
      isError={isError.password}
      controller={controllersList["password"]}
    />
    <FormController
      label="confirm password"
      type="password"
      isError={isError.password}
      controller={controllersList["confirmPassword"]}
    />
  </>
);

export default LoginComponent;
