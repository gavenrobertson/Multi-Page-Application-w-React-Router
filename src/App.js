import React from 'react'
import { Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import FlimsData from './data/films.json'
import PeopleData from './data/people.json'
import PlanetsData from './data/planets.json'
import './App.css'

const peopleData = require('./data/people.json')
const planetsData = require('./data/planets.json')
const filmsData = require('./data/films.json')

//used for troubleshooting


// function DisplayName(){
// const nameData = peopleData[1].name
//     return <h1>{nameData}</h1>

// }


const ofPeopleData = Object.keys(peopleData).map((key) => {
    return peopleData[key];
})

const ofPlanetsData = Object.keys(planetsData).map((key) => {
    return planetsData[key];
})




const ofFilmsData = Object.keys(filmsData).map((key) => {
    return filmsData[key];
})

const linkingPeople = ofPeopleData.map((nameOf, index) => {
    return {
        id: index,
        path: `/people/${nameOf.name}/${index}`,
        nameOf: nameOf.name,
    };

});

const linkingPlanets = ofPlanetsData.map((planetInfo, index) => {
    return {
        planetIndex: index,
        nameOfPlanet: planetInfo.name,
        pathing: `/planets/${planetInfo.name}/${index}` 
    };

});

const linkingFilms = ofFilmsData.map((filmsInfo, index) => {
    return{
        filmsIndex: index,
        nameOfFilm: filmsInfo.title,
        pathing2: `/films/${filmsInfo.title}/${index}`
    }
})


function Home() {
    return (
        <>
            <h1 className="welcomeForHome">Welcome to the Starwars API!</h1>
            <h1 className="welcomeForHome">Please Choose an Option in the Navbar!</h1>
        </>
    )

}

function People() {
    const people = {ofPeopleData}
    const people2 = {linkingPeople}
    // const ofPeople = Object.keys(peopleData)
    console.log(people)
    console.log(people2)
    return(
    <> 
    {linkingPeople.map((link) => {

        const { id, path, nameOf } = link;
        
        return (
            
            <>
            <Link className="peopleLinkItem" key={id} to={path}>
            {nameOf}
            </Link>
            <br></br>
            </>

            
        );

    })}
    </>
    )
    
}

function DisplayPeopleData() {
    // const personDataInfo = peopleName
    const { peopleIndex } = useParams()
    console.log(peopleIndex)
    return(
        <div className="peopleDataDiv">
            <h1>Name: {ofPeopleData[peopleIndex].name}</h1>
            <p>Height: {ofPeopleData[peopleIndex].height}</p>
            <p>Mass: {ofPeopleData[peopleIndex].mass}</p>
            <p>Hair Color: {ofPeopleData[peopleIndex].hair_color}</p>
            <p>Skin Color: {ofPeopleData[peopleIndex].skin_color}</p>
            <p>Eye Color: {ofPeopleData[peopleIndex].eye_color}</p>
            <p>Birth Year: {ofPeopleData[peopleIndex].birth_year}</p>
            <p>Gender: {ofPeopleData[peopleIndex].gender}</p>
            <p>Homeworld: {ofPeopleData[peopleIndex].homeworld}<br></br></p>
            <p>Films: {ofPeopleData[peopleIndex].films}</p>
            <p>URL: {ofPeopleData[peopleIndex].url}</p>
        </div>

    )
}

function Planets() {
    
    return (
        
        <>
        {linkingPlanets.map((plinks) => {
            const { planetIndex, nameOfPlanet, pathing } = plinks
            
            return(
                <>
                <Link className="planetLinkItem" key={planetIndex} to={pathing}>
                    {nameOfPlanet}
                </Link>
                <br></br>
                </>
            )
        })}
        </>
    )
    
}

function DisplayPlanetData() {
const { planetI } = useParams()
console.log(planetI)

return(
<div className="planetDataDiv">
<h1>Name: {ofPlanetsData[planetI].name}</h1>
<p>Rotation Period: {ofPlanetsData[planetI].rotation_period}</p>
<p>Orbital Period: {ofPlanetsData[planetI].orbital_period}</p>
<p>Diameter: {ofPlanetsData[planetI].diameter}</p>
<p>Climate: {ofPlanetsData[planetI].climate}</p>
<p>Gravity: {ofPlanetsData[planetI].gravity}</p>
<p>Terrain: {ofPlanetsData[planetI].terrain}</p>
<p>Surface Water: {ofPlanetsData[planetI].surface_water}</p>
<p>Population: {ofPlanetsData[planetI].population}</p>
<p>Residents: {ofPlanetsData[planetI].residents}</p>
<p>Films: {ofPlanetsData[planetI].films}</p>
<p>URL: {ofPlanetsData[planetI].url}</p>
</div>
)


}


function Flims() {

    return (
    <>
    {linkingFilms.map((filmLinks) => {
        const { filmsIndex, nameOfFilm, pathing2 } = filmLinks

        return(
            <>
            <Link className="filmLinkItem" key={filmsIndex} to={pathing2}>
                {nameOfFilm}
            </Link>
            <br></br>
            </>
        )

    })}
    </>
    )
}

function DisplayFilmData() {
const { filmDa } = useParams()
console.log(filmDa)

return(
<div className="filmDataDiv">
<h1>Title: {ofFilmsData[filmDa].title}</h1>
<p>Episode ID: {ofFilmsData[filmDa].episode_id}</p>
<p>Opening Crawl: {ofFilmsData[filmDa].opening_crawl}</p>
<p>Director: {ofFilmsData[filmDa].director}</p>
<p>Producer: {ofFilmsData[filmDa].producer}</p>
<p>Release Date: {ofFilmsData[filmDa].release_date}</p>
<p>Characters: {ofFilmsData[filmDa].characters}</p>
<p>Planets: {ofFilmsData[filmDa].planets}</p>
<p>URL: {ofFilmsData[filmDa].url}</p>
</div>
)
}

console.log("here is the people name===", ofPeopleData[1].name)

function App() {
    return (
        <div className='containerForNav'>
        <div className='websiteNavAndTitle'>
            <Link className="homeTitle" to="/home">Starwars</Link>
        
        <ul className='navLinkList'>
            <li className='navLinkItem'> <NavLink className="navLinkA" to="/people"> People </NavLink> </li>
            <li className='navLinkItem'> <NavLink className="navLinkA" to="/planets"> Planets </NavLink> </li>
            <li className='navLinkItem'> <NavLink className="navLinkA" to="/films"> Flims </NavLink> </li>
        </ul>
        </div>

            <Routes>
                <Route path="/home" element={ <Home/> } />

                <Route path="/people" element={ <People/> } />
                <Route path="/people/:peopleName/:peopleIndex" element={ <DisplayPeopleData/> } />
                
                <Route path="/planets" element={ <Planets/> } />
                <Route path="/planets/:planetName/:planetI" element={ <DisplayPlanetData/> } />


                <Route path="/films" element={ <Flims/> } />
                <Route path="/films/:filmName/:filmDa" element={ <DisplayFilmData/> }/>a
            </Routes>
        </div>
        

    )
}

export default App
