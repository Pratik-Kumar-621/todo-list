import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import type { ListType } from "../redux/reducer";
import Heading from "../components/Heading";

const EditItem = () => {
  // fetching id from the path
  const pathname = useLocation();
  const itemId = parseInt(pathname.pathname.split("/")[2]);

  //filtering the item to edit
  const list: ListType[] = useSelector((state) => state);
  const item = list.filter((item: ListType) => item.id === itemId)[0];

  //creating state for the form
  const [formItem, setFormItem] = useState({
    title: item.title,
    description: item.description,
    status: item.status,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
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
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit-form-title"
            name="title"
            value={formItem.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={formItem.description}
            className="edit-form-description"
            onChange={handleChange}
          ></textarea>
          <select name="status" value={formItem.status} onChange={handleChange}>
            <option value="pending">
              <span className="pending"></span>Pending
            </option>
            <option value="inProgress">
              <span className="progress"></span>In Progress
            </option>
            <option value="completed">
              <span className="completed"></span>Completed
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
