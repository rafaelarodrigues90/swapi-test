import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    state = {
        planets: [],
    }

    componentDidMount() {
        this.loadPlanets();
    }

    loadPlanets = async () => {
        const response = await api.get('/planets')

        this.setState({ planets: response.data.results })
    }

    render() {
        const { planets } = this.state

        const index = planets[Math.floor(Math.random() * planets.length)]

        return (
            <div className="planet-list">
                { planets.map(planet => (
                    <article>
                        <strong>{index.name}</strong>
                            <p>Population: {index.population}</p>
                            <p>Climate: {index.climate}</p>
                            <p>Terrain: {index.terrain}</p>
                            <p>{index.films}</p>
                    </article>
                ))}
            </div>
        )
    }
}