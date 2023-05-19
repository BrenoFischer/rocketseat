import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
    content: string;
    isCompleted: boolean;
}

export function Task({ content, isCompleted }:TaskType) {
    return (
        <li className={styles.task}>
            <div className={styles.inputWrapper}>
                <input type='checkbox' id='checkbox' />
                <label htmlFor='checkbox'></label>
            </div>
            <p>{content}</p>
            <Trash size={20} />
        </li>
    );
}