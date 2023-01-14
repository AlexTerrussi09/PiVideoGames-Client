import { 
  GET_ALL_VIDEOGAMES, 
  GET_VIDEOGAME_DETAILS, 
  CREATE_VIDEOGAME, 
  DELETE_VIDEOGAME, 
  GET_ALL_GENRES, 
  GET_ALL_PLATFORMS,
  GET_GENRES_DETAILS ,
  SEARCH_VIDEOGAMES,
  CLEAR_VIDEOGAME,
  FILTER,
  UPDATE_VIDEOGAME
} from "./Actions";


const initialState = {
  videogames: [],
  videogameDetail: {},
  genres : [],
  genresDetail : {},
  platforms : []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_ALL_VIDEOGAMES:
      return {
        ...state, videogames: action.payload,
      }
    case GET_VIDEOGAME_DETAILS: 
      return {
        ...state, videogameDetail: action.payload
      }
    case GET_ALL_GENRES:
      return {
        ...state, genres: action.payload
      }
    case GET_ALL_PLATFORMS:
    return {
      ...state, platforms: action.payload
    }
    case GET_GENRES_DETAILS: 
    return {
      ...state, genresDetail: action.payload
    }
    case SEARCH_VIDEOGAMES:
      return {
        ...state, videogames: [...action.payload]
      } 
    case CREATE_VIDEOGAME:
      return {
        ...state, videogames: [...state.videogames, action.payload]
      }  
    case DELETE_VIDEOGAME:
      return {
        ...state, videogames: state.videogames.filter( mv => mv.id !== action.payload)
      }
    case FILTER:
      return {
          ...state, videogames: action.payload
      }
    case CLEAR_VIDEOGAME:
      return {
        ...state, videogameDetail: action.payload
      }  
    case UPDATE_VIDEOGAME:
      return {
        ...state, videogames: [...state.videogames, action.payload]
      }  
    default: return state;

  
  }
};

export default rootReducer;
