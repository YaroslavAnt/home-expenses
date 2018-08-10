import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PaperUI from '../../PaperUI';
import { addItem } from '../../../redux/listItem';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr 1fr',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 100,
    marginTop: 50,
    position: 'relative',
    justifyContent: 'space-between',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flexGrow: 1,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class DataInput extends React.Component {
  state = {
    category: '',
    expenses: '',
    date: '',
    value: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
      date: new Date().toLocaleDateString('en-US'),
    });
  };

  handleSubmit = (event) => {
    console.log(this.props);
    const { addNewItem } = this.props;
    event.preventDefault();
    addNewItem(this.state);
    this.setState({
      category: '',
      expenses: '',
      date: '',
      value: '',
    });
  };

  render() {
    const { classes, categories } = this.props;
    const { category, value, expenses } = this.state;

    console.log(this.state);
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <PaperUI name="New Expenses" text="Pleace input new expenses data here" color="primary" />
          <TextField
            id="select-currency-native"
            select
            className={classes.textField}
            value={category}
            onChange={this.handleChange('category')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            <option disabled>Category</option>
            {categories.map(option => (
              <option key={option} value={option.value}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            required
            value={expenses}
            id="Description"
            multiline
            rowsMax="4"
            className={classes.textField}
            placeholder="Description"
            onChange={this.handleChange('expenses')}
            margin="normal"
          />
          <TextField
            required
            value={value}
            id="Value"
            placeholder="Value, UAH"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('value')}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.handleSubmit}
          >
            Add Expenses
          </Button>
        </form>
      </div>
    );
  }
}

DataInput.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  addNewItem: PropTypes.func.isRequired,
};

const MapStateToProps = state => ({ categories: state.listCategory });

const MapDispatchToProps = dispatch => ({
  addNewItem: (item) => {
    dispatch(addItem(item));
  },
});

export default withStyles(styles)(
  connect(
    MapStateToProps,
    MapDispatchToProps,
  )(DataInput),
);
