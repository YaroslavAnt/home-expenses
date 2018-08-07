import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
} from '../../node_modules/@material-ui/core';

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
  container: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 50,
    position: 'relative',
  },
  tableHead: {
    height: 100,
  },
});

const data = [
  {
    date: 'date',
    category: 'category',
    expenses: 'expenses',
    value: 'value',
  },
  {
    date: 'date',
    category: 'category',
    expenses: 'expenses',
    value: 'value',
  },
  {
    date: 'date',
    category: 'category',
    expenses: 'expenses',
    value: 'value',
  },
  {
    date: 'date',
    category: 'category',
    expenses: 'expenses',
    value: 'value',
  },
  {
    date: 'date',
    category: 'category',
    expenses: 'expenses',
    value: 'value',
  },
];

class DataOutput extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.root} elevation={3}>
          <Typography variant="headline" component="h3" color="inherit">
            New Expenses
          </Typography>
          <Typography component="p" color="inherit">
            Pleace input new expenses data here
          </Typography>
        </Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell>Date</TableCell>
              <TableCell numeric>Category</TableCell>
              <TableCell numeric>Expenses</TableCell>
              <TableCell numeric>Value, UAH</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={Math.random()}>
                <TableCell component="th" scope="row">
                  {n.date}
                </TableCell>
                <TableCell numeric>{n.category}</TableCell>
                <TableCell numeric>{n.expenses}</TableCell>
                <TableCell numeric>{n.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

DataOutput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataOutput);
