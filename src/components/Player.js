import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
function Player({spotify}){
  
    return (
    <div className="Plyer">
      <div className="Player-Body">
        <Sidebar/>
        <Body/>        
      {/**   <Footer/>*/}
      </div>
    </div>
    );
  }

export default Player;
