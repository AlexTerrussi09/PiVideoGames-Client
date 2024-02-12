import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllVideogamesDb } from '../../redux/Actions';
import Videogames from './components/Videogames';


const Home = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllVideogamesDb())
    }, [dispatch])
    return (
        <Videogames />
    )
}

export default Home