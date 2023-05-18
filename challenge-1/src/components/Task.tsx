import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export function Task() {
    return (
        <li className={styles.task}>
            <input type='checkbox' />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={20} />
        </li>
    );
}