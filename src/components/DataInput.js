import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Paper, Button } from '../../node_modules/@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    position: 'absolute',
    top: -25,
    left: 20,
    right: 20,
    backgroundColor: '#00b0c7',
    color: 'white',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 100,
    marginTop: 50,
    position: 'relative',
    justifyContent: 'space-around',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const currencies = [
  {
    value: 'Category1',
  },
  {
    value: 'Category2',
  },
  {
    value: 'Category3',
  },
  {
    value: 'Category4',
  },
];

class DataInput extends React.Component {
  state = {
    value: 'Category',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.root} elevation={3}>
            <Typography variant="headline" component="h3" color="inherit">
              New Expenses
            </Typography>
            <Typography component="p" color="inherit">
              Pleace input new expenses data here
            </Typography>
          </Paper>
          <TextField
            id="select-currency-native"
            select
            className={classes.textField}
            value={value}
            onChange={this.handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <TextField
            required
            id="Description"
            multiline
            rowsMax="4"
            className={classes.textField}
            placeholder="Description"
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            required
            id="Value"
            value="UAH"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="secondary" className={classes.button}>
            Add Expenses
          </Button>
        </form>
      </div>
    );
  }
}

DataInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataInput);
