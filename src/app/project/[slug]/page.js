'use client'

import { creativeProjects, professionalProjects } from '@/data/projects';
import styles from "./page.module.css";
import classNames from "classnames";

export default function ProjectsPage({ params }) {
    const project = creativeProjects[params.slug] || professionalProjects[params.slug];
    return <div className="page">
        <div className={classNames('content', styles.content)}>
            <div className={styles.columnWrapper}>
                <div className={styles.column}>
                    <h1 className={styles.projectTitle}>{project.name}</h1>
                    { project.link &&
                        <p className={styles.projectLinks}>
                            {project.link}
                            {project.github && <a target="_blank" href={project.github}>Github</a>}
                        </p>
                    }
                    {project.summary}
                </div>
                <div className={styles.column}>
                    <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.title}/>
                </div>
            </div>
            {project.sections.length > 0 &&
                <section className={styles.tableOfContents}>
                    <h2 className={styles.sectionTitle}>Table of contents</h2>
                    {project.sections?.filter(section => section.title).map((section, i) =>
                        <a key={i} href={`#${section.title.toLowerCase().replace(/\s/g, '-')}`}>{section.title}</a>)
                    }
                </section>
            }
            {project.sections?.map((section, i) =>
                <section key={i} className={styles.section} id={section.title && section.title.toLowerCase().replace(/\s/g, '-')}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {section.content}
                </section>)
            }
        </div>
    </div>
}
