import NextJSLogo from "./assets/Logos/Programming/nextjs-icon.svg";
import TailwindLogo from "./assets/Logos/Programming/tailwind-svgrepo-com.svg";
import ReactLogo from "./assets/Logos/Programming/react-svgrepo-com.svg";
import JavaScriptLogo from "./assets/Logos/Programming/javascript-16-svgrepo-com.svg";
import CSSLogo from "./assets/Logos/Programming/css-svgrepo-com.svg";
import HTMLLogo from "./assets/Logos/Programming/html-16-svgrepo-com.svg";
import UnrealEngineLogo from "./assets/Logos/Programming/unreal-engine-svgrepo-com.svg";
import GodotLogo from "./assets/Logos/Programming/godot-svgrepo-com.svg";
import PythonLogo from "./assets/Logos/Programming/python-127-svgrepo-com.svg";
import DatabaseLogo from "./assets/Logos/Programming/database-svgrepo-com.svg";
import JiraLogo from "./assets/Logos/Software/jira-svgrepo-com.svg";
import ClickUpLogo from "./assets/Logos/Software/clickup-svgrepo-com.svg";
import ExcelLogo from "./assets/Logos/Software/excel-file-svgrepo-com.svg";
import CodecksLogo from "./assets/Logos/Software/codecks-icon-256.svg";

const logos = [
  {
    category: "Frontend",
    items: [
      { img: NextJSLogo, alt: "NextJS Logo", name: "NextJS" },
      { img: TailwindLogo, alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
      { img: ReactLogo, alt: "React Logo", name: "React" },
      { img: JavaScriptLogo, alt: "JavaScript Logo", name: "JavaScript" },
      { img: CSSLogo, alt: "CSS Logo", name: "CSS" },
      { img: HTMLLogo, alt: "HTML Logo", name: "HTML" },
    ],
  },
  {
    category: "Game Developer",
    items: [
      { img: UnrealEngineLogo, alt: "Unreal Engine Logo", name: "Unreal Engine" },
      { img: GodotLogo, alt: "Godot Logo", name: "Godot" },
    ],
  },
  {
    category: "Software",
    items: [
      { img: PythonLogo, alt: "Python Logo", name: "Python" },
      { img: DatabaseLogo, alt: "Database Logo", name: "Database" },
    ],
  },
  {
    category: "Manager",
    items: [
      { img: JiraLogo, alt: "Jira Logo", name: "Jira" },
      { img: ClickUpLogo, alt: "ClickUp Logo", name: "ClickUp" },
      { img: ExcelLogo, alt: "Excel Logo", name: "Excel" },
      { img: CodecksLogo, alt: "Codecks Logo", name: "Codecks" },
    ],
  },
];


export default logos;
