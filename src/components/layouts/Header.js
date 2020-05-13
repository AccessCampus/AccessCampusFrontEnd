import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyles } from './layouts.styles';

const Header = () => {
    const header = HeaderStyles();
    return (
        <header>
            <FontAwesomeIcon
                className={header.title}
                icon={faRoute}
                color="#000080"
                size="5x"
                display="inline"
            />
            <Typography
                variant="h3"
                className={header.title}
                display="inline"
            >
                Access Campus
            </Typography>
        </header >
    )
}



export default Header;