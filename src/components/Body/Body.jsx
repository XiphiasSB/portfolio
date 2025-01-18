import { useState } from "react";
import "./Body.css";
import ProfileImage from "/profilbilde.png";
import logos from "../../Logos.js";
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
                {Object.entries(logos).map(([category, items]) => (
                    <div className="skill-category" key={category}>
                        <h2>{category}</h2>
                        <div className="skill-icons">
                            {items.map((logo, index) => (
                                <div className="skill-icon" key={index}>
                                    <img src={logo.img} alt={logo.alt} />
                                    <div className="hovered-skill">{logo.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
