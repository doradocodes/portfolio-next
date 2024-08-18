import styles from './page.module.css';
import {creativeProjects, professionalProjects} from './../../data/projects.js';
import Link from "next/link";

export default function ProjectsPage() {
    return <div className="page">

        <h2 className={styles.gridTitle} id="professional-projects">Professional projects</h2>
        <div className={styles.grid}>
            {
                Object.keys(professionalProjects).map((id, i) => {
                    const project = professionalProjects[id];
                    return <Link key={i} className={styles.project} href={`/project/${id}`}>
                        <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                        <span className={styles.projectName}>{project.name}</span>
                    </Link>
                })
            }

        </div>

        <h2 className={styles.gridTitle} id="creative-projects">Creative projects</h2>
        <div className={styles.grid}>
            {
                Object.keys(creativeProjects).map((id, i) => {
                    const project = creativeProjects[id];
                    return <Link key={i} className={styles.project} href={`/project/${id}`}>
                        <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                        <span className={styles.projectName}>{project.name}</span>
                    </Link>
                })
            }
        </div>

    </div>
}
