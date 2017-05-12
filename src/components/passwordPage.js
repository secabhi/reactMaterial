import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { hashHistory } from 'react-router'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import PasswordView from './views/passwordView';


class PasswordPage extends React.Component{
    constructor(){
        super()
        this.state = {
            text1val:'',
            text1error:'',
            text2val:'',
            text2error:''
        }
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.validate = this.validate.bind(this);
        this.textchanged = this.textchanged.bind(this);
    }
    validate(){
        debugger;
        if(this.state.text1val != this.state.text2val){
            this.setState({text1error:"Password doen't match"})
            this.setState({text2error:"Password doen't match"})
        }else {
            this.setState({text1error:""})
            this.setState({text2error:""})
        }
        if(this.state.text1val == '')
            this.setState({text1error:"! Field is required"})
        if(this.state.text2val == '')
            this.setState({text2error:"! Field is required"})

    }

    textchanged(e,from){
        debugger;
        if(from == 'initial')
            this.setState({text1val:e.target.value})
        else if(from == 'confirm'){
            this.setState({text2val:e.target.value})
        }
    }

    gotoPrevious(){
        hashHistory.push('/');
    }


    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <PasswordView data={this.state} goToPrevious={this.gotoPrevious} event={this.textchanged} validate={this.validate}/>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default PasswordPage;