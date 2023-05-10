import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./aside.css";

export default function Aside() {
  return (
    <div className="aside">
        <div className="wraper-icons"> 
          <Link to="https://github.com/Emanuelbahia">
            <BsGithub className="icon-aside icon-git"/>
          </Link>
          <Link to="https://www.linkedin.com/in/emanuel-azcona/">
            <BsLinkedin className="icon-aside icon-link"/>
          </Link>
          <Link to="https://www.instagram.com/emanuel_azcona/">
            <BsInstagram className="icon-aside icon-inst"/>
          </Link>
        </div>
        <div className="line-aside"></div>
    </div>
  )
}
