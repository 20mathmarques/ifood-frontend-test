import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../DataLayer';

function Sidebar(){
    const[{playlists},dispatch] = useDataLayerValue();
//    console.log(playlists?.items)
  //  console.log(playlists.message)
   // console.log(playlists)
    return(
        <div className="Sidebar">
            <img src={require('../img/Spotify_Logo.png')} className="SidebarLogo"/>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Libary"/>
            <br/>
            <strong className="SidebarTitle">Playlists</strong>
            <hr/>
            
        </div>
)
}

export default Sidebar