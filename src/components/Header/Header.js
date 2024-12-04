
import styles from './Header.module.css';
import classNames from "classnames";
import Nav from "@/components/Nav/Nav";

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.info}>
            <h1>Dora Do</h1>
            {/*<h2>Creative Technologist</h2>*/}
            <h2 className={styles.subtitle}>design / engineering</h2>
            <p>I am an engineer, designer, and educator based in NYC. I create a wide variety of immersive, intentional [things]
                with
                technology.</p>
            <p className={classNames('display-print')}>doradocodes@gmail.com</p>
        </div>
        <div>
            <Nav />
        </div>
    </header>
}
