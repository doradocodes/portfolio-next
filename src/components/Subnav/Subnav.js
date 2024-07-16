'use client'

import classNames from "classnames";
import styles from './Subnav.module.css';

export default function Subnav({ items = [] }) {
    return <ul className="subnav">
        {
            items.map((item, i) => {
                return <li key={i}>
                    <a href={`#${item.id}`} className={classNames({ [styles.activeNavItem]: window.location.hash === `#${item.id}`})}>{item.name}</a>
                </li>
            })
        }
    </ul>
}
