import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Icon, withStyles } from '../../node_modules/@material-ui/core';

const styles = () => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class UserBar extends Component {
  render() {
    const { classes, item } = this.props;
    return (
      <div className={classes.flexContainer}>
        <Typography variant="title">{item}</Typography>
        <Typography className={classes.flexContainer} variant="subheading">
          post+
          <Icon align="right">perm_identity</Icon>
        </Typography>
      </div>
    );
  }
}

UserBar.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserBar);
