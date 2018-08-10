import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  TableCell, TableRow, Table, TableHead, TableBody, 
} from '@material-ui/core';
import PaperUI from '../../PaperUI';

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
    paddingTop: 50,
    position: 'relative',
  },
  tableHead: {
    fontSize: 20,
  },
});

class DataOutput extends React.Component {
  render() {
    const { classes, dataObj } = this.props;

    return (
      <div className={classes.container}>
        <PaperUI name="Latest Expenses" text="Here are latest expenses" color="primary" />
        {dataObj.length > 0 && (
          <Table>
            <TableHead>
              <TableRow className={classes.tableHead}>
                <TableCell>Date</TableCell>
                <TableCell numeric>Category</TableCell>
                <TableCell numeric>Expenses</TableCell>
                <TableCell numeric>Value, UAH</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataObj.map(n => (
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
        )}
      </div>
    );
  }
}

DataOutput.propTypes = {
  classes: PropTypes.object.isRequired,
  dataObj: PropTypes.array.isRequired,
};

const MapStateToProps = state => ({ dataObj: state.listItem });

export default withStyles(styles)(connect(MapStateToProps)(DataOutput));
