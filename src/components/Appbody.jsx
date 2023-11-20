import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Appbody = (props) => {

    const content = (name) => {
        switch (name) {
            case "Home":
                return <Home />;
            case "About Me":
                return <AboutMe />
            case "Projects":
                return <Projects />
            case "Contact":
                return <Contact />
        }
    };

    return (
        <>
            {content(props.name)}
        </>
    );
}

export default Appbody;
