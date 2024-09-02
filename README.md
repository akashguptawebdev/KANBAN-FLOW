
# Kanban Flow

## Overview

**Kanban Flow** is a dynamic Kanban board application designed to streamline task management. This app provides a visual and interactive way to manage tasks across different stages, making it an ideal tool for both individual users and teams.

### Key Features

- **Drag-and-Drop Functionality**: Move tasks between columns and reorder tasks within columns with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search and Filter**: Quickly search tasks by name and filter them to find what you need.
- **Task Management**: Create tasks with names and descriptions, and manage them efficiently.
- **Task Removal**: Easily remove tasks from the board.

## Live Demo

Explore the Kanban Flow app live on [Vercel](https://kanban-flows.vercel.app/).

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux
- **Drag-and-Drop**: `react-beautiful-dnd`
- **Build Tool**: Vite

## Installation

To set up the Kanban Flow project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/akashguptawebdev/KANBAN-FLOW.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd KANBAN-FLOW
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Open the Application**

   Open your browser and navigate to `http://localhost:5173` to view the application.

## File Structure

```
/src
  ├── /components       # Reusable UI components
  ├── /pages           # React components representing different pages of the app
  ├── /utils           # Utility functions and Redux slice files
/public
  ├── Static assets (e.g., images)
index.html             # Main HTML file
```

## Frontend Components

### Components Overview

1. **KanbanBoard**
   - **Description**: The main container for the Kanban board, responsible for rendering columns and handling drag-and-drop functionality.
   - **Props**: 
     - `columns`: Array of column data.
     - `onTaskMove`: Function to handle task movement between columns.

2. **Column**
   - **Description**: Represents an individual column in the Kanban board. It contains a list of tasks.
   - **Props**:
     - `title`: The title of the column.
     - `tasks`: Array of tasks within the column.
     - `onTaskRemove`: Function to remove a task.

3. **CreateItemBtn**
   - **Description**: A button component that opens a form for creating new tasks.
   - **Props**:
     - `onCreate`: Function to handle the creation of a new task.

4. **Card**
   - **Description**: Displays individual task details within a column.
   - **Props**:
     - `task`: The task data to display.
     - `onDelete`: Function to handle task deletion.

## Usage

### Creating Tasks

1. Click the "Add Task" button to open the task creation form.
2. Enter the task name and description, then click "Create" to add it to the board.

### Managing Tasks

- Drag and drop tasks between columns to update their status.
- Click the delete button on a task to remove it.

### Search and Filter

- Use the search box to filter tasks by name.

## GitHub Repository

Check out the source code on GitHub: [KANBAN-FLOW](https://github.com/akashguptawebdev/KANBAN-FLOW)
```

You can copy and paste this content directly into your README.md file! Let me know if you need any further assistance.