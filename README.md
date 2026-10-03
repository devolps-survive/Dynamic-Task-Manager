# React Todo App

A clean and responsive Todo application built with **React** to practice fundamental React concepts such as components, props, state management, event handling, conditional rendering, list rendering, and dynamic UI updates.

## Features

### Required Features

- **Add Tasks**
  - Add a new task using an input and Add button.
  - Prevents empty tasks from being added.
  - Clears the input after adding a task.
  - Each task has a unique ID, text, and completed status.

- **Task List**
  - Displays tasks dynamically using `map()`.
  - Uses `key={task.id}` for stable list rendering.

- **Complete / Uncomplete Tasks**
  - Toggle tasks using a checkbox.
  - Completed tasks have a visual difference with line-through styling and muted appearance.

- **Delete Tasks**
  - Delete individual tasks using the Delete button.

- **Empty State**
  - Displays a helpful message when there are no tasks:
    > No tasks yet. Add a task to get started!

- **Task Statistics**
  - Displays the total number of tasks.
  - Displays the number of completed tasks.
  - Statistics update automatically when the task state changes.

- **Task Filters**
  - **All** — displays every task.
  - **Completed** — displays only completed tasks.
  - **Active / Not Completed** — displays only incomplete tasks.
  - The currently selected filter is visually highlighted.

- **Clear Completed**
  - Removes all completed tasks while keeping incomplete tasks.

## Original Improvements

To make the application my own, I added two additional features:

### Active Task Count

Displays the number of tasks that are still incomplete, making it easy to see how much work remains.

### Reset All Tasks

A Reset button allows the user to quickly remove all tasks and return the application to its initial empty state.

## Component Structure

The application is organized into reusable React components:

```text
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskFilter.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

### Component Responsibilities

| Component | Responsibility |
|---|---|
| `App` | Owns the main application state and coordinates the application |
| `TaskForm` | Handles task input and task creation |
| `TaskFilter` | Displays and manages task filter options |
| `TaskList` | Receives filtered tasks and renders the task list |
| `TaskItem` | Displays an individual task and handles task actions |

## React Concepts Practiced

This project demonstrates:

- React functional components
- `useState`
- Props
- Parent-to-child communication
- Passing callback functions through props
- `onChange`
- `onClick`
- `onSubmit`
- `map()`
- `filter()`
- Conditional rendering
- Ternary operators
- Logical `&&`
- Dynamic `className`
- Stable list keys
- Derived data and dynamic statistics
- React state-driven UI updates

### Data Flow

The application follows a parent-to-child data flow:

```text
App
│
├── TaskForm
│      └── User adds a task
│             ↓
│         callback
│             ↓
├── TaskFilter
│      └── User selects a filter
│             ↓
│         callback
│             ↓
├── TaskList
│      └── Receives filtered tasks
│             ↓
└── TaskItem
       ├── Complete / Uncomplete
       └── Delete
```

Child components communicate user actions back to `App` through callback functions passed as props. `App` updates the state, and React automatically re-renders the affected UI.

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Vite

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

## Usage

1. Enter a task in the input field.
2. Click **Add Task** or press Enter.
3. Check the checkbox to mark a task as completed.
4. Click **Delete** to remove an individual task.
5. Use **All**, **Completed**, or **Active** to filter tasks.
6. Use **Clear Completed** to remove completed tasks.
7. Use **Reset** to remove all tasks.
8. View the task statistics to track total, completed, and active tasks.

## Project Requirements Checklist

- [x] Task creation
- [x] Empty input validation
- [x] Input clearing after adding
- [x] Unique task IDs
- [x] Dynamic task list
- [x] Complete / uncomplete tasks
- [x] Completed-task styling
- [x] Delete task
- [x] Empty state
- [x] Total task count
- [x] Completed task count
- [x] All filter
- [x] Completed filter
- [x] Active / Not Completed filter
- [x] Active filter styling
- [x] Clear Completed
- [x] Reusable components
- [x] Props and callback functions
- [x] `useState`
- [x] React event handling
- [x] Conditional rendering
- [x] `map()` for list rendering
- [x] Stable `key={task.id}`
- [x] Responsive and styled UI
- [x] Active task count improvement
- [x] Reset all tasks improvement

## Purpose

This project was built as a learning project to strengthen my understanding of React fundamentals and to practice building a small application using reusable components and state-driven UI.

## Author

**Mahder Seifu**