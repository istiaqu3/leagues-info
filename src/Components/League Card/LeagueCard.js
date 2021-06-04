import React, { useEffect, useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
}
    from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    media: {
      height: 150,
      width: 150,
    },

  });

const LeagueCard = (props) => { 
    const {strLeague, strSport, idLeague} =props.league;
    // console.log("props from leagueCard",props);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setBadge(data.leagues[0]) )
    },[idLeague]);
    const [badges,setBadge] = useState({});
    console.log(badges.strBadge);
    

    const classes = useStyles();
    const url = `${badges.strBadge}`;
 


    return (
        <div>

            <Card>
               
                    <CardMedia className = {classes.media}

                        image= {url}
                        title={strLeague}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {strLeague}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {strSport}
                         </Typography>
                    </CardContent>
               
                <CardActions>
                    <Button size="small" variant="contained" color="primary" alignment="center">
                        Explore
                    </Button>
                </CardActions>
            </Card>


        </div>
    );
};

export default LeagueCard;