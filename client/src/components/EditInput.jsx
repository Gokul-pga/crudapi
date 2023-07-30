import React, { useState } from "react";
import { updateAccount } from "../user";

export default function EditInput({ setclicky, singleCar }) {
  const [inputDatas, setinputDatas] = useState({
    name: singleCar.name ? singleCar.name : "",
    model: singleCar.model ? singleCar.model : "",
    color: singleCar.color ? singleCar.color : "",
  });
  const { name, model, color } = inputDatas;
  const updateHandle = () => {
    const id = singleCar._id;

    updateAccount(id, name, model, color);
    setclicky("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setinputDatas({
            ...inputDatas,
            name: e.target.value,
          });
        }}
        className="text-black"
      />
      <input
        className="text-black"
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => {
          setinputDatas({ ...inputDatas, model: e.target.value });
        }}
      />
      <div className="flex items-center gap-2">
        Color :
        <input
          type="radio"
          name="color"
          value="black"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, color: e.target.value });
          }}
        />
        Black
        <input
          type="radio"
          name="color"
          value="white"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, color: e.target.value });
          }}
        />
        White
        <input
          type="radio"
          name="color"
          value="red"
          onChange={(e) => {
            setinputDatas({ ...inputDatas, color: e.target.value });
          }}
        />
        Red
      </div>
      <button
        className="transition-all px-5 py-2 text-black rounded-md bg-white hover:bg-[lavender] hover:text-[gray]"
        onClick={updateHandle}
      >
        Edit
      </button>
    </>
  );
}
