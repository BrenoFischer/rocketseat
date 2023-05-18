import { PlusCircle } from '@phosphor-icons/react';

import { Header } from "./components/Header";
import Clipboard from './assets/clipboard.svg';

import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.todoWrapper}>
        <div className={styles.todoContent}>
          <form className={styles.newTask}>
            <input 
              placeholder="Add a new task"
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
            <section className={styles.empty}>
              <img src={Clipboard} />
              <div>
                <p><span>You still do not have any tasks created</span></p>
                <p>Create tasks and organize your ToDos</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
