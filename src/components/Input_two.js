import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

//Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


//Import Context
import { AppContext } from '../App'

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: '8px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
});


export default function Input_two() {

    const classes = useStyles();

    const {state, dispatch} = useContext(AppContext);

    const changeInputValue = (newValue) => {

        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    };

    return(
        <React.Fragment>
            <Grid item xs={12} md={6}>
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Input two"
                        value={state.inputText}
                        onChange={e => changeInputValue(e.target.value)}
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}


