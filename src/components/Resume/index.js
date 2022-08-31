import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import Contact from "../Contact";
import myResume from '../../assets/resume/myResume.pdf';
import rutCert from '../../assets/Cert/rutCert.jpg';

function Resume() {

    return (
        <Container className="topMar">

            <Row>
                <Col>
                <h2>My Resume</h2>
                <p>This is an abridged version of my resume.  There are links to my LinkedIn and Github, and a link to download my resume if you so choose.</p>
                </Col>
                
                <Col>
                    {/* perhaps a modal that confirms download w/ thumbnail of resume  */}
                    {/* Maybe another Contact button. */}
                    <a href={myResume} download>
                        <Button className="flRight" variant="info">Download</Button>
                    </a>
                </Col>
                
            </Row>

            {/* <Row>
                <Contact />
            </Row> */}

            <Row>
                <Contact/>
                <Container className="resume">
                <section className="btmBorder">
                <h1 className="topMar">Anthony Rankin</h1>
                <p>Bordentown, NJ</p>

                    <p>
                        <a href="https://www.linkedin.com/in/arankin789" target="_blank" rel="noreferrer"><Button variant="light" className="btnMar">LinkedIn</Button></a>
                        <a href="https://github.com/Arankin7" target="_blank" rel="noreferrer"><Button variant="light" className="btnMar">GitHub</Button></a>
                    </p>

                <p>
                Committed Web Developer who has a desire to continuously improve skills and broaden knowledge.  Eager to take on new roles and not daunted by the unknown.  Equipped with a solid foundation in HTML5, CSS3, Javascript, jQuery, and an ever growing skill-set. Proficient with time management and prioritizing tasks. 
                </p>
                </section>
                
                <section className="btmBorder topMar">
                    <h3>Technical Skills</h3>
                    <p>HTML5, CSS3, JavaScript, C#, jQuery, Express.js, Bootstrap, Node.js, React.js, Database Management(MySQL, NoSQL, MongoDB)</p>
                
                    <h3>Hobbies</h3>
                    <p>Game Development, Video games, Rom Hacks, Juggling, Speedrunning, Music, Cooking</p>
                </section>

                <section className="topMar btmBorder">
                    <h3>Experience</h3>
                    <p><b>Lab Manager</b> | Lenscrafters | Apr 2012 - Apr 2022</p>
                    <p>
                    Created value for the patients by delivering an exceptional customer service experience.  Ensured eyewear is manufactured in accordance with Lenscrafters QMP guidelines. Created a safe, supportive, and motivating work environment.                        
                    </p>
                    <ul className="justTextLeft">
                        <li>Performed ongoing maintenance of equipment used throughout the lab.</li>
                        <li>Utilized QMP knowledge to deliver quality products.</li>
                        <li>Responsible for troubleshooting and diagnosing all equipment issues in the lab.</li>
                        <li>Ensured all company approved lab safety programs were implemented and maintained.</li>
                        <li>Completed and filed all lab paperwork in a timely and accurate manner.</li>
                    </ul>
                </section>

                <section className="topMar">
                    <h3>Education</h3>
                    <div>
                        <p><b>Boot Camp Certificate </b>- Rutgers University | New Brunswick, NJ <em> - February 2022 - August 2022</em></p>
                        <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p>
                    </div>

                    <img src={rutCert} alt="Rutgers Certificate" width="50%" height="50%" />
                </section>

                </Container>                 
            </Row>
        </Container>
    )
}

export default Resume;