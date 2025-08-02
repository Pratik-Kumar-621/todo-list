import { Link } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const Accordian = ({
  list,
  listType,
  handleDelete,
}: {
  list: ListType[];
  listType: string;
  handleDelete: (id: number) => void;
}) => {
  return (
    <div className="todo">
      <div className="todo-heading">
        {listType}{" "}
        <span>
          {"("}
          {list.length}
          {")"}
        </span>
      </div>
      <div className="todo-list">
        {list &&
          list?.map((item: ListType) => {
            return (
              <div className="todo-list-item" key={item.id}>
                <div className="todo-list-item-title">{item.title}</div>
                <div className="todo-list-item-description">
                  {item.description}
                </div>
                <div
                  className="todo-list-item-delete"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </div>
                <Link to={`/edit/${item.id}`} className="todo-list-item-delete">
                  <EditIcon />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;
