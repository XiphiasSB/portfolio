import "./Project.css";

export function Project({ title, image, websiteLink, platformLink, descriptions, icon }) {
  return (
    <div className="project-card">

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <a
          href={websiteLink}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          {websiteLink}
        </a>
        <ul className="project-descriptions">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        {icon && platformLink && (
          <a
            href={platformLink}
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <img src={icon} alt={`${title} icon`} className="project-icon" />
          </a>
        )}
      </div>

      <img src={image} alt={`${title} project`} className="project-image" />
    </div>
  );
}
