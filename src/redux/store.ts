import { createStore } from "redux";
import { listReducer, type ListType } from "./reducer";

const store = createStore(listReducer);
store.subscribe(() => {
  const state: ListType = store.getState();
  localStorage.setItem("todoState", JSON.stringify(state));
});
export default store;
