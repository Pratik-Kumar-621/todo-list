import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import Heading from "../components/Heading";
import Accordian from "../components/Accordian";
import "../styles/todolist.css";
import SearchIcon from "../Icons/SearchIcon";

const TodoList = () => {
  const todoList = useSelector((state: ListType[] | []) => state);
  const dispatch = useDispatch();
  const [list, setList] = useState(todoList);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const navigate = useNavigate();
  useEffect(() => {
    (() => {
      setList(
        todoList.filter(
          (item) =>
            item.title.includes(searchText) ||
            item.description.includes(searchText)
        )
      );
    })();
  }, [searchParams]);
  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ search: value });
    }
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
    setList(todoList.filter((item) => item.id !== id));
  };
  return (
    <div className="todo">
      <Heading heading="TO-DO APP" />
      <div className="todo-search">
        <div className="todo-search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={searchText}
          placeholder="Search To-Do"
          onChange={handleSearch}
        />
      </div>
      {list.filter((item) => item.status === "inProgress").length ? (
        <Accordian
          listType="In Progress"
          list={list.filter((item) => item.status === "inProgress")}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
      {list.filter((item) => item.status === "pending").length ? (
        <Accordian
          listType="Pending"
          list={list.filter((item) => item.status === "pending")}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
      {list.filter((item) => item.status === "completed").length ? (
        <Accordian
          listType="Completed"
          list={list.filter((item) => item.status === "completed")}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
      <div className="todo-add" onClick={() => navigate("/add")}>
        <svg
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
            fill="#ffffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default TodoList;
