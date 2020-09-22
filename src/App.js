import React ,{Component, useEffect,useState} from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login';
import Player from './components/Player';
import {useDataLayerValue} from './DataLayer';
import {getTokenFromResponse} from './spotiy'

const spotifyApi = new SpotifyWebApi();

function App (){
    const[{user, token}, dispatch] = useDataLayerValue();

    useEffect(()=>{
      const hash = getTokenFromResponse()
      window.location.hash ="";
      const _token = hash.access_token;
  
      if(_token){
        spotifyApi.setAccessToken(_token)

        dispatch({
          type:'SET_TOKEN',
          token:_token
        });

        
        spotifyApi.getMe().then((user)=>{  
          dispatch({
            type:'SET_USER',
            user:user,
          });
        });
        spotifyApi.getFeaturedPlaylists().then((playlists)=>{
          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists,
          });
        });
        spotifyApi.getPlaylist().then((musics)=>{
          dispatch({
            type:'SET_MUSICS',
            playlists:musics
          })
        });
        spotifyApi.searchPlaylists().then((lists)=>{
          dispatch({
            type:'SET_LISTS',
            lists:lists
          })
          

        console.log(lists)
        });
        console.log("TOKEN:",token)
      }
    
    }, []);

    return (
      <div>
          <div className="App-header">
            {token ? (
             
             <Player spotifyApi={spotifyApi}/>
            ):(
              <Login/>
            )}
          </div>
     </div>
      );
      
    }

export default App;

