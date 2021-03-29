import React from 'react';
import styled from './experience-styles.module.scss';
import manulife_logo from '../../asset/images/manulife_logo.png';
import orient_logo from '../../asset/images/orient_logo.png';
import fsoft_logo from '../../asset/images/fsoft_logo.png';

function ExperienceComponent() {
    return (
        <>
            <div className={styled.container}>
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <div className={styled.timeline}>
                            <ul>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Manulife</h3>
                                        <img className={styled.img} src={manulife_logo}/>
                                        <p className={styled.title}>Business Analyst</p>
                                        <p>Work with Business User to elicit and define user requirements</p>
                                        <p>Consult business needs, suggest solutions and negotiate with Business Users</p>
                                        <p>Create user story, acceptance criteria and specification docs</p>
                                        <p>Ensure the requirements are fully understood by the development team</p>
                                        <p>Cooperate with local and regional teams on delivery</p>
                                        <p>Support and review testcases and defects.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>June 2020 - Current</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Orient Software Development Corp</h3>
                                        <img className={styled.img} src={orient_logo} />
                                        <p className={styled.title}>Business Analyst</p>
                                        <p>Work onsite (Singapore) to get requirement</p>
                                        <p>Elicit and analyse requirement</p>
                                        <p>Create user story, acceptance criteria, and mock up (Balsamiq)</p>
                                        <p>Transfer requirement to offshore development team</p>
                                        <p>Conduct demo and training session at client's site</p>

                                    </div>
                                    <div className={styled.time}>
                                        <h4>May 2020</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>FPT Software</h3>
                                        <img className={styled.img} src={fsoft_logo} />
                                        <p className={styled.title}>Business Analyst</p>
                                        <p>Conduct interview with client to collect requirements.</p>
                                        <p>Documentation task: write SRS, business flow/work flow, use case and wireframe</p>
                                        <p>Coordinate with stakeholders to clarify/transfer requirements</p>
                                        <p>Work closely with Technical Team to offer clients with workable and cost-effective solutions</p>
                                        <p>Conduct demo session with client to verify product’s conformity with defined business needs</p>
                                        <p>Perform UAT test for main business flow</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>April 2019</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>NUS Software</h3>
                                        <p className={styled.title}>Business Analyst</p>
                                        <p>Work directly to get requirement</p>
                                        <p>Analyze requirement</p>
                                        <p>Write feature list and business rule</p>
                                        <p>Distribute requirement to development team</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>Jan 2018</h4>
                                    </div>
                                </li>
                                <div style={{ clear: "both" }} ></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceComponent
