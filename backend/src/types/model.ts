import { Response } from "express";
import { Document, FilterQuery, HydratedDocument, Model } from "mongoose";

export type userSchema = Document & {
  email: string;
  password: string;
  collections: {
    name: string;
    books?: { title: string; img: string; id: string }[];
  }[];
};

export type CollectionSchema = Document & {
  name: string;
  books?: { name: string; img: string }[];
};

export type modelType = {};
export type userModel = Model<userSchema> & modelType;
export type CollectionModel = Model<CollectionSchema> & modelType;
