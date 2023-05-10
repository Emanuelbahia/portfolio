import { SiCss3, SiGit, SiGithub, SiJavascript, SiReact, SiVisualstudiocode, SiHtml5 } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import "./skills.css";

export default function Skills() {

  return (
    <div className="container-skills">
        <div className="container-icon-name">
            <SiHtml5 className="icon-skill"/>
            <h3 className="h3-skill">HTML</h3>
        </div>
        <div className="container-icon-name">
            <SiCss3 className="icon-skill"/>
            <h3 className="h3-skill">CSS</h3>
        </div>
        <div className="container-icon-name">
            <SiJavascript className="icon-skill"/>
            <h3 className="h3-skill">JavaScript</h3>
        </div>
        <div className="container-icon-name">
            <SiReact className="icon-skill"/>
            <h3 className="h3-skill">React</h3>
        </div>
        <div className="container-icon-name">
            <SiGit className="icon-skill"/>
            <h3 className="h3-skill">Git</h3>
        </div>
        <div className="container-icon-name">
            <SiGithub className="icon-skill"/>
            <h3 className="h3-skill">Github</h3>
        </div>
        <div className="container-icon-name">
            <IoLogoSass className="icon-skill"/>
            <h3 className="h3-skill">SASS</h3>
        </div>
        <div className="container-icon-name">
            <SiVisualstudiocode className="icon-skill"/>
            <h3 className="h3-skill">VS Code</h3>
        </div>
      
    </div>
  )
}
