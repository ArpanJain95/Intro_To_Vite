import React, { useState } from "react";

const FormComp = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    task: "",
    desc: "",
    completed: false,
  });

  function openForm() {
    setFormOpen(!formOpen);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  }

  async function handleSbumit() {
      try {
        const res = await fetch(`http://localhost:3001/tasks`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask)
        })

        if(!res.ok) {
          throw new Error('Network error')
        }

        const data = await res.json()
        console.log("Success:",data);
      } catch (error) {
        console.error("Error:", error);
      }
    console.log(newTask);
    setNewTask({
      task: "",
      desc: "",
      completed: false,
    });
    setFormOpen(false);
  }

  function taskForm() {
    return (
      <form onSubmit={handleSbumit}>
        <input
          type="text"
          placeholder="Task Name"
          name="task"
          value={newTask.task}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="desc"
          value={newTask.desc}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
        <button type="button" onClick={openForm}>
          Cancel
        </button>
      </form>
    );
  }

  return (
    <>
      <div>
        {formOpen ? "" : <button onClick={openForm}>Create Task</button>}
        {formOpen ? taskForm() : "Form Closed"}
      </div>
    </>
  );
};

export default FormComp;
