import { PlusCircle } from '@phosphor-icons/react';

import { Header } from "./components/Header";

import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />
      
      <main className={styles.todoWrapper}>
        <div className={styles.todoContent}>
          <form className={styles.newTask}>
            <input 
              placeholder="Add a new task"
            />

            <button type="submit">Create <span><PlusCircle /></span></button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
