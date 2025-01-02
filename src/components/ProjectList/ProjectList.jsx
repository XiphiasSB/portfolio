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

export function ProjectList() {
    const projects = [
        {
          title: "Princess Kanban",
          websiteLink: "https://princess-kanban.web.app/",
          platformLink: "https://github.com/XiphiasSB/todo-list",
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
          title: "Algebra Learner",
          websiteLink: "https://algebralearner.com/",
          platformLink: "https://www.youtube.com/watch?v=OnIw7GIxvys",
          image: AL,
          descriptions: [
            "Made by me with help from others part-time over a 2 year period",
            "An interactive algebra learning game.", 
            "Made in Godot 3.5 with GDScript (similar to Python)", 
            "Exported to iOS and Android.",
            "Over 10,000 downloads on mobile.",
            "About 90 scripts and 10,000 lines of code",
            "GitHub is private, but feel free to request access when contacting me."
          ],
          icon: YoutubeIcon
        },
        {
          title: "Immortal: Gates of Pyre",
          websiteLink: "https://sunspeargames.com/",
          platformLink: "https://store.steampowered.com/app/2921580/IMMORTAL_Gates_of_Pyre/",
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
          title: "My Movie Rankings",
          websiteLink: "https://my-movies-2d93b.web.app/",
          platformLink: "https://github.com/XiphiasSB/my-movies",
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
            image: RubikCube,
            descriptions: [
              "My Master's Thesis from University of Oslo", 
              "The thesis concluded my Masters in Mathematics", 
              "I proved that the Rubik's cube group can be realized as a semi-direct product.",
            ],
          },
      ];

  return (
    <section className="project-list">
      <h2 className="project-list-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
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
  );
}
