import React from 'react';
import Grid from '@material-ui/core/Grid';
import CampusCard from '../campus-card/CampusCard';
import CampusCardsStyles from './CampusCards.styles';
const CampusCards = ({ campusList }) => {
    const cards = CampusCardsStyles();

    return (
        <div className="campusCards">
            <Grid container className={cards.grid}>
                {campusList.map(({ campus, color, image }, index) =>
                    <Grid xs={12} md={6} item key={index}>
                        <CampusCard
                            campus={campus}
                            color={color}
                            image={image}
                        />
                    </Grid>
                )}
            </Grid>
        </div >
    );
};

export default CampusCards;