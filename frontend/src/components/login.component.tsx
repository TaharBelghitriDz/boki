import {
  StackProps,
  Text,
  VStack,
  Button,
  Image,
  Highlight,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { validateEmail } from "utils/validation";
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
  const [isError, setError] = useState<typeof Errors>(Errors);
  const [place, setPlace] = useState(true);
  const router = useRouter();
  const controllers = Object.keys(Errors);
  const toast = useToast();

  let body: any = {
    login: {
      email: controllersList["email"],
      password: controllersList["password"],
    },
    signup: {
      email: controllersList["email"],
      password: controllersList["password"],
      confirmPassword: controllersList["confirmPassword"],
    },
  };

  controllers.forEach((e) => {
    controllersList[e] = useState("");
  });

  const loginFun = () => {
    const action = place ? "login" : "signup";

    Object.keys(body).forEach((e: any) =>
      Object.keys(body[e]).forEach((es: any) => (body[e][es] = body[e][es][0]))
    );

    let newErro: any = {
      email: Err,
      password: Err,
      confirmPassword: Err,
    };

    const email = body[action]["email"];
    const password = body[action]["password"];

    if (!email)
      return setError((e: any) => ({
        ...newErro,
        email: { msg: "email can't be empty", value: true },
      }));

    if (!password)
      return setError((e: any) => ({
        ...newErro,
        password: { msg: "password can't be empty", value: true },
      }));

    if (action === "signup" && !body.signup.confirmPassword)
      return setError((e: any) => ({
        ...newErro,
        confirmPassword: { msg: "password can't be empty", value: true },
      }));

    if (!validateEmail(body[action]["email"]))
      return setError((e: any) => ({
        ...newErro,
        email: { msg: "unvalid email", value: true },
      }));

    fetch("http://localhost:8080/" + action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body[action]),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) return router.push("/main");

        if (res.err) {
          if (res.err.split(".")[1]) {
            const errPlace = res.err.split(".")[0];
            const errMessage = res.err.split(".")[1];

            let newErrorValue: any = { msg: errMessage, value: true };

            newErro[errPlace] = newErrorValue;

            setError((e: any) => ({ ...newErro }));

            toast({
              title: errMessage,
              status: "error",
              isClosable: true,
            });
          } else
            toast({
              title: "something wrong happend",
              status: "error",
              isClosable: true,
            });
        } else console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <VStack {...props}>
      <Text color="red.500" fontSize="50px" fontWeight="bold">
        welcome
      </Text>
      <Text color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Button
        colorScheme="blue"
        w="full"
        rounded="10px"
        fontSize="m"
        onClick={() => router.push("http://localhost:8080/auth/google")}
        zIndex={0}
      >
        <Image src="/Googleicon.svg" h="25px" w="auto" />
        {place ? "login with google" : "signup with google"}
      </Button>
      <Text w="full" textAlign="center" color="white">
        or
      </Text>
      {place ? (
        <LoginForms
          isError={isError}
          controller={[controllersList["email"], controllersList["password"]]}
        />
      ) : (
        <SignupForms
          isError={isError}
          controller={[
            controllersList["email"],
            controllersList["password"],
            controllersList["confirmPassword"],
          ]}
        />
      )}
      <Button
        colorScheme="green"
        w="full"
        onClick={() => loginFun()}
        rounded="10px"
        fontSize="m"
      >
        {place ? "login now " : "signup now"}
      </Button>
      <Text color="white" onClick={() => setPlace(!place)} cursor="pointer">
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

const LoginForms = ({
  isError,
  controller,
}: {
  isError: typeof Errors;
  controller: [string, Dispatch<SetStateAction<string>>][];
}) => (
  <>
    <FormController
      label="email"
      isError={isError.email}
      controller={controller[0]}
    />
    <FormController
      label="password"
      type="password"
      isError={isError.password}
      controller={controller[1]}
    />
  </>
);
const SignupForms = ({
  isError,
  controller,
}: {
  isError: typeof Errors;
  controller: [string, Dispatch<SetStateAction<string>>][];
}) => (
  <>
    <FormController
      label="email"
      isError={isError.email}
      controller={controller[0]}
    />
    <FormController
      label="password"
      type="password"
      isError={isError.password}
      controller={controller[1]}
    />
    <FormController
      label="confirm password"
      type="password"
      isError={isError.confirmPassword}
      controller={controller[2]}
    />
  </>
);

export default LoginComponent;
