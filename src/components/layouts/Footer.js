import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterStyles } from './layouts.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const footer = FooterStyles();

    return (
        <Grid container className={footer.grid} align={"center"}>
            <Grid item xs={12}>
                <a href="https://github.com/eyskim/AccessCampusFrontEnd">
                    <FontAwesomeIcon
                        className={footer.icon}
                        icon={faGithubSquare}
                        color={"#FFFFFF"}
                        size={"3x"}
                        display={"inline"}
                    />
                </a>
                <a href="https://www.access-campus-api.app/api/">
                    <FontAwesomeIcon
                        className={footer.icon}
                        icon={faDatabase}
                        color={"#FFFFFF"}
                        size={"3x"}
                        display={"inline"}
                    />
                </a>
            </Grid>
        </Grid>
    );
}

export default Footer;