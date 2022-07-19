import styles from "./About.module.css"
// import profileimg from '../images/profile.jpg'
function About () {
    return (
        <>
        <section className={styles.about} id="about">
            <h1>안녕하세요. <br /> 김상희입니다. 🐥</h1>
            <p>
                어떠어떠한 뭔가를 믿습니다. 어쩌구저쩌구..
            </p>
            {/* <img src={profileimg} /> */}
        </section>
        </>
    );
}

export default About;