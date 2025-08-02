export type ListType = {
  id: number;
  title: string;
  description: string;
  status: string;
};

const initialList: ListType[] | [] = [];
const savedState = localStorage.getItem("todoState");
const parsedState = savedState ? JSON.parse(savedState) : initialList;

export const listReducer = (state = parsedState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "EDIT_TODO": {
      return action.payload;
    }
    case "DELETE_TODO": {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};
