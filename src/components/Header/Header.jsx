import react from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

const Header = () => {
    const classes=useStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" classesName={classes.Title}>
                    Pick-A-Place
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" classesName={classes.Title}>
                        Find Your Destination
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search" classes={{  root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>   
    );
}

export default Header;