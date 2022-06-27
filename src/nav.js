import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/#about" smooth={true}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/#skill" smooth={true}>
                            Skill
                        </Link>
                    </li>
                    <li>
                        <Link to="/#projects" smooth={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
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