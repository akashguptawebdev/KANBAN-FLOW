import React, { useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/Redux/TaskSlice";
const CreateItemBtn = ({ setBool, bool }) => {
  const [inputTask, setInputTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const UID = uid(16);
    if (!inputTask) return;
    const inputData = {
      CardId: "task1",
      id: UID,
      name: inputTask,
      des: description,
    };

    dispatch(addTask(inputData));
    setInputTask("");
    setDescription("");
    setBool(!bool);
  };
  return (
    <div className="w-72  border-2  rounded-md mb-8 border-cyan-600 bg-white">
      <textarea
        className="textSmPlaceHolder w-full outline-none px-2 pt-2"
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="What needs to be done?"
      />
      <textarea
        className="textSmPlaceHolder w-full outline-none px-2"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description?"
      />
      <div
        className="flex w-full relative justify-end rounded-md items-baseline p-2"
        onClick={() => handleAdd()}
      >
        <button className="border px-4 bg-slate-100">Create</button>

        <button onClick={() => setBool(!bool)}>
          <img src="/close.png" alt="" className="w-4 mx-4" />
        </button>
      </div>
    </div>
  );
};

export default CreateItemBtn;
