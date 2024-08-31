
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
import SearchReducer from "./searchSlice";
const TaskStore = configureStore({
    reducer:{
       task:taskReducer,
       search:SearchReducer
    }
})

export default TaskStore;