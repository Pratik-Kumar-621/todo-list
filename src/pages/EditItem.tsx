import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import Heading from "../components/Heading";
import SelectField from "../components/SelectField";

const EditItem = () => {
  // fetching id from the path
  const pathname = useLocation();
  const itemId = parseInt(pathname.pathname.split("/")[2]);

  //filtering the item to edit
  const list: any = useSelector((state) => state);
  const item = list.filter((item: ListType) => item.id === itemId)[0];

  //creating state for the form
  const [formItem, setFormItem] = useState({
    title: item.title,
    description: item.description,
    status: item.status,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormItem({
      ...formItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let tempList = list;
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].id === itemId) {
        tempList[i].title = formItem.title;
        tempList[i].description = formItem.description;
        tempList[i].status = formItem.status;
      }
    }
    dispatch({ type: "EDIT_TODO", payload: tempList });
    navigate("/");
  };

  return (
    <div className="edit">
      <Heading heading="Edit Todo" />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-title"
          name="title"
          value={formItem.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={formItem.description}
          className="form-description"
          onChange={handleChange}
        ></textarea>
        <SelectField {...{ formItem, setFormItem }} />
        <div className="form-actions">
          <button className="cancel-button" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="save-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
