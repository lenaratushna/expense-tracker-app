import React from 'react';
import { Typography, Card, CardHeader, CardContent, Divider, Grid } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $1
        </Typography>
        <Divider className={classes.divider}/>
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
