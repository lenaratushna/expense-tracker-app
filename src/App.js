import React from "react";
import { Grid } from "@material-ui/core";

import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={4}>
        <Main />
      </Grid>
      <Grid item container direction="column" spacing={3} xs={12} sm={3}>
        <Grid item>
          <Details title="Income" />
        </Grid>
        <Grid item>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
