import React, { useState } from "react";
import "./styles.css";

function Form(props) {
  const [values, setValues] = useState({
    sName: "",
    gender: "",
    college: "",
    date: "",
    percentage: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(values);
    event.preventDefault();

    setValues({
      sName: "",
      gender: "",
      college: "",
      date: "",
      percentage: ""
    });
  }

  return (
    <div style={{ alignItems: "" }}>
      <form action="" method="post">
        <label htmlFor="">Student Name: </label>
        <input
          onChange={handleChange}
          name="sName"
          value={values.sName}
          type="text"
          placeholder="eg: JON"
        />
        <br />

        <label for="cars">Gender:</label>
        <input
          onChange={handleChange}
          name="gender"
          value={values.gender}
          type="text"
          placeholder="eg: JON"
        />
        <br />

        <label htmlFor="">College:</label>
        <select
          name="college"
          value={values.college}
          onChange={handleChange}
          id=""
        >
          <option value="ABC1 College">ABC1 College</option>
          <option value="ABC2 College">ABC2 College</option>
          <option value="ABC3 College">ABC3 College</option>
          <option value="ABC4 College">ABC4 College</option>
          <option value="ABC5 College">ABC5 College</option>
          <option value="ABC6 College">ABC6 College</option>
          <option value="ABC7 College">ABC7 College</option>
          <option value="ABC8 College">ABC8 College</option>
        </select>
        <br />

        <label>Date of Joining: </label>
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
          id=""
        />
        <br />

        <label>Percentage: </label>
        <input
          type="number"
          onChange={handleChange}
          name="percentage"
          value={values.percentage}
        />
        <br />

        <div style={{ width: "50%" }}>
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
