import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export function Task() {
    return (
        <li className={styles.task}>
            <div className={styles.inputWrapper}>
                <input type='checkbox' id='checkbox' />
                <label htmlFor='checkbox'></label>
            </div>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={20} />
        </li>
    );
}