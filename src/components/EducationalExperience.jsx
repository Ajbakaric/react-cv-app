// src/components/EducationalExperience.jsx
import { useState } from "react";
import "../styles/EducationalExperience.css";

const EducationalExperience = () => {
  const [editMode, setEditMode] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="educational-experience">
      <h2>Educational Experience</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="title"
            value={education.title}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleEditMode}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
