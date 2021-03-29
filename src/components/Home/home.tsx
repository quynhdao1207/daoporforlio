import React, { lazy } from 'react';
import styled from './home-styles.module.scss';

const NavBar = lazy(() => import('../NavBar/nav-bar'));

function HomeComponent() {
    return (
        <>
            <div className={styled.container}>
                <NavBar />
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <div className={styled.header}> </div>
                        <div className={styled.sm}>
                            <a href="https://www.facebook.com/profile.php?id=100022688463180">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="http://linkedin.com/in/quynh-dao-nguyen-2b4a97a2">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/quynhdao1207">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://instagram.com/nguyen_quynh_dao?igshid=eplwmhk5rq80">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className={styled.buttons}>
                            <button>
                                <a href="#contact">
                                    Contact Me
                                </a>
                            </button>
                            <button>
                                <a href='https://drive.google.com/file/d/10sIWs8KNXrwkHmW4rf3UM6qS7ELADv9k/view?usp=sharing'>Download CV</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
