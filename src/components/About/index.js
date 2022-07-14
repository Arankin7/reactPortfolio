import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function About() {

    const [open, setOpen] = useState(false);
    
    return (
        <section>
            <Button
                variant="light"
                onClick={() => setOpen(!open)}
                aria-controls="about-collapse"
                aria-expanded={open}
                >
                <h1>Who is Anthony Rankin?</h1>
            </ Button>
            <Collapse in={open}>
                <div id="about-collapse">
                    Anim pariatur cliche reprehindieret, enim, euismod, hight life accusamus
                    terry ad squid. Nilhil anim keffie helvitica, craft beer, labore.
                </div>
            </Collapse>
        </section>
    );
}

export default About;