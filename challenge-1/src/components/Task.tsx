import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
    id: string,
    content: string;
    isCompleted: boolean;
}

interface TaskProps {
    task: TaskType;
    handleDelete: (id: string) => void;
}

export function Task({ task, handleDelete }:TaskProps) {
    function onDeleteTask() {
        handleDelete(task.id);
    }

    return (
        <li className={styles.task}>
            <div className={styles.checkboxWrapper}>
                <input className={styles.checkbox} type='checkbox' id='checkbox' />
                <span className={styles.checkmark}></span>
            </div>
            <p>{task.content}</p>
            <div className={styles.trashWrapper} onClick={onDeleteTask}>
                <Trash size={17} />
            </div>
        </li>
    );
}