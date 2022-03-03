import React from 'react'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'


import './home.css'


import { Link } from 'react-router-dom'

const Home = () => {

    return(
        <>
            <h1> Página Inicial</h1>
            <ul>
                <li>
                    <Link to="/about"> About 1 </Link>
                </li>
            </ul>
            <Button variant="contained" >
                <Link to="/about"> About 2 </Link>
            </Button><br /><br />
            <Button> 
                <Link to="/about"> About 3 </Link>
            </Button><br /><br />
            <Button variant="outlined">
                Hello world!
            </Button><br /><br />
            <Button variant="contained" color="primary">
                Botão
            </Button><br /><br />
            <Button>Primary</Button><br /><br />
            <Button disabled>Disabled</Button><br /><br />
            <div className="operadores">
            <Fab color="secundary" aria-label="add">
                +
            </Fab>
            <Fab color="secundary" aria-label="add">
                -
            </Fab>
            </div>

        </>
    )
}


export default Home