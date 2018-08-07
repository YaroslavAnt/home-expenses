import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../logo.svg';
import { Icon } from '../../node_modules/@material-ui/core';
import DataInput from './DataInput';
import DataOutput from './DataOutput';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#00b0c7',
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
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
    justifyContent: 'space-around',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    padding: theme.spacing.unit * 3,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.logo}>
              <Avatar alt="logo" src={logo} />
              <Typography variant="title">Home expenses</Typography>
            </div>
            <Divider />
            <List>
              <ListItem>
                <Avatar>
                  <Icon>dashboard</Icon>
                </Avatar>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Icon>format_list_bulleted</Icon>
                </Avatar>
                <ListItemText primary="Reports" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Icon>settings</Icon>
                </Avatar>
                <ListItemText primary="Config" />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.flexContainer}>
              <Typography>Dashboard</Typography>
              <Typography className={classes.flexContainer}>
                post
                <Icon align="right">perm_identity</Icon>
              </Typography>
            </div>
            <DataInput />
            <DataOutput />
          </main>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
