import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List, ListItem, ListItemText, Icon, Button, withStyles, Divider, 
} from '@material-ui/core';
import PaperUI from '../../PaperUI';
import FormDialog from './FormDialog';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 50,
    padding: '50px 20px',
    position: 'relative',
  },
});

class EditCategory extends Component {
  state = {};

  render() {
    const { classes, categories } = this.props;

    return (
      <div className={classes.container}>
        <PaperUI name="Edit Categories" text="Pleace config your categories" color="primary" />
        <List>
          {categories.map(category => (
            <div key={category}>
              <ListItem>
                <ListItemText primary={category} />
                <Button size="small" variant="contained" color="primary" className={classes.button}>
                  <Icon>arrow_upward</Icon>
                </Button>
                <Button size="small" variant="contained" color="primary" className={classes.button}>
                  <Icon>arrow_downward</Icon>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  <Icon>delete_forever</Icon>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  <Icon>*</Icon>
                </Button>
              </ListItem>
              <Divider inset />
            </div>
          ))}
        </List>
        <FormDialog />
      </div>
    );
  }
}

EditCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

const MapStateToProps = state => ({ categories: state.listCategory });

export default withStyles(styles)(connect(MapStateToProps)(EditCategory));
