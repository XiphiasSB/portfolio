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
                I dive into new challenges headfirst and build structure along the way.
                <br />
                Whether it's design, development, or coordination, I get up to speed quickly and make things happen — especially in high-paced teams.
            </p>
        </div>
            
            <h2 className="skills-header">My Experience</h2>
                <div className="skills-section">
                    {logos.map((obj) => (
                        <div className="skill-category" key={obj.category}>
                            <h2>{obj.category}</h2>
                            <div className="skill-icons">
                                {obj.items.map((item, index) => (
                                    <div className="skill-icon" key={index}>
                                        <img src={item.img} alt={item.alt} />
                                        <div className="hovered-skill">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
}
