import React from 'react';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="Salary">Salary</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" hiddenLabel="true" fullWidth />
      </Grid>
      <Button variant="contained" color="primary" className={classes.button} fullWidth >Create</Button>
    </Grid>
  );
};

export default Form;
