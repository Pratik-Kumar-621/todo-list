import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formItem, setFormItem] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: any) => {
    console.log(e.target.name);

    setFormItem({ ...formItem, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title: formItem.title,
      description: formItem.description,
      status: "inProgress",
      date: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: newItem });
    setFormItem({
      title: "",
      description: "",
    });
    navigate("/");
  };

  return (
    <div className="add">
      <Heading heading="Add Task" />
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-title"
          type="text"
          name="title"
          placeholder="Name"
          value={formItem.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-description"
          placeholder="Description"
          name="description"
          value={formItem.description}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button className="cancel-button" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="save-button">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
