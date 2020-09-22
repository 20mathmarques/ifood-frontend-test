"use strict";

//import axios from  'axios';
//const api = axios.create({
// baseURL:'http://www.mocky.io/v2/5a25fade2e0000213aa90776'  
// baseURL:'https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_BR',
// method:'GET',
// headers:{
// Authorization: `Bearer ${token}` 
// } 
//})
//export default api;

/*
import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js'
import Header from './Header';
import api from './api';



const spotifyApi = new SpotifyWebApi();

class App extends Component{
  constructor(props){
    super(props)
    const params = this.getHashParams();
    this.state = {
      loggedIn:params.access_token ? true : false,
      TopList:{
        name:"faça login",
        images:'[]'
      }
    }
      if(params.access_token){
          spotifyApi.setAccessToken(params.access_token)
      }
    }

    getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
      e = r.exec(q)
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q)
      }
      return hashParams;
     }

   TopList(){
    spotifyApi.getFeaturedPlaylists()
    .then((response) =>{
      this.setState({
        TopList:{
            name: response.playlists.items.map((t)=>{
              return t.name
              
            }),
            images: response.playlists.items.map((t)=>{
              return t.images
              
            }),

            //images:response.playlists.items[0].images[0].url
          }
      });
  })
}

/*TopList(){
  spotifyApi.getFeaturedPlaylists()
  .then(function(data){
    return data.playlists.items.map(function(t){
      return t.id
    })
  
  })
}*/
//PEGANDO DADOS DA API DE FILTROS

/* state = {
  filtros:[]
}

async componentDidMount(){
  const datas = await api.get('')
  
  this.setState({
    filtros: datas.data
  });
}
  */
{
  /**   render(){
  
     const {filtros} = this.state;
     return (
       <div>
         <Header/> 
           <div className="App-header">
             <li>
               <ul>List:{this.state.TopList.name}</ul>
             </li>
             <div>
               <img src={this.state.TopList.images} style={{width:300}}/>
               {console.log(this.state.TopList.images)}
             </div>
             { this.state.loggedIn &&
               <Button onClick={()=> this.TopList()} variant="contained" color="secondary">
                 Check List
               </Button>
             }
           </div>
       </div>
       );
     }
   }
  
  export default App;
  */
}