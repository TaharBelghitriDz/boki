import * as yup from "yup";
import jwt from "jsonwebtoken";

const login = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const signup = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassowrd: yup.string().required(),
});

const action = yup.object().shape({
  action: yup.string().required(),
  collectionName: yup.string(),
});

export const tokenSign = (str: string) => jwt.sign({ str: str }, "secret");

export const tokenVrfy = (token: string, clb?: (err: any, rslt: any) => void) =>
  jwt.verify(token, "secret", clb);

export default {
  login,
  signup,
  action,
};
