import { Response } from "express";
import { Document, FilterQuery, HydratedDocument, Model } from "mongoose";

export type userSchema = Document & {
  email: string;
  password: string;
  collections?: {
    collectionName: string;
    bookUrl: { title: string; url: string }[];
  }[];
  liked: string[];
};

export type modelType = {};
export type userModel = Model<userSchema> & modelType;
