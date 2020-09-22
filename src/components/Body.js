import React from 'react'
import './Body.css';
import Header from './Header'
import { useDataLayerValue} from '../DataLayer'

function Body({spotify}){
const[{playlists},dispatch] = useDataLayerValue();

    return(
    <div className="Body">
     <Header spotify={spotify}/>
     
      <div className="Body_info">    
      {playlists.playlists?.items?.map((playlist)=> ( 
        <div className="Body_infoText">
         <img 
          src={playlist.images[0].url}
          alt=""
          className="Album"        
         ></img>
        {console.log(playlist.external_urls)}
       {/**    <strong>{playlist.name}</strong>*/}
          <h2>{playlist.name}</h2>
          <p>{playlist.description}</p>
              
        
        </div>
      ))}
      </div>
        
      </div>
    )
}

export default Body;