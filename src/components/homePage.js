import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { hashHistory } from 'react-router'

import NameView from './views/nameview'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



class HomePage extends React.Component{
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);

    }



    handleChange(){
        hashHistory.push('/password');
    }

    render(){
        return(

            <MuiThemeProvider>
                <NameView handleChange={this.handleChange}/>
            </MuiThemeProvider>

        )
    }
}

export default HomePage;