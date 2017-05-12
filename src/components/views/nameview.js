import React from 'react';
import AppBar from 'material-ui/AppBar';
import ChartView from './chartview'
import {GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Password" onClick={props.events} />
    </IconMenu>
);
Logged.muiName = 'IconMenu';

const NameView =(props)=>{
    return(
        <div>
            <AppBar title="Home"

                    iconElementRight={  <Logged events={props.handleChange}/>}

            />
            <GridList
                cols={1}
                cellHeight={200}
                padding={1}>
                <div className="maindiv">
                    NAME
                </div>
            </GridList>
            <GridList
                cols={1}
                cellHeight={200}
                padding={1}>
                <div className="">
                    <ChartView/>
                    </div>
            </GridList>

        </div>
    )
}

export default NameView