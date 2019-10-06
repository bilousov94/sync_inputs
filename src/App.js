import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Import immutability-helper
import update from 'immutability-helper';

//Material UI components
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

//Import our Inputs
import Input_one from './components/Input_one';
import Input_two from './components/Input_two';

//Styles
const useStyles = makeStyles({
    toolbarTitle: {
        flex: 1,
    },
});

// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const initialState = {

    inputText: '',
    testText: 'Hello world'

};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return update(state, { inputText: {$set: action.data}});


        default:
            return initialState;
    }
}

function App() {

    const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container maxWidth="lg">
            <CssBaseline />

            {/*Title*/}
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Pass data between react sibling components
                </Typography>
            </Toolbar>

            {/*Inputs*/}
            <Grid container spacing={1}>
                <AppContext.Provider value={{ state, dispatch }}>
                    <Input_one/>
                    <Input_two/>
                </AppContext.Provider>
            </Grid>

            {/*display testText value*/}
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {state.testText}
                </Typography>
            </Toolbar>
        </Container>
    );
}

export default App;
