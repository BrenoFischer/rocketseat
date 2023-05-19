import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
    content: string;
    isCompleted: boolean;
}

export function Task({ content, isCompleted }:TaskType) {
    return (
        <li className={styles.task}>
            <div className={styles.checkboxWrapper}>
                <input className={styles.checkbox} type='checkbox' id='checkbox' />
                <span className={styles.checkmark}></span>
            </div>
            <p>{content}</p>
            <Trash size={20} />
        </li>
    );
}