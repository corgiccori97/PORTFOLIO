import React from 'react';
import { Link, Element } from 'react-scroll'

class ScrollTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
}

function Nav() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                    <li>COMMENT and LIKE</li>
                </ul>
            </nav>
        </header>

        <Element name='about' className='element'>
            <div className='scrollTestSector'>
                포트폴리오 소개입니다.
            </div>
        </Element>

        </>
    );
}

export default Nav;