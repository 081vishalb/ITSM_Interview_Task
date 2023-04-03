import React from "react";

function NoteList(props) {
  function handleClick() {
    props.onDlt(props.id);
  }

  return (
    <tr>
      <td>{props.sName}</td>
      <td>{props.gender}</td>
      <td>{props.college}</td>
      <td>{props.date}</td>
      <td>{props.percentage}</td>

      <td>
        <button onClick={handleClick}>dlt</button>
      </td>
    </tr>
  );
}

export default NoteList;
