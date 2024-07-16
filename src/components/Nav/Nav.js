'use client'

import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';
import classNames from "classnames";

export default function Nav({ }) {
    const pathname = usePathname()

    return (
        <nav className={classNames(styles.nav, 'no-print')}>
            <ul className={styles.navItemList}>
                <li className={`${pathname === '/' ? styles.activeNavItem : ''}`}><a href="/">Home</a></li>
                <li className={`${pathname === '/work' ? styles.activeNavItem : ''}`}><a
                    href="/work">Work</a></li>
                <li className={`${pathname === '/cv' ? styles.activeNavItem : ''}`}><a href="/cv">CV</a></li>
                <li className={`${pathname === '/about' ? styles.activeNavItem : ''}`}><a href="/about">About</a></li>

                <li className={`${pathname === '/contact' ? styles.activeNavItem : ''}`}><a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
