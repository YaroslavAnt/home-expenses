import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemText,
  Icon,
  Button,
  withStyles,
  Typography,
} from '@material-ui/core';
import PaperUI from '../../PaperUI';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 50,
    paddingTop: 50,
    position: 'relative',
  },
});

class ExpensesReport extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <PaperUI name="Edit Categories" text="Pleace config your categories" color="primary" />
        <Typography variant="title">
          Some text
          <Button variant="contained" color="primary" className={classes.button}>
            <Icon>arrow_upward</Icon>
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            <Icon>arrow_downward</Icon>
          </Button>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Single-line item" />
            <Button variant="contained" color="primary" className={classes.button}>
              <Icon>arrow_upward</Icon>
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              <Icon>arrow_downward</Icon>
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              <Icon>delete_forever</Icon>
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              <Icon>*</Icon>
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}

ExpensesReport.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpensesReport);
