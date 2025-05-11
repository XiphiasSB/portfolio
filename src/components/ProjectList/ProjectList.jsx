import { useState } from "react"
import "./ProjectList.css"
import { Project } from "../ProjectComponent/Project"
import GitHubIcon from "../../assets/Logos/Socials/github-svgrepo-com.svg"
import SteamIcon from "../../assets/Logos/Software/8547091_steam_icon.svg"
import YoutubeIcon from "../../assets/Logos/Youtube.png"
import KanbanImage from "/kanban.jpg"
import AL from "/AL.jpg"
import ImmortalImage from "/Immortal.jpg"
import MovieImage from "/MyMovieRanking.jpg"
import RubikCube from "/Rubik.jpg"
import ONTRACC from "/ONTRACC.png"
import hom from "/hom.png"
import UtahHomeUpgrades from "/UtahHomeUpgrades.png"

export function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("Project Management")

  const categories = ["Project Management", "Programming", "Game Design"]

  const projects = [
    {
      title: "Algebra Learner",
      websiteLink: "https://algebralearner.com/",
      platformLink: "https://youtu.be/3ask4qOpH0Y",
      category: ["Programming", "Game Design"],
      image: AL,
      descriptions: [
        "Developed part-time since 2022",
        "An interactive algebra learning game.",
        "Made in Godot 3.5 with GDScript (similar to Python)",
        "Exported to iOS and Android.",
        "Over 10,000 downloads on mobile.",
        "About 90 scripts and 10,000 lines of code",
        "Click Youtube video for a presentation of the app."
      ],
      icon: YoutubeIcon
    },
    {
      title: "Utah Home Upgrades",
      websiteLink: "https://utahhomeupgrades.com/",
      platformLink: "",
      category: ["Programming"],
      image: UtahHomeUpgrades,
      descriptions: [
        "Developed a website for a home renovation company in Utah",
        "Focus on SEO and user experience",
        "Sanity CMS for content management",
        "Made in Next.js with TypeScript",
      ],
    },
    {
      title: "ONTRACC",
      websiteLink: "https://apps.apple.com/us/app/ontracc/id6499507546",
      platformLink: "https://github.com/XiphiasSB/todo-list",
      category: ["Programming"],
      image: ONTRACC,
      descriptions: [
        "Tracks daily habits and goals while monitoring progress over time.",
        "Developed with React and Next.js, integrated with Capacitor for native functionality, and written in TypeScript.",
        "Utilizes Firebase for backend services and Twilio for email communication.",
        "Includes log-in functionality, progress tracking, and a leaderboard for friendly competition.",
        "Push notifications keep users on track with their habits and goals",
        "Includes a leaderboard where users can compete with peers, fostering motivation and accountability",
      ],
    },
    {
      title: "Immortal: Gates of Pyre",
      websiteLink: "https://sunspeargames.com/",
      platformLink: "https://store.steampowered.com/app/2921580/IMMORTAL_Gates_of_Pyre/",
      category: ["Game Design", "Project Management"],
      image: ImmortalImage,
      descriptions: [
        "Next-gen RTS game, built in Unreal Engine 5",
        "I worked as Player vs Player (PvP) Design Lead on this project",
        "Used Blueprint and some C++ for code implementation (Frontend)",
        "Coordinated between Design, Tech, Art and Narrative",
        "Game is still in development",
      ],
      icon: SteamIcon,
    },
    {
      title: "House of Math",
      websiteLink: "https://www.houseofmath.com/",
      platformLink: "",
      category: ["Project Management"],
      image: hom,
      descriptions: [
        "Ed-tech company that provides online math tutoring and resources",
        "Responsible for all math content, including animated videos and exercises.",
        "Planned out the curriculum.",
        "Set up workflows for content creation in click-up.",
        "Coordinated between Content, Animation, Tech and Marketing teams.",
      ],
    },
    {
      title: "Princess Kanban",
      websiteLink: "https://princess-kanban.web.app/",
      platformLink: "https://github.com/XiphiasSB/todo-list",
      category: ["Programming"],
      image: KanbanImage,
      descriptions: [
        "Made by me as a test project in React",
        "A fun task-managing tool for your royal duties!",
        "Added touch compatibility for mobile users",
        "Functionality for local storage so your tasks are remembered each time you open the website"
      ],
      icon: GitHubIcon,
    },
    {
      title: "My Movie Rankings",
      websiteLink: "https://my-movies-2d93b.web.app/",
      platformLink: "https://github.com/XiphiasSB/my-movies",
      category: ["Programming"],
      image: MovieImage,
      descriptions: [
        "All movies I have ever ranked on IMDb",
        "Made by me as a test project to practice handling CSV files",
        "Movie posters parsed through an API",
        "Made with React 19",
      ],
      icon: GitHubIcon,
    },
    {
      title: "Master Thesis in Abstract Algebra",
      websiteLink: "https://www.duo.uio.no/bitstream/handle/10852/10881/MasterthesisCarlJoakimIsaksen.pdf?sequence=2&isAllowed=y",
      platformLink: "https://github.com/XiphiasSB/my-movies",
      category: ["Game Design"],
      image: RubikCube,
      descriptions: [
        "My Master's Thesis from University of Oslo",
        "The thesis concluded my Masters in Mathematics",
        "I proved that the Rubik's cube group can be realized as a semi-direct product.",
      ],
    },
  ]

  const filteredProjects = projects.filter(project =>
    project.category?.includes(selectedCategory)
  )

  return (
    <section className="project-list">
     <h2 className="project-list-title">My Projects</h2>
      <div className="projects-container">
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-tab ${selectedCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            websiteLink={project.websiteLink}
            platformLink={project.platformLink}
            descriptions={project.descriptions}
            icon={project.icon}
          />
        ))}
      </div>
    </section>
  )
}
