import React from 'react'
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar'
import TextField from '@material-ui/core/TextField';
import { useDataLayerValue } from '../DataLayer';

class SearchBar extends React.Component{

    render(){
        const[  {user,playlists,lists},dispatch] = useDataLayerValue();
    
        return(
            <div className="Header_left">
            <input
             type="text"
             type="text" onKeyUp={event => 
                this.onTextChange(event.target.value)}
                placeholder="Search"
            />
    
            <SearchIcon/>
        
        </div>


        )
    }

}

export default SearchBar;