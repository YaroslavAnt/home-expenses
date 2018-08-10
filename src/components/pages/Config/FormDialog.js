import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addCategory } from '../../../redux/listCategory';

class FormDialog extends React.Component {
  state = {
    open: false,
    category: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickDone = () => {
    const { addNewCategory } = this.props;
    const { category } = this.state;
    addNewCategory(category);
    this.setState({
      open: false,
      category: '',
    });
  };

  handleChange = (event) => {
    this.setState({ category: event.target.value });
  };

  render() {
    const { open, category } = this.state;
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="primary" variant="contained">
          ADD CATEGORY
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add new expenses</DialogTitle>
          <DialogContent>
            <DialogContentText>Please add new category of your expenses.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              onChange={this.handleChange}
              value={category}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickDone} color="primary" disabled={category.length === 0}>
              DONE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const MapStateToProps = state => ({ categories: state.listCategory });

const MapDispatchToProps = dispatch => ({
  addNewCategory: (text) => {
    dispatch(addCategory(text));
  },
});

FormDialog.propTypes = {
  addNewCategory: PropTypes.func.isRequired,
};

export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(FormDialog);
