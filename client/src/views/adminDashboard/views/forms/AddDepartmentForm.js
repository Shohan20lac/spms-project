import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class AddDepartmentForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            deptID: '',
            schoolName: '',
            deptName: '',
            location: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.props.onHandleChange(event);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.onHandleSubmit(event);
    }  

    render () {
        const classes = useStyles;
        let successMessage = this.props.successMessage;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>

                        <Typography component="h1" variant="h5">
                            Add a Department
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="deptID"
                                label="Department ID"
                                name="deptID"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="schoolName"
                                label="School Name"
                                name="schoolName"
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="deptName"
                                label="Department Name"
                                name="deptName"
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="location"
                                label="Department Location"
                                name="location"
                                onChange={this.handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Save
                            </Button>
                        </form>
                        <Typography>
                            { successMessage }
                        </Typography>
                    </div>
                </Container>
            </MuiPickersUtilsProvider>
        );
    }
}

export default AddDepartmentForm;