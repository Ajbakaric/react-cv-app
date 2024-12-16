// src/components/GeneralInfo.jsx
import React, { useState } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = () => {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button type="button" onClick={toggleEditMode}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
