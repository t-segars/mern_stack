import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router'

const People = () => {
    const {index} = useParams()
    const [apiState, setApiState] = useState()
    const [planet, setPlanet] = useState()
    const [errMsg, setErrMsg] = useState()
    const [errImg, setErrImg] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${index}`)
        .then(response => {
            // console.log("SUCCESS", response.data)
            setApiState(response.data)
            getPlanet(response.data.homeworld)

        })
        .catch(err => {
            console.log("ERROR", err)
            setApiState("")
            setErrMsg("These are not the droids you're looking for...")
            setErrImg(`https://i.redd.it/6o6blcul5n841.jpg`)
        })
        }, [index])
    
    const getPlanet = (homeworld) =>{
        axios.get(homeworld)
        .then(response => {
            console.log("SUCCESS", response.data)
            setPlanet(response.data)
        })
        .catch(err => {console.log("ERROR", err)})
    }

    return (
        <div style={{textAlign: 'center'}}>
            {
            (apiState) ? 
            planet &&
                <div>
                    <h1>{apiState.name}</h1>
                    <p>Height: {apiState.height}</p>
                    <p>Mass: {apiState.mass}</p>
                    <p>Hair Color: {apiState.hair_color}</p>
                    <p>Skin Color: {apiState.skin_color}</p>
                    <p>Homeworld: {planet.name}</p>
                    <a href={apiState.homeworld}>{apiState.homeworld}</a>
                </div>
                :
                <p>
                <h1>{errMsg}</h1>
                <img src={errImg} alt="Obi-Wan" />
                </p>
            }
        </div>
    )
}
export default People