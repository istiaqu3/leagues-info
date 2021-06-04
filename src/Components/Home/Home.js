import React, { useEffect, useState } from 'react';
import LeagueCard from '../League Card/LeagueCard';
import {Grid } from '@material-ui/core'

const Home = () => {
    const [leAgues, setLeague] = useState([]);
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const first20Leagues = data.leagues.slice(0,19)
                // console.log("First Twenty League Names",first20Leagues);
                setLeague(first20Leagues)
            })
    }, []);
    // console.log("League", leAgues);

    return (
        <div style={{marginLeft:"50px", marginRight:"50px",marginTop:"25px"}}>
            {/* <ol>
            {leAgues.map(lg => <li>{lg.strLeague}</li>)}
            </ol> */}
            <Grid container spacing={3} >
                {leAgues.map(league => 
                <Grid item xs={4} > 
                <LeagueCard league={league}></LeagueCard>
                </Grid>)}

            </Grid>
            
            
            
        </div >
    );
};

export default Home;