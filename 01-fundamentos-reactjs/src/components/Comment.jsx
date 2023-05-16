import { Trash, ThumbsUp } from '@phosphor-icons/react';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Breno Perricone</strong>
                            <time title='15 May 2023 08:19:00' dateTime='2023-05-15 08:19:00'>Published 1h ago</time>
                        </div>

                        <button title='Delete Comment'><Trash size={24} /></button>
                    </header>

                    <p>Very good, congrats!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}