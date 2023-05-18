import RocketLogo from '../assets/rocket.svg';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={RocketLogo} />
            to<span>do</span>
        </header>
    );
}