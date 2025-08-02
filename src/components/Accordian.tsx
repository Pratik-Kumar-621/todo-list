import { Link } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import { useState } from "react";

const Accordian = ({
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
              <div className="todolist-list-item" key={item.id}>
                <div className="todolist-list-item-icon">{item.title[0]}</div>
                <div className="todolist-list-item-content">
                  <div className="todolist-list-item-title">
                    {item.title}{" "}
                    <span>
                      {" "}
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background:
                            listType === "In Progress"
                              ? "#FFB03C"
                              : listType === "Completed"
                              ? "#368A04"
                              : "#D0D0D0",
                        }}
                      ></div>{" "}
                      {listType}
                    </span>
                  </div>
                  <div className="todolist-list-item-description">
                    {item.description}
                  </div>
                  <div className="todolist-list-item-bottom">
                    <div className="todolist-list-item-date">
                      {date?.toLocaleDateString("en-US", options)}
                    </div>
                    <div className="todolist-list-item-actions">
                      <Link
                        to={`/edit/${item.id}`}
                        className="todolist-list-item-delete"
                      >
                        <EditIcon />
                      </Link>
                      <div
                        className="todolist-list-item-delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;
