import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import {
    makeStyles,
    Grid,

} from '@material-ui/core';
import imgUrl from '../../img/male.png';
import InfoIcon from '@material-ui/icons/Info';
import FlagIcon from '@material-ui/icons/Flag';
import SportsIcon from '@material-ui/icons/Sports';
import WcIcon from '@material-ui/icons/Wc';

const useStyles = makeStyles({
    media: {
        height: 150,
        width: 150,
    },

});



const Details = () => {
    const classes = useStyles();
    const { idLeague } = useParams();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [idLeague]);
    const [details, setDetails] = useState({});
    console.log("Details", details);



    if (details.strGender === "Male") {
        // let imgUrl= `../../img/male.png`;  
        console.log("Male");
    }
    if (details.strGender === "Female") {
        // let imgUrl=`../../img/female.png`;
        console.log("female");
    }




    return (
        <div>


            <Grid container spacing={3} >
                <div style={{backgroundColor:"blue", marginTop:"20px",marginLeft:"14%",marginRight:"14%",borderRadius:"10px"}}>
                <Grid container  item xs={12} >
                    <Grid item xs={12} sm={6} >
                        <div style={{marginLeft:"20px"}}>
                    <h1>
                         {details.strLeague}
                    </h1>
                        <p>
                        <InfoIcon/> First match : {details.dateFirstEvent}
                    </p>
                        <p>
                            <FlagIcon/> Country : {details.strCountry}
                    </p>
                        <p>
                            <SportsIcon>
                                
                            </SportsIcon>
                            Sports Type: {details.strSport}
                    </p>
                        <p>
                            <WcIcon/> Gender : {details.strGender}
                    </p>
                    </div>

                    </Grid>
                    <Grid item xs={12} sm={6} >
                    <div style={{margin:"20px"}}>
                        <img src={imgUrl} style={{ width: "100%",height:"230px" }} />
                    </div>

                    </Grid>

                </Grid>
                </div>

                <Grid item xs={12}>
                <div style={{marginLeft:"14%",marginRight:"14%"}}>
                    <p>
                        {details.strDescriptionEN}
                    </p>
                 </div>

                </Grid>
                <Grid item xs={12}>
                <div style={{marginLeft:"14%",marginRight:"14%"}}>
                    <p>
                        {details.strDescriptionFR}
                    </p>
                 </div>

                </Grid>

            </Grid>


        </div>
    );
};

export default Details;