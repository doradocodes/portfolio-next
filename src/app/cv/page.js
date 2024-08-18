import styles from "./page.module.css";
import Subnav from "@/components/Subnav/Subnav";
import {workExperience} from "@/data/cv";
import classNames from "classnames";

export default function CVPage() {
    return <div className={classNames(styles.page)}>
        {/*<Subnav*/}
        {/*    items={[*/}
        {/*        {id: 'work-experience', name: 'Work Experience'},*/}
        {/*        {id: 'education', name: 'Education'},*/}
        {/*        {id: 'awards', name: 'Awards & Grants'},*/}
        {/*    ]}*/}
        {/*/>*/}
        <section className={classNames('content', styles.section)}>
            <h3 id="work-experience" className={styles.sectionTitle}>Work Experience</h3>
            <div className={styles.subsection}>
                {workExperience.map((job, i) =>
                    <div className={styles.subsectionContent}>
                        <p className={styles.kicker}>{job.startYear} - {job.endYear}</p>
                        <p className={styles.subsectionTitle}>{job.title}<span
                            className={styles.pipe}>|</span>{job.company}</p>
                        <p>{job.location}</p>
                        <p>{job.description}</p>
                        <ul className={styles.subsectionList}>
                            {job.responsibilities.map((responsibility, i) =>
                                <li key={i}>{responsibility}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </section>

        <section className={styles.section}>
            <h3 id="education" className={styles.sectionTitle}>Education</h3>
            <div className={styles.subsection}>
                <div className={styles.subsectionContent}>
                    <p className={styles.kicker}>2022 - 2023</p>
                    <p className={styles.subsectionTitle}>M.A. Interactive Media Arts<span
                        className={styles.pipe}>|</span> New York University</p>
                    <p>New York, NY</p>
                </div>
                <div className={styles.subsectionContent}>
                    <p className={styles.kicker}>2011 - 2015</p>
                    <p className={styles.subsectionTitle}>B.S. Computer Science<span
                        className={styles.pipe}>|</span> San Jose State University</p>
                    <p>San Jose, CA</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <h3 id="grants" className={styles.sectionTitle}>Grants & Residencies</h3>
            <div className={styles.subsection}>
                <div className={styles.subsectionContent}>
                    <p className={styles.kicker}>2024</p>
                    <p className={styles.subsectionTitle}>pr05 Grant<span className={styles.pipe}>|</span> Processing Foundation</p>
                    <p>Prototyping a Collaborative Code Editor For Processing</p>
                    <p>New York, NY</p>
                </div>

                <div className={styles.subsectionContent}>
                    <p className={styles.kicker}>2023 - 2024</p>
                    <p className={styles.subsectionTitle}>Research Resident<span className={styles.pipe}>|</span> New
                        York University</p>
                    <p>New York, NY</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <h3 id="teaching" className={styles.sectionTitle}>Teaching</h3>
            <div className={styles.subsection}>
                {/*<div className={styles.subsectionContent}>*/}
                {/*    <p className={styles.kicker}>2024 - Current</p>*/}
                {/*    <p className={styles.subsectionTitle}>Web Production 2<span className={styles.pipe}>|</span> Hunter*/}
                {/*        College</p>*/}
                {/*    <p>New York, NY</p>*/}
                {/*</div>*/}

                {/*<div className={styles.subsectionContent}>*/}
                {/*    <p className={styles.kicker}>2024</p>*/}
                {/*    <p className={styles.subsectionTitle}>Interactive Web: Intro to HTML, CSS, and JavaScript<span className={styles.pipe}>|</span> SVA</p>*/}
                {/*    <p>New York, NY</p>*/}
                {/*</div>*/}

                <div className={styles.subsectionContent}>
                    <p className={styles.kicker}>2023 - 2024</p>
                    <p className={styles.subsectionTitle}>Teaching Assistant<span className={styles.pipe}>|</span> New
                        York University</p>
                    <p>New York, NY</p>
                </div>
            </div>
        </section>
    </div>
}
