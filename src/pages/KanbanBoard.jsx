import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/Column";
import { useSelector, useDispatch } from "react-redux";
import CreateItemBtn from "../components/CreateItemBtn";
import {
  updateTaskOrder,
  moveTaskBetweenCards,
  reorderCards,
} from "../utils/Redux/TaskSlice";
import SearchBox from "../components/SearchBox";

const KanbanBoard = () => {
  const cards = useSelector((state) => state.task.Data); // Get cards from Redux store
  const [bool, setBool] = useState(false);
  const dispatch = useDispatch();

  const handleDropDrag = (result) => {
    const { source, destination, type } = result;
    if (!destination) return;

    if (type === "Column") {
      // Reorder Columns
      const reorderedCards = Array.from(cards);
      const [removed] = reorderedCards.splice(source.index, 1);
      reorderedCards.splice(destination.index, 0, removed);

      dispatch(reorderCards({ reorderedCards }));
    } else if (type === "item") {
      // Reorder or move items between Cards
      const sourceColumnIndex = cards.findIndex(
        (card) => card.id === source.droppableId
      );
      const destinationColumnIndex = cards.findIndex(
        (card) => card.id === destination.droppableId
      );

      const sourceColumn = cards[sourceColumnIndex];
      const destinationColumn = cards[destinationColumnIndex];

      const sourceItems = Array.from(sourceColumn.items);
      const [movedItem] = sourceItems.splice(source.index, 1);

      if (sourceColumnIndex === destinationColumnIndex) {
        // Reorder within the same Card
        sourceItems.splice(destination.index, 0, movedItem);
        dispatch(
          updateTaskOrder({
            CardId: sourceColumn.id,
            updatedItems: sourceItems,
          })
        );
      } else {
        // Move between different Cards
        const destinationItems = Array.from(destinationColumn.items);
        destinationItems.splice(destination.index, 0, movedItem);
        dispatch(
          moveTaskBetweenCards({
            sourceColumnId: sourceColumn.id,
            destinationColumnId: destinationColumn.id,
            updatedSourceItems: sourceItems,
            updatedDestinationItems: destinationItems,
          })
        );
      }
    }
  };

  useEffect(() => {}, [cards]);

  return (
    <div className="">
      <DragDropContext onDragEnd={handleDropDrag}>
        {/* Search box */}
        <div className="mt-5">
          <SearchBox />
        </div>
        {/* Add Task Button */}
        <div className="px-6 md:px-20 h-52">
          <div
            className={` ${
              bool && "hidden"
            } cursor-pointer sm:px-4 w-32 h-10 text-white flex items-center border-2 border-[#c5d7ea] rounded-md justify-center gap-2`}
            onClick={() => setBool(!bool)}
          >
            <span className="text-xs font-extrabold w-20 sm:w-16">
              Add Task
            </span>
            <img src="/plus.png" alt="" className="w-6 h-6" />
          </div>
          <div className={` ${bool ? "" : "invisible"}`}>
            <CreateItemBtn setBool={setBool} bool={bool} />
          </div>
        </div>
        <Column Cards={cards} />
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
