import type { ListType } from "./reducer";

export const ADD_TODO = (item: ListType) => {
  return {
    type: "ADD_TODO",
    payload: item,
  };
};

export const EDIT_TODO = (item: ListType[]) => {
  return {
    type: "EDIT_TODO",
    payload: item,
  };
};

export const DELETE_TODO = (id: number) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
