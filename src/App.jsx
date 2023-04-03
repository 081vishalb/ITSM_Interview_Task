import React, { useState } from "react";
import Form from "./compoents/Form";
import NoteList from "./compoents/NoteList";

function App() {
  const [info, setInfo] = useState([]);

  function addInfo(values) {
    setInfo((prevValue) => {
      return [...prevValue, values];
    });
    console.log(info.sName);
  }

  function deleteItem(id) {
    setInfo((preValue) => {
      return preValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div
      className="container"
      // style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="heading">
        <h1>Task</h1>
      </div>
      <div
        className="form"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <Form onAdd={addInfo} />

          <div style={{ marginTop: "1rem" }}>
            <table>
              <tr>
                <th>Student Name</th>
                <th>Gender</th>
                <th>College Name</th>
                <th>Date of joining</th>
                <th>Percentage</th>
              </tr>

              {info.map((infoItem, index) => {
                return (
                  <NoteList
                    key={index}
                    id={index}
                    sName={infoItem.sName}
                    gender={infoItem.gender}
                    college={infoItem.college}
                    date={infoItem.date}
                    percentage={infoItem.percentage}
                    onDlt={deleteItem}
                  />
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* <tfoot>

</tfoot>

{info.map((infoItem, index) => {
return <NoteList key={index} gender={infoItem.gender} />;
})} */
}
