import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import FormComp from './FormComp';

const MainCont = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] =  useState(null);

  useEffect(() => {
    const fetchTasks = async() => {
      try {
        const res = await fetch('http://localhost:3001/tasks');
        if(!res.ok) {
          throw new Error("Response not ok")
        }

        const data = await res.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
        console.error("Error while fetching:", error);
      }
    }
    fetchTasks()
  }, []);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  async function deleteTask(id) {
    try {
      const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      })

      if(!res.ok) {
        throw new Error('Network error')
      }

      setTasks(tasks.filter(task => task.id !== id));
      console.log('Task deleted');
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function toggleComplete(id) {
    const updatedTasks = tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks)

    const updatedTask = updatedTasks.find(task => task.id === id)

    const updateServer = async (updatedTask) => {
      try {
        const res = await fetch(`http://localhost:3001/tasks/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        });
  
        if(!res.ok) {
          throw new Error('Network response was not ok')
        }
  
        const data = await res.json()
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
        setTasks(tasks);
      }
    }
    updateServer(updatedTask)
  };

  if(error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <FormComp addTask={addTask}/>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
      ))}
    </>
  )
}

export default MainCont