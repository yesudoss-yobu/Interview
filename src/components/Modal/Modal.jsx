import React from "react";
import { useState } from "react";

const Modal = ({
  submitCallback,
  nameHandler,
  ageHandler,
  percentHandler,
  name,
  age,
  percentage,
}) => {
  const submitHandler = () => {
    console.log("its running");
    submitCallback({
      id: Math.random(),
      name: name,
      age: age,
      percentage: percentage,
    });
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="name">name</label>
          <input id="name" value={name} onChange={nameHandler} type="text" />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input id="age" value={age} onChange={ageHandler} type="number" />
        </div>
        <div>
          <label htmlFor="percentage">percentage</label>
          <input
            id="percentage"
            value={percentage}
            onChange={percentHandler}
            type="number"
          />
        </div>
      </div>
      <div>
        <button>cancel</button>
        <button onClick={submitHandler}>submit</button>
      </div>
    </>
  );
};

export default Modal;
