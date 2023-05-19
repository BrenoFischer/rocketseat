import { useState, ChangeEvent, FormEvent } from 'react';

import { PlusCircle } from '@phosphor-icons/react';

import Clipboard from './assets/clipboard.svg';
import { Header } from "./components/Header";
import { Task, TaskType } from './components/Task';

import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = { content: newTaskContent, isCompleted: false }

    setTasks([...tasks, newTask]);
    setNewTaskContent('');
  }

  return (
    <>
      <Header />
      
      <div className={styles.todoWrapper}>
        <div className={styles.todoContent}>
          <form onSubmit={handleNewTask} className={styles.newTask}>
            <input 
              placeholder="Add a new task"
              value={newTaskContent}
              name="newTask"
              onChange={handleNewTaskContentChange}
              required
            />

            <button type="submit">Create <span><PlusCircle /></span></button>
          </form>

          <main className={styles.tasks}>
            <header>
              <div className={styles.tasksInfo}>
                Created tasks 
                <span className={styles.counter}>0</span>
              </div>
              <div className={styles.tasksInfo}>
                <span className={styles.completedText}>Completed</span>
                <span className={styles.counter}>0</span>
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
              tasks.map(task => {
                return <Task content={task.content} isCompleted={task.isCompleted} />
              })
            }
          </main>
        </div>
      </div>
    </>
  )
}

export default App
