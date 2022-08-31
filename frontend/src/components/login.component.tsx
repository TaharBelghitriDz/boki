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
    console.log("update contollers list");
    console.log(controllersList);
  });

  const loginFun = () => {
    const action = place ? "login" : "signup";
    console.log(body);

    Object.keys(body).forEach((e: any) =>
      Object.keys(body[e]).forEach((es: any) => (body[e][es] = body[e][es][0]))
    );
    console.log(body);

    fetch("http://localhost:8080/" + action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body[place ? "login" : "signup"]),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.err)
          if (res.err.split(".")[1]) {
            const errPlace = res.err.split(".")[0];
            const errMessage = res.err.split(".")[1];

            let newErrorValue: any = { msg: errMessage, value: true };

            let newErro: any = {
              email: Err,
              password: Err,
              confirmPassword: Err,
            };
            newErro[errPlace] = newErrorValue;

            console.log("newErro");
            console.log(newErro);

            setError((e: any) => ({ ...newErro }));
            console.log("isError login");
            console.log(isError);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("login isError");
  console.log(isError);

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
        onClick={() => {
          console.log("clicked");

          router.push("http://localhost:8080/auth/google");
        }}
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
      <Button colorScheme="green" w="full" onClick={() => loginFun()}>
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
