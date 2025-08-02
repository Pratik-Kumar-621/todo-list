export type ListType = {
  id: number;
  title: string;
  description: string;
  status: string;
  date: any;
};

const initialList: ListType[] | [] = [];
const savedState = localStorage.getItem("todoState");
const parsedState = savedState ? JSON.parse(savedState) : initialList;

export const listReducer = (state = parsedState, action: any) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "EDIT_TODO": {
      return action.payload;
    }
    case "DELETE_TODO": {
      return state.filter((item: ListType) => item.id !== action.payload);
    }
    default:
      return state;
  }
};
