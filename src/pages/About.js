import React from 'react'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const About = () => {

    return(
        <>
            <h1> Sobre </h1>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
            </ul>
            <Button variant="contained" color="secundary">
                <Link to="/"> Home </Link>
            </Button>
        </>
    )
}


export default About



