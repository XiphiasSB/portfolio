import "./header.css"
import LinkedInLogo from "../../assets/Logos/Socials/linkedin-svgrepo-com.svg"
import CopyIcon from "../../assets/Logos/Copy.svg"

export function Header() {
  const email = "Isaksen85@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    alert("Email copied to clipboard!")
  };

  return (
    <header className="header">
      <a
        href="https://www.linkedin.com/in/joakim-isaksen-94145a33/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
      </a>

      <div className="email-container">
        <span className="email-text">{email}</span>
        <button className="copy-button" onClick={copyToClipboard}>
          <img src={CopyIcon} alt="Copy to clipboard" className="copy-icon" />
        </button>
      </div>
    </header>
  );
}
