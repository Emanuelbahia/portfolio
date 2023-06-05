import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import recipes from "../../../public/images/recipes.jpg";
import hotel from "../../../public/images/hotels.jpg";
import plant from "../../../public/images/apiplant.jpg";
import beauty from "../../../public/images/api beauty.jpg";
import weather from "../../../public/images/api weather.jpg";
import "./projects.css";

export default function Projects() {
  return (
    <div className="container-projects">
      <div className="div-project-left">      
        <div className="description-left">
            <h3 className="h3-recipes">Recipes Food</h3>
            <Link to="https://foodapirecipes.netlify.app/">
              <img className="img-project none-pc" src={ recipes } />
            </Link>
            <p className="p-projects p-left">
            This project is a food recipe application developed with javascript and react.
            You can find a wide variety of traditional recipes from different countries, allowing you to explore and enjoy the global culinary diversity.
            In the search bar you can put an ingredient and look for different recipes with that ingredient.
            </p>    
            <ul className="ul-projects ul-left">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascript</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links links-left">
                <Link to="https://github.com/Emanuelbahia/recipes"><BsGithub className="github-project"/></Link>
                <Link to="https://foodapirecipes.netlify.app/"><BsBoxArrowUpRight className="arrow-project"/></Link>
            </div>  
        </div>
        <Link to="https://foodapirecipes.netlify.app/" >
          <img className="img-project none-cel" src={ recipes } /> 
        </Link>
      </div>
      <div className="div-project-right">
        <h3 className="h3-recipes none-pc">Your Hotel</h3>
        <Link to="https://emanuelbahia.github.io/">
          <img className="img-project" src={ hotel }/>
        </Link>
        <div className="description-right">
            <h3 className="h3-recipes none-cel">Your Hotel</h3>
            <p className="p-projects p-right">
              This project is a hotel search application developed with javascript and react.
              It&apos;s used to find hotel rooms by location, dates and number of occupants.
              You can see room details including images, services and rates.
            </p>
            <ul className="ul-projects ul-right">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascript</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links links-right">
                <Link to="https://github.com/Emanuelbahia/emanuelbahia.github.io"><BsGithub className="github-project"/></Link>
                <Link to="https://emanuelbahia.github.io/"><BsBoxArrowUpRight className="arrow-project"/></Link>
            </div> 
        </div>        
      </div>
      <div className="div-project-left">
        <div className="description-left">
            <h3 className="h3-recipes">Plants for the soul</h3>
            <Link to="https://plantsforthesoul.netlify.app/">
              <img className="img-project none-pc" src={ plant } />
            </Link>
            <p className="p-projects p-left">
            Is an application that offers a wide selection of indoor plants to beautify and purify homes developed with javascript and react.
            This platform provides nature lovers with a comfortable and accessible shopping experience from the comfort of their home, 
            and a quick and easy search for plants by name, category, size and required care.
            </p>    
            <ul className="ul-projects ul-left">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascript</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links links-left">
                <Link to="https://github.com/Emanuelbahia/ApiPlants"><BsGithub className="github-project"/></Link>
                <Link to="https://plantsforthesoul.netlify.app/"><BsBoxArrowUpRight className="arrow-project"/></Link>
            </div>  
        </div>
        <Link to="https://plantsforthesoul.netlify.app/">
          <img className="img-project none-cel" src={ plant } />
        </Link>
      </div>
      <div className="div-project-right">
        <h3 className="h3-recipes none-pc">Api beauty</h3>
        <Link to="https://apibeauty.netlify.app/">
          <img className="img-project" src={ beauty } />
        </Link>
        <div className="description-right">
            <h3 className="h3-recipes none-cel">Api beauty</h3>
            <p className="p-projects p-right">
              This is an online clothing and cosmetics store developed with JavaScript and React. 
              Our platform offers a wide variety of fashion apparel and beauty products for men and women, allowing users to browse and shop for the items that suit their style and preferences.
              Shopping cart to select and manage the chosen products before making the payment.
            </p>
            <ul className="ul-projects ul-right">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascript</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links ul-right">
                <Link to="https://github.com/Emanuelbahia/apibeauty"><BsGithub className="github-project"/></Link>
                <Link to="https://apibeauty.netlify.app/"><BsBoxArrowUpRight className="arrow-project"/></Link>
            </div> 
        </div> 
      </div>  
        <div className="div-project-left">
        <div className="description-left">
            <h3 className="h3-recipes">Weather now</h3>
            <Link to="https://appiweather.netlify.app/">
              <img className="img-project none-pc" src={ weather } />
            </Link>
            <p className="p-projects p-left">
              Is a web application developed with JavaScript and React that provides accurate weather forecast information for any city on the planet. 
              With an intuitive and easy-to-use interface, users can get up-to-date weather data and details on weather conditions in real time.
            </p>    
            <ul className="ul-projects ul-left">
                <li className="li-projects">HTML</li>
                <li className="li-projects">CSS</li>
                <li className="li-projects">Javascript</li>
                <li className="li-projects">React</li>
            </ul>
            <div className="wraper-links links-left">
                <Link to="https://github.com/Emanuelbahia/ApiWeather"><BsGithub className="github-project"/></Link>
                <Link to="https://appiweather.netlify.app/"><BsBoxArrowUpRight className="arrow-project"/></Link>
            </div>  
        </div>
        <Link to="https://appiweather.netlify.app/">
          <img className="img-project none-cel" src={ weather } />
        </Link>
      </div>
    </div>
  )
}
