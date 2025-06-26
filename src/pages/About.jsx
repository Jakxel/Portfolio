import React from "react";
import '../styles/pages.css'

const About = () => (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
        <h1>About Me</h1>
        <p>
            Hi! I'm a developer passionate about technology and creating innovative solutions.
            I specialize in web development using modern technologies like React, JavaScript, and Node.js.
        </p>
        <p>
            I enjoy constantly learning, collaborating on challenging projects, and sharing knowledge with the community.
            When I'm not coding, I like to explore new tools, read about technology, and contribute to open source projects.
        </p>
        <h2>Skills</h2>
        <ul>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>HTML5 / CSS3 / SASS</li>
            <li>Git & GitHub</li>
        </ul>
        <h2>Contact</h2>
        <p>
            You can contact me at <a href="mailto:youremail@example.com">youremail@example.com</a> or through my social networks.
        </p>
    </div>
);

export default About;
