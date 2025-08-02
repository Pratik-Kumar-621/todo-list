import type { ListType } from "../redux/reducer";

import { useState } from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({
  list,
  listType,
  handleDelete,
}: {
  list: ListType[];
  listType: string;
  handleDelete: (id: number) => void;
}) => {
  const options: any = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const [showList, setShowList] = useState(false);
  return (
    <div className="todolist">
      <div className="todolist-heading" onClick={() => setShowList(!showList)}>
        <div className="todolist-heading-content">
          {listType} {"("}
          <span>{list.length}</span>
          {")"}
        </div>
        <div
          className="todolist-heading-icon"
          style={{ transform: showList ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            fill="#034EA2"
            width="14px"
            height="14px"
            viewBox="0 -6 524 524"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>down</title>
            <path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" />
          </svg>
        </div>
      </div>

      <div
        className="todolist-list"
        style={{
          maxHeight: showList ? "600px" : "0px",
          marginTop: showList ? "10px" : "0px",
        }}
      >
        {list &&
          list?.map((item: ListType) => {
            const date = new Date(item.date);
            return (
              <TaskListItem
                {...{ item, date, listType, handleDelete, options }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TaskList;
