import React from "react";

export default function InputFields({
  inputDatas,
  setinputDatas,
  handleSubmit,
}) {
  const { name, model, color } = inputDatas;
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setinputDatas({ ...inputDatas, name: e.target.value });
        }}
        className="text-black px-4 py-3 rounded-md"
      />
      <input
        className="text-black px-4 py-3 rounded-md"
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
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}
