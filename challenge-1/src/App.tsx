import { useState, ChangeEvent, FormEvent } from 'react';

import { PlusCircle } from '@phosphor-icons/react';
import shortid from 'shortid';

import Clipboard from './assets/clipboard.svg';
import { Header } from "./components/Header";
import { Task, TaskType } from './components/Task';

import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  const quantityOfTasksCompleted = tasks.reduce((totalCompleted, task) => {
    if(task.isCompleted){
      return totalCompleted + 1;
    } 
    return totalCompleted;
  }, 0);

  function toggleTaskStatus(id: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          id: id,
          content: task.content,
          isCompleted: !task.isCompleted,
        };
      }
      else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }


  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleDeleteTask(idOfTaskToDelete: string) {
    const filteredTasks = tasks.filter(task => {
      return task.id !== idOfTaskToDelete
    });

    setTasks(filteredTasks);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = { 
      id: shortid.generate(),
      content: newTaskContent,
      isCompleted: false,
    }

    setTasks((state) => [...state, newTask]);
    setNewTaskContent('');
  }

  return (
    <>
      <Header />
      
      <div className={styles.todoWrapper}>
        <div className={styles.todoContent}>

          {/* --- New Task --- */}
          <form onSubmit={handleNewTask} className={styles.newTask}>
            <input 
              placeholder="Add a new task"
              value={newTaskContent}
              onChange={handleNewTaskContentChange}
              required
            />

            <button type="submit">Create <span><PlusCircle /></span></button>
          </form>
          {/* --- New Task --- */}

          {/* --- Tasks --- */}
          <main className={styles.tasks}>
            <header>
              <div className={styles.tasksInfo}>
                Created tasks 
                <span className={styles.counter}>{tasks.length}</span>
              </div>
              <div className={styles.tasksInfo}>
                <span className={styles.completedText}>Completed</span>
                <span className={styles.counter}>{quantityOfTasksCompleted}</span>
              </div>
            </header>

            { tasks.length === 0 ?
              <section className={styles.empty}>
                <img src={Clipboard} />
                <div>
                  <p><span>You still do not have any tasks created</span></p>
                  <p>Create tasks and organize your ToDos</p>
                </div>
              </section>
              :
              <ul>
                { tasks.map(task => {
                  return <Task key={task.id} task={task} handleDelete={handleDeleteTask} toggleTaskStatus={toggleTaskStatus} />
                })
                }
              </ul>
            }
          </main>
          {/* --- Tasks --- */}
        </div>
      </div>
    </>
  )
}

export default App
