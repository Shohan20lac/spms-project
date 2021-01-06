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
  MuiPickersUtilsProvider
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

class AddCourseForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            courseID: 0,
            courseTitle: '',
            courseDescription: '',
            creditHour: 0.0,
            deptID: '',
            degreeID: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeptIDSelectChange = this.handleDeptIDSelectChange.bind(this);
        this.handleDegreeIDSelectChange = this.handleDegreeIDSelectChange.bind(this);
    }

    handleChange (name, event) {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit (name, event) {
        this.setState({
            [name]: event.target.value
        });
    }  

    
    handleDeptIDSelectChange (event) {
        this.setState({
            deptID: event.target.value
        });
        this.props.onHandleChange(event);
    }

    handleDegreeIDSelectChange (event) {
        this.setState({
            degreeID: event.target.value
        });
        this.props.onHandleChange(event);
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
                            Add a Course
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="courseID"
                                label="courseID"
                                name="Course ID"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="courseTitle"
                                label="Course Title"
                                name="courseTitle"
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="courseDescription"
                                label="Course Description"
                                onChange={this.handleChange}
                                multiline
                                required
                                fullWidth
                                defaultValue=""
                                variant="filled"
                            />
                            <TextField
                                type="number"
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="creditHour"
                                label="Credit Hour"
                                name="creditHour"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                fullWidth
                                required
                                id="deptID"
                                name="deptID"
                                select
                                label="Department ID"
                                value={this.state.deptID}
                                onChange={this.handleDeptIDSelectChange}
                                variant="filled"
                                margin="normal"
                                >
                                    { /* load departments from database tab */ }
                            </TextField>
                            <TextField
                                fullWidth
                                required
                                id="degreeID"
                                name="degreeID"
                                select
                                label="Degree ID"
                                value={this.state.degreeID}
                                onChange={this.handleDegreeIDSelectChange}
                                variant="filled"
                                margin="normal"
                                >
                                    { /* load departments from database tab */ }
                            </TextField>
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

export default AddCourseForm;