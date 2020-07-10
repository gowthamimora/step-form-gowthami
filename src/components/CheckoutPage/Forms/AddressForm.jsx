import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const cities = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: 'New York',
        label: 'New York'
    },
    {
        value: 'Chicago',
        label: 'Chicago'
    },
    {
        value: 'Saigon',
        label: 'Saigon'
    }
];

const states = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: 'Florida',
        label: 'Florida'
    },
    {
        value: 'Michigan',
        label: 'Michigan'
    },
    {
        value: 'Texas',
        label: 'Texas'
    }
];

const countries = [
    {
        value: null,
        label: 'None'
    },
    {
        value: 'United States',
        label: 'United States'
    },
    {
        value: 'Italy',
        label: 'Italy'
    },
    {
        value: 'Vietnam',
        label: 'Vietnam'
    }
];

export default function AddressForm(props) {
    const {
        formField: {
            address1,
            address2,
            city,
            state,
            zipcode,
            country,
            useAddressForPaymentDetails
        }
    } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <InputField name={address1.name} label={address1.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField name={address2.name} label={address2.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={city.name}
                        label={city.label}
                        data={cities}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={state.name}
                        label={state.label}
                        data={states}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={zipcode.name} label={zipcode.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={country.name}
                        label={country.label}
                        data={countries}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <CheckboxField
                        name={useAddressForPaymentDetails.name}
                        label={useAddressForPaymentDetails.label}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}