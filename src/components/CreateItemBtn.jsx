import React, { useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/Redux/TaskSlice";
import { toast } from "react-toastify";

const CreateItemBtn = ({ setBool, bool }) => {
  const [inputTask, setInputTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  // Handler for adding a task
  const handleAdd = () => {
    const UID = uid(16); // Generate a unique ID for the task

    // if task input is empty
    if (!inputTask) {
      toast.error("Please provide a task");
      return;
    }

    // Warning if input exceeds 10 words
    if (inputTask || description) {
      const desArr = description.split(" ");
      const taskArr = inputTask.split(" ");

      if (taskArr.length > 10 || desArr.length > 10) {
        toast.warn("Input must not exceed 10 words");
        return;
      }
    }

    const inputData = {
      CardId: "task1", // Column CardId
      id: UID,
      name: inputTask,
      des: description,
    };

    dispatch(addTask(inputData));
    ClearInputs();
    setBool(!bool);
  };

  // Handler to close the input form
  const HandleClose = (e) => {
    setBool(!bool);
    ClearInputs();
  };

  // Clear input function
  function ClearInputs() {
    setInputTask("");
    setDescription("");
  }

  return (
    <div className="w-72 border-2 rounded-md mb-8 border-cyan-600 bg-white">
      {/* Task input */}
      <textarea
        className="textSmPlaceHolder w-full outline-none px-2 pt-2"
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="What needs to be done?"
      />
      {/* Description input */}
      <textarea
        className="textSmPlaceHolder w-full outline-none px-2"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description?"
      />
      <div className="flex w-full relative justify-end rounded-md items-baseline p-2">
        {/* Create button */}
        <button
          className="border px-4 bg-slate-100"
          onClick={() => handleAdd()}
        >
          Create
        </button>
        {/* Close button */}
        <button onClick={(e) => HandleClose(e)}>
          <img src="/close.png" alt="Close" className="w-4 mx-4" />
        </button>
      </div>
    </div>
  );
};

export default CreateItemBtn;
