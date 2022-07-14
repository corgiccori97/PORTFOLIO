import styles from './Skills.module.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useRef, useState } from 'react';

function Skills() {
    const [progress, setProgress] = useState([0, 0, 0, 0, 0]);
    const progress_Id = useRef(0);
    // skills 섹션으로 넘어올 때마다 setprogress
    useEffect(() => {
        setProgress([90, 80, 60, 40, 80]);
    }, [])
    return (
        <>
        <section className={styles.skills} id="skills">
            <h1 aria-label='main-skills'>Main Skills</h1>
            <ul className='skills frontend'>
                <li className='skill'>
                    HTML5
                    <ProgressBar completed={progress[0]} className='wrapper'/>
                </li>
                <li className='skill'>
                    CSS
                    <ProgressBar completed={progress[1]} className='wrapper'/>
                </li>
                <li className='skill'>
                    Javascript
                    <ProgressBar completed={progress[2]} className='wrapper'/>
                </li>
                <li className='skill'>
                    React
                    <ProgressBar completed={progress[3]} className='wrapper'/>
                </li>
                <li className='skill'>
                    Django
                    <ProgressBar completed={progress[4]} className='wrapper'/>
                </li>
            </ul>
            <section id="interests">
                <h2>Have interests & knowledge .. </h2>
                <ul>
                    <li>
                        Adobe XD
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        Google Analytics
                    </li>
                    <li>
                        Tensorflow
                    </li>
                    <li>
                        Sklearn
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        MariaDB
                    </li>
                </ul>
            </section>
        </section>
        </>
    );
}

export default Skills;