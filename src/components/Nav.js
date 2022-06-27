import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from "./Nav.module.css";

function Nav() {
    // 마지막 스크롤 위치 저장
    const [lastScroll, setLastScroll] = useState(0);
    // document.body 크기
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    // 스크롤 direction
    const [scrollDirection, setScrollDirection] = useState('');

    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollDirection(lastScroll > -bodyOffset.top ? "up" : "down");
        setLastScroll(-bodyOffset.top);
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return (
        <>
        <header>
            <nav className={scrollDirection === "down" ? styles.hidden : styles.main_nav}>
                <ul className={styles.nav_lists}>
                    <li className={styles.nav_list}>
                        <Link to="/#about" smooth={true}>
                            About
                        </Link>
                    </li>
                    <li className={styles.nav_list}>
                        <Link to="/#skill" smooth={true}>
                            Skill
                        </Link>
                    </li>
                    <li className={styles.nav_list}>
                        <Link to="/#projects" smooth={true}>
                            Projects
                        </Link>
                    </li>
                    <li className={styles.nav_list}>
                        <Link to="/#contact" smooth={true}>
                            Contact 
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Nav;