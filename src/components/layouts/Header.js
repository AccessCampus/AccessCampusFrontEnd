import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyles } from './layouts.styles';

const Header = () => {
    const header = HeaderStyles();
    return (
        <Grid container className={header.grid}>
            <Grid item xs={12} key={1} align={"center"} className={header.item}>
                <Link to="/">
                    <FontAwesomeIcon
                        path="/"
                        className={header.icon}
                        icon={faRoute}
                        color={"#FFFFFF"}
                        size={"3x"}
                        display={"inline"}
                    />
                </Link>
            </Grid>
        </Grid>
    );
}

export default Header;