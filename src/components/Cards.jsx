import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Cards = ({ Card, type, handleDeleteTask }) => {
  return (
    <div>
      {/* Droppable area for card items */}
      <Droppable droppableId={Card.id} type={type}>
        {(provided, snapshot) => (
          <div className="flex flex-col justify-between w-full gap-20">
            <div
              className={`item-list ${
                snapshot.isDraggingOver ? "bg-blue-100" : ""
              }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                minHeight: "100px",
                backgroundColor: snapshot.isDraggingOver
                  ? "#e2e8f0"  
                  : "transparent",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              {/* Render card items */}
              {Card.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className={`item gap-2 rounded-md p-2 mb-3 shadow-lg my-1 text-black border-[3px] border-[#c5d7ea] flex justify-between items-center`}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="flex items-center gap-2">
                        <img src="/drag.png" className="h-6" alt="Drag handle" />
                        <div>
                          <h6 className="text-sm lato-bold">{item.name}</h6>
                          <p className="text-xs italic text-slate-800">
                            {item.des}
                          </p>
                        </div>
                      </div>
                      {/* Delete button */}
                      <div
                        className="w-5 h-5"
                        onClick={() => handleDeleteTask(item.id, Card.id)}
                      >
                        <img src="/close.png" alt="Delete item" className="w-2 h-2" />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder} 
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Cards;
