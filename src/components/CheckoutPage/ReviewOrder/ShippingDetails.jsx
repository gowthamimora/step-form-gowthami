import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function ShippingDetails(props) {
    const {formValues} = props;
    const classes = useStyles();
    const {firstName, lastName,email, address1,
        zipcode, useAddressForPaymentDetails} = formValues;


    if (useAddressForPaymentDetails) {

        return (
            <Grid item container direction="column" xs={12} sm={6}>

                <Typography variant="h6" gutterBottom className={classes.title}>
                    Shipping details
                </Typography>
                <Grid container>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
                        </Grid>
                    </React.Fragment>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Email</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${email}`}</Typography>
                        </Grid>
                    </React.Fragment>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Address</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${address1}`}</Typography>
                        </Grid>
                    </React.Fragment>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Pin Code</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${zipcode}`}</Typography>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>

        )
    } else {
        return (
            <Grid item container direction="column" xs={12} sm={6}>

                <Typography variant="h6" gutterBottom className={classes.title}>
                    Shipping details
                </Typography>
                <Grid container>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
                        </Grid>
                    </React.Fragment>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Email</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{`${email}`}</Typography>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        );

    }

}

export default ShippingDetails;