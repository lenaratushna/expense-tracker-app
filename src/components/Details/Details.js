import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({title}) => {

  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardContent>
        <Typography variant="h5">{title} - ${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
