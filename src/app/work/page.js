import styles from './page.module.css';
import {creativeProjects, professionalProjects} from './../../data/projects.js';
import Link from "next/link";
import R3FDComponent from "@/components/R3FComponent/R3FComponent";
import ThreeDComponent from "@/components/ThreeDComponent/ThreeDComponent";

export default function ProjectsPage() {
    return <div className="page">

        <h2 className={styles.gridTitle} id="professional-projects">Professional work</h2>
        <div className={styles.grid}>
            {
                Object.keys(professionalProjects).map((id, i) => {
                    const project = professionalProjects[id];
                    return <Link key={i} className={styles.project} href={`/project/${id}`}>
                        <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                        {/*<R3FDComponent image={`assets/${project.imageUrl}`} />*/}
                        {/*<ThreeDComponent />*/}
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
                        {/*<R3FDComponent image={`assets/${project.imageUrl}`} />*/}
                        <span className={styles.projectName}>{project.name}</span>
                    </Link>
                })
            }
        </div>

    </div>
}
