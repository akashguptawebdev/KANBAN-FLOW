# Kanban Flow

## Overview

**Kanban Flow** is a dynamic Kanban board application designed to streamline task management. This app provides a visual and interactive way to manage tasks across different stages, making it an ideal tool for both individual users and teams.

### Key Features

- **Drag-and-Drop Functionality**: Move tasks between columns and reorder tasks within columns with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search and Filter**: Search tasks by name and filter them to find what you need quickly.
- **Create and Manage Tasks**: Add tasks with names and descriptions, and manage them efficiently.
- **Task Removal**: Easily remove tasks from the board.

## Live Demo

You can explore the Kanban Flow app live on [Vercel](https://kanban-flows.vercel.app/).

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **State Menagement**: Redux for state management
- **Drag-and-Drop**: `react-beautiful-dnd`
- **Build Tool**: Vite

## File Structure

- **`/src`**: Contains the main source code for the application.
  - **`/components`**: Reusable UI components.
  - **`/pages`**: React components representing different pages of the app.
  - **`/utils`**: Utility functions and Redux slice files.
- **`/public`**: Static assets like images.
- **`index.html`**: Main HTML file.

## Components

- **KanbanBoard**: Manages the overall Kanban board layout and drag-and-drop functionality.
- **Column**: Represents individual columns in the Kanban board.
- **CreateItemBtn**: Button component for creating new tasks.
- **Cards**: Displays individual tasks within a column.

## Usage

1. **Creating Tasks**

   - Click on the "Add Task" button to open the task creation form.
   - Enter the task name and description, and click "Create" to add it to the board.

2. **Managing Tasks**

   - Drag and drop tasks between columns to update their status.
   - Click the delete button on a task to remove it.

3. **Search and Filter**
   - Use the search box to filter tasks by name.

## GitHub Repository
    
    - Check out the source code on GitHub: (https://github.com/akashguptawebdev/KANBAN-FLOW)
