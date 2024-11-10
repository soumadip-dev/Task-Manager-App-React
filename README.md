# Task Management App

A simple and intuitive task management application built with React for adding and managing TODOs.

 ![Task Management App](https://github.com/soumadip-dev/JS-learning-30Days-challenge/blob/main/27_project_task_management_app/Screenshot.png)

## Features
- Add new TODOs
- View a list of TODOs
- Edit existing TODOs
- Delete TODOs
- Filter TODOs by status (All, Pending, Completed)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/soumadip-dev/task-management-app.git
   ```

2. Navigate to the project folder and install dependencies:
   ```bash
   npm install
   ```

3. To run the app locally, use:
   ```bash
   npm start
   ```

## Usage
1. **Add a New TODO:** Enter your task in the input field and click the "Add Task" button or press Enter.
2. **Edit a TODO:** Click the "Edit" button next to the task you want to modify and enter the new task value in the prompt.
3. **Delete a TODO:** Click the "Delete" button next to the task you want to remove.
4. **Mark as Completed/Reset:** Click the "Completed" button to mark a task as completed, or the "Reset" button to revert its status.
5. **Filter TODOs:** Use the filter buttons to view tasks based on their completion status (All, Pending, Completed).

## Component Overview
- **App.js:** The main component that handles the rendering of TODOs, adding, editing, deleting, and filtering tasks.
- **Task.js:** A single TODO item component with functionality for marking as completed, editing, and deleting the task.
- **Filter.js:** A component that handles filtering the TODOs based on their status .
