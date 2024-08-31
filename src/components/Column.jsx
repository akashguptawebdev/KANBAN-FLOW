import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { addTask, removeTask } from "../utils/Redux/TaskSlice";
import CardComponent from "./Cards";
const Column = ({ Cards }) => {
  const [inputTask, setInputTask] = useState("");
  const [description, setDescription] = useState("");
  const [searchFilter, setSearchFilter] = useState(Cards);
  const dispatch = useDispatch();
  const searchInp = useSelector((store) => store.search.term);
  const [direction, setDirection] = useState("vertical");

  useEffect(() => {
    if (!searchInp) {
      setSearchFilter(Cards);
    } else {
      const filterData = Cards?.map((card) => {
        // Filter items within each card based on the search input
        const filteredItems = card.items.filter((innerItem) =>
          innerItem.name.toLowerCase().includes(searchInp.toLowerCase())
        );
      
        // If filteredItems is empty, return card with empty items array
        return { ...card, items: filteredItems.length > 0 ? filteredItems : [] };
      });

      setSearchFilter(filterData);
    }
  }, [Cards, searchInp]);

  useEffect(() => {
    // Function to check screen size and update direction
    const updateDirection = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint is usually 768px or greater
        setDirection("horizontal");
      } else {
        setDirection("vertical");
      }
    };

    // Initial check
    updateDirection();

    // Event listener for window resize
    window.addEventListener("resize", updateDirection);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDirection);
    };
  }, []);

  const handleDeleteTask = (taskId, CardId) => {
    const id = { taskId, CardId };
    dispatch(removeTask(id));
  };

  return (
    <div>
      <Droppable droppableId="all-Column" type="Column" direction={direction}>
        {(provided) => (
          <div
            className="h-full gap-5 grid grid-rows-1 md:grid-cols-4 gap-y-5 px-4 md:px-20 "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/*Column Container  */}
            {searchFilter?.map((Card, index) => (
              <Draggable key={Card.id} draggableId={Card.id} index={index}>
                {(provided) => (
                  <div
                    className="Card-container  mb-10 py-2 px-4 group rounded-lg shadow-md shadow-black bg-slate-100 w-full border-2 border-slate-700"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <h3
                      className="group my-2 text-sm flex justify-evenly poppins-extrabold  from-stone-800 border-2 border-[#a5a3d6] rounded-lg shadow-md py-3 px-2"
                      {...provided.dragHandleProps}
                    >
                      <div className="flex items-center justify-center">
                        <div>
                          {Card.name} <span className="ml-2  text-rose-500">{Card.items.length}</span> 
                        </div>
                        <div
                          className={`w-6 h-6 ${
                            Card.id === "task4" && Card.items.length > 0
                              ? "visible"
                              : "invisible"
                          }`}
                        >
                          <img src="/check.png" alt="" />
                        </div>
                      </div>
                      <img
                        src="/shuffle.png"
                        alt=""
                        className="w-5 h-5 invisible group-hover:visible"
                      />
                    </h3>
                    {/* Cards */}
                    <CardComponent
                      Card={Card}
                      type="item"
                      handleDeleteTask={handleDeleteTask}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
