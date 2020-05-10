import React from 'react';
import Grid from '@material-ui/core/Grid';
import CampusCard from '../campus-card/CampusCard';
import useCampusCardsStyles from './useCampusCardsStyles';

const CampusCards = ({ campusList }) => {
    const cards = useCampusCardsStyles();

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