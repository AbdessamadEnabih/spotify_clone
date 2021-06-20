import './App.css';
import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { getTokenFromUrl } from './components/js/spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const _token = getTokenFromUrl().access_token;

    if(_token){ 
      setToken(_token);
      console.log(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }

  },[]);

  return (
    <div className="app">
      {
        token ? <Player/> : <Login />
      }
    </div>
  );
}

export default App;
