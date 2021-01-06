import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

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

class AddSchoolForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            schoolName: '',
            deptLocation: '',
            deanInChargeName: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange (event) {
        this.props.onHandleChange(event);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.onHandleSubmit(event);
    }  

    handleSelectChange (event) {
        /*this.setState({
            accountType: event.target.value
        });*/
        this.props.onHandleChange(event);
    }
 
    render () {
        const classes = useStyles;
        let successMessage = this.props.successMessage;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Add a School to the University
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="schoolName"
                            label="School Name"
                            name="schoolName"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="deptLocation"
                            label="Department Location"
                            name="deptLocation"
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="deanInChargeName"
                            label="Dean In Charge Full Name"
                            name="deanInChargeName"
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
        );
    }
}

export default AddSchoolForm;