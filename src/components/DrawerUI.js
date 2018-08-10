import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  Drawer,
  Avatar,
  Typography,
  Divider,
  Icon,
  withStyles,
  Button,
} from '../../node_modules/@material-ui/core';
import logo from '../logo.svg';

const drawerWidth = 300;

const styles = () => ({
  container: {
    display: 'flex',
    padding: 10,
    flexWrap: 'wrap',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#00b0c7',
    backgroundRepeat: 'no-repeat',
    backgroundImage:
      'url(https://image.freepik.com/free-vector/sunset-in-the-city-background_1092-42.jpg)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 10px',
    fontSize: 30,
  },
  active: {
    backgroundColor: '#00b0c7',
    color: '#fff',
  },
  button: {
    marginBottom: 10,
    flexGrow: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
});

class DrawerUI extends Component {
  state = {};

  render() {
    const { classes, item } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.logo}>
          <Avatar alt="logo" src={logo} />
          <Typography variant="headline">Home expenses</Typography>
        </div>
        <Divider />

        <div className={classes.container}>
          <Button
            component={Link}
            to="/"
            size="large"
            variant={item === 'Dashboard' ? 'contained' : 'outlined'}
            className={classNames(item === 'Dashboard' ? classes.active : null, classes.button)}
          >
            <Icon className={classes.rightIcon}>dashboard</Icon>
            Dashboard
          </Button>

          <Button
            component={Link}
            to="/reports"
            size="large"
            variant={item === 'Reports' ? 'contained' : 'outlined'}
            className={classNames(item === 'Reports' ? classes.active : null, classes.button)}
          >
            <Icon className={classes.rightIcon}>format_list_bulleted</Icon>
            Reports
          </Button>

          <Button
            component={Link}
            to="/config"
            size="large"
            variant={item === 'Config' ? 'contained' : 'outlined'}
            className={classNames(item === 'Config' ? classes.active : null, classes.button)}
          >
            <Icon className={classes.rightIcon}>settings</Icon>
            Config
          </Button>
        </div>
        <Divider />
      </Drawer>
    );
  }
}

DrawerUI.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.string.isRequired,
};

export default withStyles(styles)(DrawerUI);
