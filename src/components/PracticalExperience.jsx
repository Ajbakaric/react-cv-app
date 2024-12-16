// src/components/PracticalExperience.jsx
import React, { useState } from "react";
import "../styles/PracticalExperience.css";

const PracticalExperience = () => {
  const [editMode, setEditMode] = useState(true);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          ></textarea>
          <input
            type="date"
            name="from"
            value={experience.from}
            onChange={handleChange}
          />
          <input
            type="date"
            name="to"
            value={experience.to}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleEditMode}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.from}</p>
          <p>To: {experience.to}</p>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
