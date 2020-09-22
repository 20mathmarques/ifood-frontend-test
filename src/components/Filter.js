import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


import api from './api';

class Filter extends Component {

  state = {
    filters: {
        locale:[],
        country:[],
        timestamp:null,
        limit:null
    },
  }
  
  async componentDidMount() {
    const response = await api.get('');

    this.setState({ filters: response.data });
  }

  
  render() {

    const { filters } = this.state;
    console.log(filters)
    return (
      <div>
          <form style={{backgroundColor:'white'}} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className=""
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
     
      </div>
    );
  };
};

export default Filter;