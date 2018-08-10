import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  Icon,
  ListItemText,
  withStyles,
} from '../../node_modules/@material-ui/core';
import logo from '../logo.svg';

const drawerWidth = 300;

const styles = () => ({
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
    justifyContent: 'space-around',
  },
});

class DrawerUI extends Component {
  state = {};

  render() {
    const { classes } = this.props;
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
          <Typography variant="headline">Home expenses+</Typography>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem>
              <Avatar>
                <Icon>dashboard</Icon>
              </Avatar>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link to="/reports">
            <ListItem>
              <Avatar>
                <Icon>format_list_bulleted</Icon>
              </Avatar>
              <ListItemText primary="Reports" />
            </ListItem>
          </Link>

          <Link to="/config">
            <ListItem>
              <Avatar>
                <Icon>settings</Icon>
              </Avatar>
              <ListItemText primary="Config" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

DrawerUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerUI);
