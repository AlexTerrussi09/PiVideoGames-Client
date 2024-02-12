import './App.css';
import { Route, Switch } from "react-router-dom";
import VideoGameDetail from './pages/videogameDetail.js/VideoGameDetail';
import CreateVideogame from './pages/createVideogame/CreateVideogame';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGenresApi } from './redux/Actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllGenresApi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='App-header'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/videogames' component={Home} />
        <Route path='/videogames/create' component={CreateVideogame} />
        <Route path='/videogames/:id' component={VideoGameDetail} />
      </Switch>
    </div>
  );
}

export default App;
