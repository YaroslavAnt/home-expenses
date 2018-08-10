import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DrawerUI from '../../DrawerUI';
import UserBar from '../../UserBar';
import EditCategory from './EditCategory';

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
  content: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    padding: theme.spacing.unit * 3,
  },
});

class Config extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <DrawerUI />
          <main className={classes.content}>
            <UserBar item="Config" />
            <EditCategory />
          </main>
        </div>
      </div>
    );
  }
}

Config.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Config);