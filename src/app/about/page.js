import styles from "./page.module.css";

export default function About() {
    return <div className={styles.wrapper}>
        <img className={styles.profileImage} src="Dora_Do1_small.jpg" alt="Dora Do profile picture"/>
        <p>
            Dora Do is a Creative Technologist based in Brooklyn, NY, exploring the intersection of technology and art.
            Born and raised in Silicon Valley, Dora developed a deep passion for both fields from an early age. Starting
            her career in 2015, she has created software applications for major tech corporations such as Macy’s, Kodak,
            and Square, laying the foundation for her expertise in developing large-scale tech solutions. Since 2022,
            Dora has shifted her focus to crafting thoughtful and immersive digital experiences. Merging her love for
            analog art mediums with her extensive technical background, her work aims to understand and deepen the human
            connection with technology using creativity.
            <br/><br/>
            Dora holds a B.S. in Computer Science from San Jose State University and an M.A. in Interactive Media Arts
            from NYU.
        </p>
    </div>
}
