import { createSlice } from "@reduxjs/toolkit";

// Initial Data
const DATA = [
  {
    id: "task1",
    name: "TO DO",
    items: [
      {
        id: "item1",
        name: "Design Homepage",
        des: "Create mockups and design the homepage layout.",
      },
      {
        id: "item2",
        name: "Setup Project Repository",
        des: "Initialize the repository and set up CI/CD.",
      },
      {
        id: "item3",
        name: "Research API Integrations",
        description: "Investigate available APIs for third-party services.",
      },
    ],
    tint: 1,
  },
  {
    id: "task2",
    name: "In Progress",
    items: [
      {
        id: "item4",
        name: "Develop Authentication Module",
        des: "Implement user authentication and authorization.",
      },
      {
        id: "item5",
        name: "Create Database Schema",
        description: "Design and set up the database schema.",
      },
    ],
    tint: 2,
  },
  {
    id: "task3",
    name: "Review",
    items: [
      {
        id: "item6",
        name: "Code Review for Authentication",
        des: "Review and provide feedback on the authentication code.",
      },
      {
        id: "item7",
        name: "Test Database Integration",
        des: "Ensure database integration works as expected.",
      },
    ],
    tint: 4,
  },
  {
    id: "task4",
    name: "Completed",
    items: [
      {
        id: "item8",
        name: "Deploy to Production",
        description: "Deploy the application to the production environment.",
      },
      {
        id: "item9",
        name: "Write Documentation",
        description: "Create documentation for the project setup and usage.",
      },
    ],
    tint: 3,
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState: {
    Data: [...DATA],
  },
  reducers: {
    addTask: (state, action) => {
      const { CardId, id, name, des } = action.payload;

      const cardToUpdate = state.Data.find((card) => card.id === CardId);
      if (!cardToUpdate) {
        console.error("Card not found");
        return;
      }
      cardToUpdate.items.push({ id, name, des });
    },
    updateTask: (state, action) => {
      const { CardId, taskId, name, des } = action.payload;
      const cardToUpdate = state.Data.find((card) => card.id === CardId);
      if (!cardToUpdate) {
        console.error("Card not found");
        return;
      }
      const taskToUpdate = cardToUpdate.items.find(
        (item) => item.id === taskId
      );
      if (!taskToUpdate) {
        console.error("Task not found");
        return;
      }

      taskToUpdate.name = name;
      taskToUpdate.des = des;
    },
    removeTask: (state, action) => {
      const { CardId, taskId } = action.payload;

      const cardToUpdate = state.Data.find((card) => card.id === CardId);
      if (!cardToUpdate) {
        console.error("Card not found");
        return;
      }
      cardToUpdate.items = cardToUpdate.items.filter(
        (item) => item.id !== taskId
      );
    },

    // New reducer to reorder cards
    reorderCards: (state, action) => {
      state.Data = action.payload.reorderedCards;
    },
    // New reducer to update task order within the same card
    updateTaskOrder: (state, action) => {
      const { CardId, updatedItems } = action.payload;
      const cardToUpdate = state.Data.find((card) => card.id === CardId);

      if (cardToUpdate) {
        cardToUpdate.items = updatedItems;
      }
    },
    // New reducer to move tasks between cards
    moveTaskBetweenCards: (state, action) => {
      const {
        sourceColumnId,
        destinationColumnId,
        updatedSourceItems,
        updatedDestinationItems,
      } = action.payload;

      const sourceCard = state.Data.find((card) => card.id === sourceColumnId);
      const destinationCard = state.Data.find(
        (card) => card.id === destinationColumnId
      );

      if (sourceCard && destinationCard) {
        sourceCard.items = updatedSourceItems;
        destinationCard.items = updatedDestinationItems;
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  removeTask,
  reorderCards,
  updateTaskOrder,
  moveTaskBetweenCards,
} = taskSlice.actions;

export default taskSlice.reducer;
