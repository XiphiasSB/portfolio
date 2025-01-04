import { useState } from "react";
import "./Body.css";
import ProfileImage from "/profilbilde.png";
import ReactLogo from "../../assets/Logos/Programming/react-svgrepo-com.svg";
import JSLogo from "../../assets/Logos/Programming/javascript-16-svgrepo-com.svg";
import CSSLogo from "../../assets/Logos/Programming/css-svgrepo-com.svg";
import HTMLLogo from "../../assets/Logos/Programming/html-16-svgrepo-com.svg";
import UnrealLogo from "../../assets/Logos/Programming/unreal-engine-svgrepo-com.svg";
import GodotLogo from "../../assets/Logos/Programming/godot-svgrepo-com.svg";
import PythonLogo from "../../assets/Logos/Programming/python-127-svgrepo-com.svg";
import DatabaseLogo from "../../assets/Logos/Programming/database-svgrepo-com.svg";
import JiraLogo from "../../assets/Logos/Software/jira-svgrepo-com.svg";
import ExcelLogo from "../../assets/Logos/Software/excel-file-svgrepo-com.svg";
import ClickUpLogo from "../../assets/Logos/Software/clickup-svgrepo-com.svg";
import TypeScriptLogo from "../../assets/Logos/Programming/Typescript_logo_2020.svg";
import flag from "../../assets/flag.svg";

export function Body() {
    return (
        <section className="body-container">
            <div className="profile-section">
                <img src={ProfileImage} alt="Profile" className="profile-image" />
                <h1 className="profile-name">
                    C. Joakim Isaksen
                    <img src={flag} alt="Norwegian flag" className="flag" />
                </h1>
            </div>

            <div className="about-me-section">
                <p>
                I am developing my skills in front-end development while drawing on extensive experience in project management and programming. With a strong foundation in technical and team coordination, I aim to contribute to impactful projects in either capacity.
                </p>
            </div>
            <h2 className="skills-header">My Experience</h2>
            <div className="skills-section">
                <div className="skill-category">
                    <h2>Frontend</h2>
                    <div className="skill-icons">
                        <div className="skill-icon">
                            <img src={ReactLogo} alt="React" />
                            <div className="hovered-skill">React</div>
                        </div>
                        <div className="skill-icon">
                            <img src={TypeScriptLogo} alt="TypeScript" />
                            <div className="hovered-skill">TypeScript</div>
                        </div>
                        <div className="skill-icon">
                            <img src={JSLogo} alt="JavaScript" />
                            <div className="hovered-skill">JavaScript</div>
                        </div>
                        <div className="skill-icon">
                            <img src={CSSLogo} alt="CSS" />
                            <div className="hovered-skill">CSS</div>
                        </div>
                        <div className="skill-icon">
                            <img src={HTMLLogo} alt="HTML" />
                            <div className="hovered-skill">HTML</div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h2>Game Developer</h2>
                    <div className="skill-icons">
                        <div className="skill-icon">
                            <img src={UnrealLogo} alt="Unreal Engine" />
                            <div className="hovered-skill">Unreal Engine</div>
                        </div>
                        <div className="skill-icon">
                            <img src={GodotLogo} alt="Godot" />
                            <div className="hovered-skill">Godot</div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h2>Software</h2>
                    <div className="skill-icons">
                        <div className="skill-icon">
                            <img src={PythonLogo} alt="Python" />
                            <div className="hovered-skill">Python</div>
                        </div>
                        <div className="skill-icon">
                            <img src={DatabaseLogo} alt="SQL" />
                            <div className="hovered-skill">SQL</div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h2>Manager</h2>
                    <div className="skill-icons">
                        <div className="skill-icon">
                            <img src={JiraLogo} alt="Jira" />
                            <div className="hovered-skill">Jira</div>
                        </div>
                        <div className="skill-icon">
                            <img src={ClickUpLogo} alt="Click-Up" />
                            <div className="hovered-skill">Click-Up</div>
                        </div>
                        <div className="skill-icon">
                            <img src={ExcelLogo} alt="Excel" />
                            <div className="hovered-skill">Excel</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
