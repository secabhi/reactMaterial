import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


injectTapEventPlugin();

const PasswordView = (props)=>{
    return(
        <div>
            <AppBar title="Password"
                    iconElementLeft={<IconButton><NavigationArrowBack onClick={props.goToPrevious} /></IconButton>}
            />
            <GridList
                cols={1}
                cellHeight={200}
                padding={1}>
                <div className="maindiv" style={{marginTop: '70px'}}>
                    <TextField
                        hintText="Password"
                        errorText={props.data.text1error}
                        defaultValue={props.data.text1val}
                        onChange={(e)=>{props.event(e,'initial')}}
                    /></div>
            </GridList>
            <GridList
                cols={1}
                cellHeight={200}
                padding={1}>
                <div className="maindiv">
                    <TextField
                        hintText="ConfirmPassword"
                        errorText={props.data.text2error}
                        defaultValue={props.data.text2val}
                        onChange={(e)=>{props.event(e,'confirm')}}
                    /></div>
            </GridList>
            <div className="maindiv" style={{marginTop: '-110px'}}>
                <RaisedButton label="primary" primary={true} onClick={props.validate} />
            </div>
        </div>
    )
}

export default PasswordView;