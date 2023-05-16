import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
