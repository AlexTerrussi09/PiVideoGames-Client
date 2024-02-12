import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import SearchBar from './SearchBar';
import VideoGame from './VideoGame';
import Pagination from './Pagination';
import './styles/Home.css'
import LoadingComponent from '../../loading/LoadingComponent';

const Videogames = props => {
    const { videogames } = useSelector(state => state);
    const [Cargando, setCargando] = useState(true)


    const [CurrentPage, setCurrentPage] = useState(1);
    const postPerPage = 15
    const lastPostIndex = CurrentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = videogames.length > 7 ? videogames.slice(firstPostIndex, lastPostIndex) : videogames


    useEffect(() => {
        videogames.length && setCargando(false)
    }, [videogames])
    return (
        <>
            {
                Cargando ?
                    <div className='containerHome' style={{ height: "100vh", marginTop: 0, display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <LoadingComponent />
                    </div>
                    :
                    <div className='ContainerTodo'>
                        <nav className='nav'><SearchBar setCargando={setCargando} /></nav>
                        {currentPost &&
                            <div className='containerHome'>
                                <div className='pagination'>
                                    <Pagination
                                        totalPosts={videogames.length}
                                        postPerPage={postPerPage}
                                        setCurrentPage={setCurrentPage}
                                        currentPage={CurrentPage}
                                    />
                                </div>
                                <div className='containerVideoGames'>
                                    {currentPost.length ?
                                        currentPost.map((vg, index) => {
                                            return (
                                                <VideoGame VideoGame={vg} key={index} />
                                            )
                                        })

                                        :
                                        <h3>No se encontro ningun videojuego</h3>}
                                </div>
                                <div className='pagination'>
                                    <Pagination
                                        totalPosts={videogames.length}
                                        postPerPage={postPerPage}
                                        setCurrentPage={setCurrentPage}
                                        currentPage={CurrentPage}
                                    />
                                </div>
                            </div>
                        }
                    </div>
            }
        </>
    )
}

export default Videogames