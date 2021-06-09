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
import ExploreIcon from '@material-ui/icons/Explore';
import Details from '../Details/Details';
import {Link, Route} from "react-router-dom";



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
    // console.log(badges.strBadge);
    

    const classes = useStyles();
    const url = `${badges.strBadge}`;

    const [visibility,setVisibility] = useState(false); 

    const handleExploreBtn= (id) =>{
        console.log("button clicked,id:",id);
        setVisibility(true);
        
    }
    console.log("visibility",visibility);
 


    return (
        <div>

            <Card>
               <div style={{display: "flex",justifyContent:'center'}}>
                    <CardMedia className = {classes.media}
                        
                        image= {url}
                        // image = "../../img/male2.jpg"
                        title={strLeague}
                    />
                 </div>
                 <div style={{display: "flex",justifyContent:'center'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" >
                            {strLeague}
                        </Typography>
                        <div style={{display: "flex",justifyContent:'center'}}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {strSport}
                         </Typography>
                         </div>
                    </CardContent>
                    </div>
                    <div style={{display: "flex",justifyContent:'center'}}>
                <CardActions>
                    <Link to={`/details/${idLeague}`}>
                    <Button 
                    size="small"
                    variant="contained"
                    color="primary"
                    alignment="center"
                    margin="auto"
                    startIcon={<ExploreIcon />}
                    onClick={() => { handleExploreBtn(idLeague) }}
                    >
                        Explore
                    </Button>
                    </Link>
                    
                </CardActions>
                </div>
            </Card>




        </div>
    );
};

export default LeagueCard;