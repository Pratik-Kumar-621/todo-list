import { Link } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const TaskListItem = ({
  item,
  date,
  listType,
  handleDelete,
  options,
}: {
  item: ListType;
  date: any;
  options: any;
  listType: string;
  handleDelete: (id: number) => void;
}) => {
  return (
    <div className="todolist-list-item" key={item.id}>
      <div className="todolist-list-item-icon">{item.title[0]}</div>
      <div className="todolist-list-item-content">
        <div className="todolist-list-item-title">
          <div
            style={{
              textDecoration:
                listType === "Completed" ? "line-through" : "none",
            }}
          >
            {item.title}{" "}
          </div>
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
        <div
          className="todolist-list-item-description"
          style={{
            textDecoration: listType === "Completed" ? "line-through" : "none",
          }}
        >
          {item.description}
        </div>
        <div className="todolist-list-item-bottom">
          <div className="todolist-list-item-date">
            {date?.toLocaleDateString("en-US", options)}
          </div>
          <div className="todolist-list-item-actions">
            <Link to={`/edit/${item.id}`} className="todolist-list-item-delete">
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
};

export default TaskListItem;
