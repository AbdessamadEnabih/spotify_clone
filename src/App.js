import './App.css';
import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { getTokenFromUrl } from './components/js/spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)
  
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getTokenFromUrl().access_token;

    if(_token){ 
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })

      });
    }

  },[dispatch]);

  console.log(user);

  return (
    <div className="app">
      {
        token ? <Player/> : <Login />
      }
    </div>
  );
}

export default App;
