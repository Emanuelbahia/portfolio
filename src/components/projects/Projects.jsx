import "./projects.css";

export default function Projects() {
  return (
    <div className="container-projects">
      <div className="div-project-left">
        <div className="description-left">
            <h3 className="h3-recipes">Recipes Food</h3>
            <p className="p-projects">
                In this page you can find recipes and dishes from different countries.
                Also you can write a word on the search bar and choose your favourite recipe.
            </p>    
            <ul className="ul-projects">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascrit</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links">
                <button className="button-link">Page</button>
                <button className="button-link">Github</button>
            </div>  
        </div>
        <img className="img-project" src="../../../public/recipes.jpg" />
      </div>
      <div className="div-project-right">
        <img className="img-project" src="../../../public/hotels.jpg" />
        <div className="description-right">
            <h3 className="h3-recipes">Your Hotel</h3>
            <p className="p-projects">
                Put the city, the date of travel, how many there are and choose your favourite hotel.
            </p>
            <ul className="ul-projects">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascrit</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links">
                <button className="button-link">Page</button>
                <button className="button-link">Github</button>
            </div> 
        </div>        
      </div>
      <div className="div-project">
        <div>
            <h3></h3>
            <p></p>
            <div></div>
        </div>
        <img src="" />
      </div>
      <div className="div-project">
        <div>
            <h3></h3>
            <p></p>
            <div></div>
        </div>
        <img src="" />
      </div>
      <div className="div-project">
        <div>
            <h3></h3>
            <p></p>
            <div></div>
        </div>
        <img src="" />
      </div>
    </div>
  )
}
