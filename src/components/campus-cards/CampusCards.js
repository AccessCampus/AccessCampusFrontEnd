import React from 'react';
import Grid from '@material-ui/core/Grid';
import CampusCard from '../campus-card/CampusCard';
import CampusCardsStyles from './CampusCards.styles';
import imgList from '../../data/imgList';

const CampusCards = ({ campusList }) => {
    const cards = CampusCardsStyles();

    return (
        <div className="campusCards">
            <Grid container className={cards.grid}>
                {campusList.map(({ campus, color }, index) =>
                    <Grid xs={12} md={6} item key={index}>
                        <CampusCard
                            campus={campus}
                            color={color}
                            image={imgList[campus]}
                        />
                    </Grid>
                )}
            </Grid>
        </div >
    );
};

export default CampusCards;