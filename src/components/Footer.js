import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer_left">
            <img
                className="Footer_albumLogo"
                //src={item?.album.images[0].url}
                //alt={item?.name}
                src={require('../img/food.jpg')}
                alt='Teste'
            />
                 
                <div className="Footer_songInfo">
                    <h4>teste</h4>
                    <p>tsteste</p>
                </div>
               
            </div>
            

            <div className="Footer_center">
                <ShuffleIcon className="Footer_red"/>
                <SkipPreviousIcon className="Footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="Footer_icon"/>
                <SkipNextIcon  className="Footer_icon"/>
                <RepeatIcon className="Footer_red"/>
            </div>

            <div className="Footer_right">
            <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
        </div>
    </div>
        
    )
}

export default Footer