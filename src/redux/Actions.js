export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_GENRES_DETAILS = "GET_GENRES_DETAILS";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const CLEAR_VIDEOGAME = "CLEAR_VIDEOGAME";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const UPDATE_VIDEOGAME = "UPDATE_VIDEOGAME";

export const FILTER = "FILTER";
const URL_SERVER = process.env.URL_SERVER || "http://localhost:3001/";



export const getAllVideogamesDb = () => {
    console.log(process.env)
    return async dispatch => {
        const result = await fetch(`${URL_SERVER}videogames`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
        const data = await result.json()
        return dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: data
        })
    }
};
export const postVideogameDb = (obj) => {
    return async dispatch => {
        let url = `${URL_SERVER}videogames`;
        let method = 'POST';
        let body = JSON.stringify(obj);
        let headers = { 'Content-Type': 'application/json' }
        let result = await fetch(url, { method, body, headers })
        let data = await result.json()
        if (data !== null) {
            alert("Videojuego creado")
        } else {
            alert("Error al crear el Videojuego")
        }
        return dispatch({
            type: CREATE_VIDEOGAME,
            payload: data
        })
    }
}

export const buscarJuegos = (query) => {
    return async dispatch => {
        const result = await fetch(`${URL_SERVER}videogames?name=${query}`)
        const data = await result.json();
        return dispatch({
            type: SEARCH_VIDEOGAMES, payload: data
        })
    }
}
export const resetVgDetail = () => (dispatch) => {
    return dispatch({ type: CLEAR_VIDEOGAME, payload: {} })
}
export const getAllGenresApi = () => {
    return async dispatch => {
        const result = await fetch(`${URL_SERVER}genres`)
        const data = await result.json()
        return dispatch({
            type: GET_ALL_GENRES,
            payload: data
        })
    }
};
export const getAllPlatformsApi = () => {
    return async dispatch => {
        const result = await fetch(`${URL_SERVER}platforms`)
        const data = await result.json()
        return dispatch({
            type: GET_ALL_PLATFORMS,
            payload: data
        })
    }
};

export const getVideogameDetail = (id) => {
    return async dispatch => {
        const result = await fetch(`${URL_SERVER}videogames/${id}`)
        const data = await result.json()
        return dispatch({
            type: GET_VIDEOGAME_DETAILS,
            payload: data
        })
    }
};
export const filtrar = (arr) => {
    return async dispatch => {
        return dispatch({ type: FILTER, payload: arr })
    }
}
export const deleteVideogame = (id) => {
    return async dispatch => {
        let url = `${URL_SERVER}videogames/${id}`;
        let method = 'DELETE';
        let headers = { 'Content-Type': 'application/json' }
        let result = await fetch(url, { method, headers })
        let data = await result.json()
        return dispatch({ type: DELETE_VIDEOGAME, payload: data.id })
    }
}
export const actualizarVideogame = (obj) => {
    return async dispatch => {
        let url = `${URL_SERVER}videogames`;
        let method = 'PUT';
        let body = JSON.stringify(obj);
        let headers = { 'Content-Type': 'application/json' }
        let result = await fetch(url, { method, body, headers })
        let data = await result.json()
        if (data !== null) {
            alert("Videojuego Actualizado")
        } else {
            alert("Error al actualizar el Videojuego")
        }
        return dispatch({
            type: UPDATE_VIDEOGAME,
            payload: data
        })
    }
}
