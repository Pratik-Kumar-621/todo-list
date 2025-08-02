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
    <form onSubmit={handleSubmit}>
      <Heading heading="Add Task" />
      <input
        type="text"
        name="title"
        placeholder="Name"
        value={formItem.title}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Description"
        name="description"
        value={formItem.description}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddItem;
