import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import fotoPerfil from "../../../public/images/foto perfil.jpg"
import "./body.css";

/* al section le pongo el id para relacionarlo con scroll smooth */
export default function Body() {

  return (
    <div className='main'>
      <div className="h1">
        <h3 className="h3-name">Hello, my name is </h3>
        <h1 className="h1-name">Emanuel Azcona</h1>
        <h2 className="h2-name">I&apos;m Frontend Developer.</h2>
        <p className="p-name">I&apos;m a person who likes to work in a team and <br/> I always open to new ideas and opinions. <br/> I like to create things with code, from small websites <br/> to complex web applications.</p>
      </div>
      <section className="main-section about-section" id="about">
        <h2 className="main-h2"><span className="main-span">01.</span>About</h2>
        <div className="about-p-img">
          <p className="p-about">Hi, my name is Emanuel and I love traveling, trekking and sports. <br/> My interest in web development started a few years ago.
            Now I enjoy creating attractive and innovative designs to make user interaction easier and the experience pleasant. <br/>
            I like to continue learning new technologies and tools to be able to solve problems and exchange ideas with the team because it&apos;s essential in this changing and evolitionary world.
          </p>
          <img className="img-about" src={ fotoPerfil } />
        </div>
      </section>    
      <section className="main-section" id="skills">
        <h2 className="main-h2"><span className="main-span">02.</span>Skills and Tools</h2>
        <Skills/>
      </section>    
      <section className="main-section" id="projects">
        <h2 className="main-h2"><span className="main-span">03.</span>Projects</h2>
        <Projects/>
      </section> 
      <section className="main-section" id="contact">
        <h2 className="main-h2"><span className="main-span">04.</span>Contact</h2>
        <Contact/>
      </section>       
    </div>
  )
}
