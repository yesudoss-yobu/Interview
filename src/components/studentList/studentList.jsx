import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";

const StudentList = () => {
  const [studentList, setstudentList] = useState([
    { id: "1", name: "arun", age: "25", percentage: "60" },
    { id: "2", name: "john", age: "27", percentage: "70" },
    { id: "3", name: "doss", age: "28", percentage: "70" },
    { id: "4", name: "doe", age: "30", percentage: "90" },
  ]);

  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [percentage, setPercentage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setage(e.target.value);
  };

  const percentHandler = (e) => {
    setPercentage(e.target.value);
  };

  const handleEdit = (id, data) => {
    setName(data[id]["name"]);
    setage(data[id]["age"]);
    setPercentage(data[id]["percentage"]);
  };

  const submitCallback = (personData) => {
    console.log(personData);
    // studentList.push(personData);
    setstudentList([...studentList, personData]);
  };

  const handleDelete = (id) => {
    studentList.splice(id, 1);
    let newArray = studentList;
    console.log("newArray", newArray);
    setstudentList([...newArray]);
  };

  return (
    <>
      <div>
        <div>
          <button>Add student</button>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>percentage</th>
              </tr>
            </thead>
            {studentList.map((person, index) => (
              <tbody key={person.id}>
                <tr>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.percentage}</td>
                  <td>
                    <button onClick={() => handleEdit(index, studentList)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <Modal
          name={name}
          age={age}
          percentage={percentage}
          submitCallback={submitCallback}
          nameHandler={nameHandler}
          ageHandler={ageHandler}
          percentHandler={percentHandler}
        />
      </div>
    </>
  );
};

export default StudentList;
