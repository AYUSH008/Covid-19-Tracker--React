import React, {useState, useEffect} from 'react';
import {fetchDailyData } from '../../api';
import {Line , Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const Chart = ({ data: {confirmed, deaths, recovered} , country}) =>
{
    const [dailyData, setDailyData] = useState({});

    const classes = useStyles();
    useEffect(() =>{
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    
    fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
      ? ( 
      <Line 
      data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label:'Infected',
              borderColor: '#3333ff',
              backgroundColor: 'rgb(136,178,255)',
              fill: false,
              responsive: true,
          } , {
            data: dailyData.map(({ deaths }) => deaths),
            label:'Deaths',
            borderColor: '#3333ff',
            responsive:true,
            backgroundColor: 'rgba(255,0,0,0.5',
            fill: true,
          }],
      }}
     
     />) : null
        
    );

    const barChart = (
      confirmed
      ? (
        <Bar 
        data={{
        
          labels: ['Infected' , 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor:[
              'rgb(136,178,255)',
              'rgb(131, 245, 44)',
              'rgb(254, 7, 58)',
            ],
            data:[confirmed.value, recovered.value, deaths.value]
          }]

        }}
        options={{
          legend: {display: false},
          title: {display:true , text: `Current state in ${country}`}
        }}
        />
      ) : null
    )

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8}>
       <div className={styles.container}>
       {country ? barChart : lineChart}
       </div>
       </Grid>
       <Typography variant="h5" color="primary">Somthing have to add up</Typography>
       <Grid item xs={8} sm={8}>
       <div className={styles.container}>
       {lineChart}
       </div>
       </Grid>
       </Grid>
       </div>
    )
}

export default Chart;