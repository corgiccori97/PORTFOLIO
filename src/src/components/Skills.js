import styles from './Skills.module.css'
import './SkillsBar.scss'
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useRef, useState } from 'react';

function Skills(skillClick) {
    const [progress, setProgress] = useState([0, 0, 0, 0, 0]);

    // skills 섹션으로 넘어올 때마다 setprogress
    useEffect(() => {
        setProgress([90, 80, 60, 40, 80]);
    }, [skillClick])
    
    const ProgressBar = (props) => {
        const { bgcolor, completed } = props;
        const containerStyles = {
            height: 20,
            width: "100%", 
            backgroundColor: "gainsboro",
            borderRadius: 50,
            margin: 50,
        };

        const filterStyles = {
            height: "100%",
            width: `${completed}%`,
            backgroundColor: bgcolor,
            borderRadius: inherit,
            textAlign: "right",
        };
    };

    return (
        <div className={styles.container} id="container">
            <section className={styles.skills} id="skills">
                <h1 aria-label='main-skills'>Main Skills</h1>
                <ul className='skills frontend'>
                    <li className='skill'>
                        HTML5
                        <ProgressBar completed={progress[0]} className='wrapper'
                        />
                    </li>
                    <li className='skill'>
                        CSS
                        <ProgressBar completed={progress[1]} className='wrapper'   barContainerClassName="container" completedClassName="barCompleted" labelClassName="label"/>
                    </li>
                    <li className='skill'>
                        Javascript
                        <ProgressBar completed={progress[2]} className='wrapper'   barContainerClassName="container" completedClassName="barCompleted" labelClassName="label"/>
                    </li>
                    <li className='skill'>
                        React
                        <ProgressBar completed={progress[3]} className='wrapper'   barContainerClassName="container" completedClassName="barCompleted" labelClassName="label"/>
                    </li>
                    <li className='skill'>
                        Django
                        <ProgressBar completed={progress[4]} className='wrapper'   barContainerClassName="container" completedClassName="barCompleted" labelClassName="label"/>
                    </li>
                </ul>
            </section>
            <section className={styles.interests} id="interest">
                {/* <h2>Have interests & knowledge .. </h2> */}
                <ul className='interests'>
                    <li>
                        #Adobe XD
                    </li>
                    <li>
                        #Python
                    </li>
                    <li>
                        GoogleAnalytics
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
        </div>
    );
}

export default Skills;