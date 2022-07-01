import styles from './Skills.module.css'
import { CircleProgress } from 'react-circular-gradient-progress';

function Skills() {
    return (
        <>
        <section className={styles.skills} id="skills">
            <h1>Skill</h1>
            {/* <CircleProgress percentage={90} /> */}
            <ul className='skills frontend'>
                <li className='skill'>
                    HTML5
                </li>
                <li className='skill'>
                    CSS
                </li>
                <li className='skill'>
                    React
                </li>
                <li className='skill'>
                    Django
                </li>
            </ul>
        </section>
        </>
    );
}

export default Skills;