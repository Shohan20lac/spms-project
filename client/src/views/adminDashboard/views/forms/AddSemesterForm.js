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

class AddSemesterForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            season: '',
            year: '',
            startDate: new Date('2014-08-18T21:11:54'),
            endDate: new Date('2014-08-18T21:11:54')
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleChange (event) {
        this.props.onHandleChange(event);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.onHandleSubmit(event);
    }  

    handleStartDateChange (event) {
        console.dir(event);
        this.setState({
            startDate: event
        });
        //this.props.onHandleChange(event);
    }

    handleEndDateChange (event) {
        console.dir(event);
        this.setState({
            endDate: event
        });
        //this.props.onHandleChange(event);
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
                            Add a Semester
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="season"
                                label="Semester Season"
                                name="season"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="year"
                                label="Semester Year"
                                name="year"
                                onChange={this.handleChange}
                            />
                            <KeyboardDatePicker
                                fullWidth
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="startDate"
                                label="Semester Start Date"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardDatePicker
                                fullWidth
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="endDate"
                                label="Semester End Date"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
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

export default AddSemesterForm;