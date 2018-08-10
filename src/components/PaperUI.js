import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    position: 'absolute',
    top: -20,
    left: 20,
    right: 20,
    backgroundColor: '#00b0c7',
    color: 'white',
  },
});

const PaperUI = (props) => {
  const { name, text, classes } = props;
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="headline" component="h3" color="inherit">
        {name}
      </Typography>
      <Typography component="p" color="inherit">
        {text}
      </Typography>
    </Paper>
  );
};

PaperUI.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(PaperUI);
