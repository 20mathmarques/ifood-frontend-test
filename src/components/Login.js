import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';

class Login extends Component{
  
  render(){
    return (
    <div className="Login">
        <img src={require('../img/Spotify_Logo.png')} /> 
        <a href='http://localhost:8888'>Logar com Spotfy</a>
    </div>
    );
  }
}

export default Login;
