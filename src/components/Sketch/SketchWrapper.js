'use client'

import {NextReactP5Wrapper} from "@p5-wrapper/next";
import styles from "./SketchWrapper.module.css";
import { sketch1 } from "@/components/Sketch/sketch";


export default function SketchWrapper() {
    return <div className={styles.wrapper}>
        <div className={styles.source}>
            <pre>
                <code className={styles.code} suppressHydrationWarning>
                    {sketch1.toString()}
                </code>
            </pre>
        </div>
        <NextReactP5Wrapper sketch={sketch1} />
    </div>;
}
